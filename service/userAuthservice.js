const UserModel=require("../models/userModel");
const jsonwebTokens=require("jsonwebtoken");
const bcrypt=require("bcrypt");
module.exports={
 
    Authservice:async (requestBody)=>{
        const {username,password,confirmpassword}= requestBody;
        const salt=bcrypt.genSaltSync(+process.env.PASSWORD_HASH_ROUNDS);
        const maskedpassword=bcrypt.hashSync(password,salt);
        //console.log(maskedpassword);
        const user=new UserModel({
            user_name:username,
            password:maskedpassword,
            confirm_password:maskedpassword,
        })

        const response=await user.save();
        return response;

    },
    loginAuthUser: async (requestBody)=>{
        try{
            const{ username, password }=requestBody;
            const userData=await UserModel.findOne({user_name:username});
            console.log(userData);
            const passVerify=bcrypt.compareSync(password,userData.password);
            if(passVerify)
            {   
           const token = await jsonwebTokens.sign(userData.id,process.env.SECRET);
            userData.token = token;
            return userData; 
            }
            else {
                return "Error";
            }}
        catch(err)
        {
            console.log(err);
        }
    
    
},
        verifyUser: async (auth) =>{
            try{
            const verify= await jsonwebTokens.verify(auth, process.env.SECRET);
            const userData= await UserModel.findOne({_id:verify});
            return userData;
            // console.log(verify);
        }
        catch(err)
        {
            console.log(err);
            res.statusCode(401).json({message:"user not authenticated"});
        }
        },
        getUser: async (id)=>{
            try{
                const user = await User.findOne({_id:id})
                return user;
            }
            catch(err)
            {
                console.log(err);
                res.statusCode(401).json({message:"user not authenticated"});
            }
        }
}