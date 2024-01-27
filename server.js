require("dotenv").config();
const mongoose=require("mongoose");
const dbConfig=require("./dbconfig/dbConfig");
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const PORT=4000;
//console.log(process.env.SECRET);
mongoose
.connect(dbConfig.dbUrl)
.then((res)=>console.log("connected to db"))
.catch((err)=>console.log("didn't connect",err));
app.use(cors());
app.use(bodyParser.json());
app.get("/health",(req,res)=>{
    res.json({
        okay:"vachndi",
        status:200
    })
})


require("./routes/user.routes")(app);
require("./routes/authentication.route")(app);

app.listen(PORT,()=>{
    console.log(`server is running at port : ${PORT}`)
})