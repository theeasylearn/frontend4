var connection = require("./connection");
var sql = "delete from category where id=29";
connection.con.query(sql,function(error,result){
    if(error)
        console.log(error);
    else 
        console.log("no record deleted = " + result.affectedRows);
});
connection.con.end();