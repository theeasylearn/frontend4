const { response } = require("express");
var express = require("express");
var student = require("./student_api");
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//http://127.0.0.1:5000/students 
app.get("/students",(request,response) => student.getAllStudent(request,response));

//http://127.0.0.1:5000/student/ShivKumar/IsconCity
app.post("/student",(request,response) => student.InsertStudent(request,response));

app.listen(5000);
console.log("api started....");