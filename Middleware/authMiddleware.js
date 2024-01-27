const checkIfExist=async (req,res,next)=>{
    try{
        const {authorization} = req.headers;
        const verify= await jsonwebTokens.verify(authorization, process.env.SECRET);
        await UserModel.findOne({_id:verify});
        next();
        // console.log(verify);
    }
    catch(err)
    {
        console.log(err);
        res.statusCode(401).json({message:"user not authenticated"});
    }
}

module.exports=checkIfExist;