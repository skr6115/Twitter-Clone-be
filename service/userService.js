const UserModel=require("../models/userModel");
module.exports={
    postUserService:async (requestBody)=>{
    const {first_name,last_name,email_id,phone_number,password} =requestBody;
    const user=new UserModel({ first_name: first_name,
        last_name: last_name,
        email_id:email_id,
        phone_number:phone_number,
        password:password,});
    const response = await user.save();
    return response;
    },
    putUserService:async (requestBody,id)=>{
        const {email_id, phone_number, password}=requestBody;
        const response= await UserModel.updateOne({_id:id},{$set:{
            email_id:email_id,
            phone_number:phone_number,
            password:password,
        }});
        return response;
    },
    patchUserService:async (requestBody,id)=>{
        const {email_id}=requestBody;
        const response= await UserModel.updateOne({_id:id},{$set:{
            email_id:email_id,
        }});
        return response;

    },
    getAllUserService:async (query)=>{
        const response = await UserModel.find({});
       console.log(response);
        return response;
    },
    deleteUserService:async (id)=>{
        const response=await UserModel.deleteOne({_id:id});
        return response;
    },
    
}
