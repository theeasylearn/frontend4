var mysql = require('mysql')
var con = mysql.createConnection({
    user:"root",
    password:"",
    port:3308,
    database: "node",
    host: "localhost"
});
con.connect(function(error){
    if(error)
        console.log("Error occured " + error.message);
    else 
        console.log("Connection established....");
});
//export con object as con so other js file can use it.
module.exports.con = con;
