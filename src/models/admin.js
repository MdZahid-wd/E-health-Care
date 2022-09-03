const mongoose=require("mongoose");

const Admin=mongoose.Schema({
    name:String,
    adminId:Number,
    password:Number

})
module.exports=mongoose.model("admin",Admin);