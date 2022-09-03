const mongoose=require('mongoose');

const info=mongoose.Schema({
    name:String,
    patientIdNo:String,
    Password:String,
    problem:String,
    doctorId:String,
    doctorName:String
    
    

})
module.exports=mongoose.model("appintment",info);