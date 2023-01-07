const { response } = require("express");
var express = require("express");
var student = require("./student_api");
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   next();
});

//http://127.0.0.1:5000/students 
app.get("/students",(request,response) => student.getAllStudent(request,response));

//http://127.0.0.1:5000/insert_students 
app.get("/insert_students",(request,response) => student.inputform(request,response));

//http://127.0.0.1:5000/students 
app.get("/students/:id",(request,response) => student.getStudentById(request,response));

//http://127.0.0.1:5000/student
/* set content type : application/json for sending data in json format 
   put json object in body part like {"name":"bimal","city":"baroda"}

   set content type : application/x-www-form-urlencoded  for sending data in query string format 
   put query string in body part name=chintan&city=channai
*/
app.post("/student",(request,response) => student.InsertStudent(request,response));
// http://127.0.0.1:5000/student
app.put("/student",(request,response) => student.UpdateStudent(request,response));

// http://127.0.0.1:5000/student
app.delete("/student",(request,response) => student.DeleteStudent(request,response));


app.listen(5000);
console.log("api started....");