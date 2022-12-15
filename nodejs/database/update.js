//example of how to run update query 
var mysql = require("./connection")
var sql = "update category set title='self development books',photo='books.jpg' where id=30"
mysql.con.query(sql,function(error,result){
    if(error)
    {
        console.log(error.message);
        console.log(error.errno);
    }
    else 
    {
        console.log('category updated successfully ',result.affectedRows)
    }
});
