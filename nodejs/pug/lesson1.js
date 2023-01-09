var express = require("express");
var app = express();
app.set("view engine","pug");
app.set("views","views");

app.get("/one",function(request,response){
   response.render("one") 
});

app.listen(5000);
console.log("server is ready");