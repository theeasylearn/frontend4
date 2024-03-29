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
app.get("/contact2",function(request,response){
   response.render("contact",{
      mobile: 9662512857,
      email : 'theeasylearn@gmail.com'
   });
});

app.get("/loop1",function(request,response){
   response.render("loop1",{
      countries : ['India','Australia','Brazil','US','UK']
   });
});

app.get("/loop2",function(request,response){
   response.render("loop2",{
      languages : ['Hindi','Gujarati','Marathi','Tamil','Telugu']
   });
});

app.get("/loop3",function(request,response){
   response.render("loop3",{
      book : {name:'The Secret',author:'Unknown',pages:200,price:500}
   });
});
app.get("/loop4",function(request,response){
   response.render("loop4");
});


app.listen(5000);
console.log("server is ready");