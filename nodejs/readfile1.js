var http = require('http')
var fs = require('fs');
var server = http.createServer(function(request,response){

    fs.readFile("home.html",function(error,FileContent)
    {        
        response.writeHead(200,{'content-type':'html'});
        response.write(FileContent);
        response.end();
    });
});
server.listen(5000);
console.log("server is ready....");