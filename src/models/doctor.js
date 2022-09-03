const mongoose=require('mongoose');

const doctor=mongoose.Schema({
    
    doctorName:String,
    doctorId:Number,
    doctorDegree:String,
    doctorSpecilization:String,
    doctorFees:Number
    
    

})
module.exports=mongoose.model("doctors",doctor);