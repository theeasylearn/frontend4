var express = require("express");
var app = express();
var mysql = require("./connection");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","pug");
app.set("views","pages");

app.get("/",function(request,response){
    response.render("home")
});
app.get("/aboutus",function(request,response){
    response.render("aboutus")
});
app.get("/products",function(request,response){
    var sql = "select * from site_products order by price";
    mysql.con.query(sql,function(error,result){
        if(error)
        {
            console.log(error);
        }
        else 
        {
            var ouput_as_json = JSON.parse(JSON.stringify(result));
            response.render("products",{site_products:ouput_as_json});
        }
    });
   
});
app.get("/services",function(request,response){
    var sql = "select * from services";
    mysql.con.query(sql,function(error,result){
        if(error)
        {
            console.log(error);
        }
        else 
        {
            var ouput_as_json = JSON.parse(JSON.stringify(result));
            response.render("services",{services:ouput_as_json});
        }
    });
});
app.get("/contactus",function(request,response){
    response.render("contactus")
});
app.post("/contactus",function(request,response){
    var name = request.body.name;
    var message = request.body.message;
    var email = request.body.email;
    var sql = `insert into contact (name,email,message) values ('${name}','${message}','${email}')`;
    mysql.con.query(sql,function(error,result){
        if(error)
        {
            console.log(error);
        }
        else 
        {
            response.render("home");
        }
    });
    //response.render("contactus")
});

app.listen(5000);
console.log("server is ready");