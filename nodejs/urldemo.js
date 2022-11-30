var http = require('http');
var fs = require('fs');
var url = require('url');

//start server 
var server = http.createServer(function(request,response){
    //http://127.0.0.1:5000/mango.html
    var query = url.parse(request.url);
    console.log('full url' + request.url);
    var filename =  "."  + query.pathname; // query.pathname return filename pass with url in our example it is mango.html 
    //read given file from project directory

    fs.readFile(filename,function(error,FileContent){
        if(error!=null)
        {
            response.writeHead(404,{'content-type':'text/html'});
            response.write("file not found");
        }
        else 
        {
            response.writeHead(200,{'content-type':'text/html'});
            response.write(FileContent);
        }
        response.end();
    });
    console.log(filename);
});

server.listen(5000);
console.log('server is started.....')