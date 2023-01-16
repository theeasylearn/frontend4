var express = require("express");
var app = express();
var connection = require("./connection");

app.set("view engine","pug");
app.set("views","views");

app.get("/products",function(request,response){
    var sql = "select * from product order by id desc"
    connection.con.query(sql,function(error,result){
        if(error)
        {
            console.log(error);
            response.json({'error':'error occured'});
        }
        else 
        {
            var output_as_json = JSON.parse(JSON.stringify(result));
            // console.log(output_as_json);
            response.render('product',{
                'all_products':output_as_json
            });

        }
    });
});

app.listen(5000);
console.log("server is ready");