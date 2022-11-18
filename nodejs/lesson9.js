var http = require('http');
var server = http.createServer(function(request,response){
    var url = request.url;
    console.log(url);
    var output = '';
    response.writeHead(200,{'content-type':'html'})
    if(url=="/")
    {
        output = "<html><head></head><body><h1>Home</h1><hr/></body></html>";
    }
    else if(url=="/aboutus")
    {
        output = "<html><head></head><body><h1>About us</h1><hr/></body></html>";
    }
    else if(url=="/contactus")
    {
        output = "<html><head></head><body><h1>Contact us</h1><hr/></body></html>";
    }
    else if(url=="/workwithus")
    {
        output = "<html><head></head><body><h1>Work with us</h1><hr/></body></html>";
    }
    response.write(output);
    response.end();
});
server.listen(5000);
console.log('Server is ready....');