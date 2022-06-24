var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var router = require('./route')

mongoose.connect("mongodb+srv://viraj123:V3915791@cluster0.w1sz0.mongodb.net/Student?retryWrites=true&w=majority").then(()=>{
    console.log("DB Connected");

    app = express()
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(express.json())
    app.use('/api',router)

    app.listen(3000,()=>{
        console.log("Server Started.");
    })
}).catch((err)=>{
    console.log(err);
})

/*
var app = express()
app.use('/api',router)
app.listen(process.env.PORT,()=>{
    console.log("Server Started");
}) */