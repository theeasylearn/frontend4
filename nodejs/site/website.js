var express = require("express");
var app = express();

app.set("view engine","pug");
app.set("views","pages");

app.get("/",function(request,response){
    response.render("template")
});
app.listen(5000);
console.log("server is ready");