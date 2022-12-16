var mysql = require("./connection");
var express = require("express");
var app = new express();

//call built-in middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",function (request,response){
    response.json({message:'api created successfully'});
});
app.listen(5000);