var mysql = require("./connection");
var express = require("express");
var fs = require('fs');
var FileName = "error.log";

var app = new express();
var ReturnError = function(error,response){
    if(error!=null)
    {
        var FileContent = "\nError No " + error.errno + " Message " + error.message;
        fs.appendFileSync(FileName,FileContent,function(e){
        if(e!=null)
            console.log(e.message);
        });
        response.json({error:'sorry could not connect, please try after some time'});
    }
    
}
//call built-in middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",function (request,response){
    response.json({message:'api created successfully'});
});
//http://127.0.0.1:5000/category
app.get("/category",function(request,response){
    var sql = "select id,title from category order by title";
    mysql.con.query(sql,function(error,result,fields){
        ReturnError(error,response);
        if(result.length==0)
        {
            response.json({error:'no category found'});
        }
        else 
        {
            var output = JSON.parse(JSON.stringify(result));
            response.send(output);
        }
    });
});
//http://127.0.0.1:5000/category/27
//http://127.0.0.1:5000/category/30
//http://127.0.0.1:5000/category/33
//http://127.0.0.1:5000/category/50
app.get("/category/:categoryid",function(request,response){
    var categoryid = request.params.categoryid;
    var sql = `select * from category where id=${categoryid} order by title`;
    mysql.con.query(sql,function(error,result,fields){
        ReturnError(error,response);
        if(result.length==0)
        {
            response.json({error:'no category found'});
        }
        else 
        {
            var output = JSON.parse(JSON.stringify(result));
            response.send(output);
        }
    
    });

});
//http://127.0.0.1:5000/category/33
app.delete("/category/:categoryid",function(request,response){
    var sql = "delete from category where id=" + request.params.categoryid;
    mysql.con.query(sql,function(error,result,fields){
        ReturnError(error,response);
        if(result.affectedRows==0)
            response.json({message:'category not found'});
        else
            response.json({message:'category has been deleted successfully'});
    });
})
//http://127.0.0.1:5000/category/calendar/calendar.jpg
app.get("/category/:title/:photo",function(request,response){
    var title = request.params.title;
    var photo = request.params.photo;
    var sql = `insert into category (title,photo) values ('${title}','${photo}')`;
    mysql.con.query(sql,function(error,result,fields){
        ReturnError(error,response);
        response.json({message:'new category has been added successfully'});
    });
});

//http://127.0.0.1:5000/category/mouse_pad/mouse_pad.jpg/35
app.get("/category/:title/:photo/:id",function(request,response){
    var title = request.params.title;
    var photo = request.params.photo;
    var id = request.params.id;
    var sql = `update category set title='${title}', photo='${photo}' where id=${id}`
    mysql.con.query(sql,function(error,result,fields){
        ReturnError(error,response);
        if(result.affectedRows==0)
            response.json({message:'category not found'});
        else
            response.json({message:'category has been updated successfully'});
    });
});
app.listen(5000);