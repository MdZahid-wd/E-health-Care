const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express();
const hbs=require('hbs');
const routes=require('./routers/main');
const Info=require("./models/appointment");
const bodyParser = require('body-parser');
const admin=require("./models/admin");
const doctor=require("./models/doctor");
const report=require('./models/report');

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use('',routes);
//trmplate engine
app.set('view engine','hbs');
app.set("views","view");
hbs.registerPartials("view/partials");


//css/style.css
app.use('',express.static("public"));


//db connection
mongoose.connect("mongodb://localhost/e-health",()=>{
    console.log("db connected");

    // Info.create({
    //     name:"Md Zahid",
    // patientIdNo:"943",
    // Password:"49",
    // problem:"no",
    // doctorId:"493",
    // doctorName:"eram"
    
    // })
    // admin.create({
    //     name:"Eram Jamal",
    //     adminId:786786,
    //     password:786786

    // })
    // doctor.create({
    //     doctorName:"Dr halder",
    // doctorId:3,
    // doctorDegree:"Phd",
    // doctorSpecilization:"brain",
    // doctorFees:500
    // },{
    //     doctorName:"Dr Ankit",
    //     doctorId:4,
    //     doctorDegree:"MMBS",
    //     doctorSpecilization:"eye",
    //     doctorFees:400
    // }
    //)
    // report.create(
    //     {
    //         patientName:"chuhia"
    // },
    // {
    //     patientName:"cpagal"
        
    // }
    // )


});









//server start
app.listen(process.env.PORT | 3000,()=>{
    console.log("server started");
});