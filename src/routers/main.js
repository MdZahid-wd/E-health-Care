const express=require('express');
const routes=express.Router();
const info=require("../models/appointment");
const AppointmentInfo=require("../models/doctor");
const async = require('hbs/lib/async');
const admin=require('../models/admin');
const doctor=require('../models/doctor');
const report=require('../models/report');



routes.get("/",(req,res)=>{
    console.log("in index");
    res.render("index");
})
routes.get("/admin",(req,res)=>{
    console.log("in admin");
    res.render("admin");
})
routes.get("/appointment",(req,res)=>{
    console.log("in appointment")
    res.render("appointment");
})
routes.post("/appointment",async(req,res)=>{
    
    console.log("form is submited");
    console.log(req.body);
    try{
        const data=await info.create(req.body);
        console.log(data);
        res.redirect("/")
    }catch(e){
        console.log(e);
        res.redirect("/");
    }

});
routes.post("/control",async(req,res)=>{
    const data=await admin.findOne({"adminId":req.body.adminId});
    console.log(data);
    console.log(req.body.adminId);
    console.log("admin form is submitted");
    if(req.body.password==data.password){
        res.render("control");
    }
    else{
        const a="password is incorrect";
        res.render("admin",{error:a});

        
    }
});
routes.get("/doctor-table",async(req,res)=>{
    const data=await doctor.find();
    console.log(data);
    
    res.render("doctor-table",{data:data});
});
routes.get("/patient",(req,res)=>{
    console.log("in appointment")
    res.render("patient",{});
});
routes.post("/patient",async(req,res)=>{
    console.log("patient form is submitted");
    console.log(req.body);
    const data=await report.findOne({"patientName":req.body.patientName});
    console.log(data);
    if(data){
        
        res.render("report",{data:data});
    }
    else{
        const a="patient name is invalid"
        res.render("patient",{error:a});
    }
});
routes.get("/login",(req,res)=>{
    console.log("in login");
    res.render("login");
    });



module.exports=routes;