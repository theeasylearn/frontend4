var express = require("express");
var app = express();

app.set("view engine","pug");
app.set("views","pages");

app.get("/",function(request,response){
    response.render("home")
});
app.get("/aboutus",function(request,response){
    response.render("aboutus")
});
app.get("/products",function(request,response){
    response.render("products")
});
app.get("/services",function(request,response){
    response.render("services")
});
app.get("/contactus",function(request,response){
    response.render("contactus")
});
app.listen(5000);
console.log("server is ready");