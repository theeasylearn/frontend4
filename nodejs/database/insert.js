var connection = require("./connection");
var sql = "insert into category(title,photo) values ('ac','ac.jpg')";
connection.con.query(sql,function(error,result){
    if(error)
        console.log(error);
    else 
        console.log("new record added with id " + result.insertId);
});
connection.con.end();