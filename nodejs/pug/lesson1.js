var express = require("express");
var app = express();
app.set("view engine","pug");
app.set("views","views");

app.get("/one",function(request,response){
   response.render("one") 
});

app.get("/two",function(request,response){
   response.render("two") 
});

app.get("/three",function(request,response){
   response.render("three") 
});

app.get("/login",function(request,response){
   response.render("login") 
});

app.get("/contact",function(request,response){
   response.render("contact",{
      name:'the easylearn academy',
      mobile: 9662512857,
      email : 'theeasylearn@gmail.com'
   });
});

app.listen(5000);
console.log("server is ready");