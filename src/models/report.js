const mongoose=require('mongoose');

const report=mongoose.Schema({
    
    patientName:String,
    
    
    

})
module.exports=mongoose.model("reports",report);