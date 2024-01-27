const userService=require("../../service/userService");
module.exports={
    getUsers:async (req,res,next)=>{
        const {query}=req;

       const response = await userService.getAllUserService(query);
        res.json(response);
},
    postUsers:async (req,res,next)=>{
        const {body}=req;
        const response=await userService.postUserService(body);
        res.json({message:"Successfully ins"});
    },
    patchUsers:async (req,res,next)=>{
        const {body, params}=req;
        const { id }=params;
        const response=await userService.patchUserService(body,id);
        res.json(response);

    },
    deleteUsers:async (req,res,next)=>{
        const {params}=req;
        const {id}=params;
        const response=await userService.deleteUserService(id);
        res.json(response);
    },
    putUsers:async (req,res,next)=>{
        const {body, params}=req;
        const { id }=params;
        const response=await userService.putUserService(body,id);
        res.json(response);
    }

}