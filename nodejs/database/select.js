//example of how to run update query 
var mysql = require("./connection");
var sql = "select * from category order by title";
mysql.con.query(sql,function(error,result){
    if(error)
    {
        console.log(error.message);
        console.log(error.errno);
    }
    else 
    {
        var size = result.length;
        for(let index=0;index<size;index=index+1)
        {
            console.log(result[index].id," ",result[index].title," ",result[index].photo);
        }
    }
});
