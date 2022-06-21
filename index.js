var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var router = require('./route')

var app = express()
app.use('/api',router)
app.listen(3000,()=>{
    console.log("Server Started");
})