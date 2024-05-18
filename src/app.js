const express=require("express");
const dotenv=require("dotenv");
const db=require("../db/conn"); 
const app=express(); 
dotenv.config(); 
app.use(express.json())
app.use("/assistant",require("../Routers/assistant_route"))
app.listen(process.env.port,()=>{
    console.log(`hey listening on port no. ${process.env.port}`)
})