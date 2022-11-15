//create web server 
var http = require('http');
var server = http.createServer(function(request,response){
    //all the code between braces pair will execute for each and every reqeust
    console.log("Request received.....");
});
server.listen(5000);
console.log("Server is started.....");