const mongoose=require("mongoose"); 
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact_no:{
        type:Number,
        required:true,
        unique:true
    },
    City:{
        type:String,
        required:true 
    },
    Pincode:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true 
    }
},{timestamps:true}); 
const Assistant= new mongoose.model("Assistant",userSchema);

module.exports= Assistant; 