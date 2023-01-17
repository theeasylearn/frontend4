var express = require("express");
var app = express();

app.set("view engine","pug");
app.set("views","views");

app.get("/",function(request,response){
    response.render("home")
});
app.get("/aboutus",function(request,response){
    response.render("aboutus")
});
app.get("/contactus",function(request,response){
    response.render("contactus")
});


app.listen(5000);
console.log("server is ready");