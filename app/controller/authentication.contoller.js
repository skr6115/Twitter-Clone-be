const userAuthservice = require("../../service/userAuthservice");
module.exports={
    signup:async (req,res,next)=>{
      try{
    const {username, password, confirmpassword}=req.body;
    const response= await userAuthservice.Authservice({username, password, confirmpassword});
    res.json(response);
    }
    catch(err){
        console.log(err);
    }},
    login:async (req,res,next)=>{
      const {username,password}=req.body;
      const response = await userAuthservice.loginAuthUser({username,
      password});
      console.log(response);
      //res.cookie("authToken",response.token, {expire: 360000 + Date.now()});
      // res.redirect(`http://localhost:3000/profile/${response.id}`);
      res.status(200).json({authToken: response.token, id:response._id});
    },
    checkCookie: async (req,res,next)=>{
      const { authorization }=req.headers;
      const response= await userAuthservice.verifyUser(authorization);
     res.status(200).json({id: response._id});
    },
    getUser: async (req,res,next)=>{
      const {id} =req.params;
      const response= await userAuthservice.getUser(id);
     res.status(200).json({response});
    }
}