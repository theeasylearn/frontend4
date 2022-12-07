var express = require("express");
var app = express(); //create object of express class 

//handle request for route(url/page address)
//127.0.0.1:5000/ (home)
app.get("/",function(request,response){
    response.send("<h1>Home</h1><hr/>");
});

//127.0.0.1:5000/aboutus
app.get("/aboutus",function(request,response){
    response.send("<h1>About us</h1><hr/>");
});

//127.0.0.1:5000/contactus
app.get("/contactus",function(request,response){
    response.send("<h1>Contact us</h1><hr/>");
});

//404 
app.get("*",function(request,response){
    response.send("<h1>Page not found</h1><hr/>");
});
app.listen(5000);
console.log("we are ready to accept request....");