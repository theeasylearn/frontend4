var express = require("express");
var student = require("./student_api");
var app = express();
//http://localhost:5000/students 
app.get("/students",(request,response) => student.getAllStudent(request,response));
app.listen(5000);
console.log("api started....");