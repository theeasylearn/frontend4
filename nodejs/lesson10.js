var http = require('http');
var server = http.createServer(function (request, response) {
    var url = request.url;
    console.log(url);
    response.writeHead(200, { 'content-type': 'application/json' })
    if (url == "/info") {
        var person =
        {
            name: 'Ankit Patel',
            age: 37,
            weight: 76.25,
            gender: true,
        }
        var output = JSON.stringify(person);
        response.write(output);
    }
    response.end();
});
server.listen(5000);
console.log('Server is ready....');