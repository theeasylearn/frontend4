var express = require("express");
var app = express()
var ConvertValues = function (request) {
    var num1 = parseInt(request.params.num1);
    var num2 = parseInt(request.params.num2);
    var box = {
        'num1': num1,
        'num2': num2
    };
    return box;
}

//addition
//http://127.0.0.1:5000/add/10/3
app.get("/add/:num1/:num2", function (request, response) {
    var box = ConvertValues(request);
    var result = box.num1 + box.num2;
    response.send("addition = " + result);
});

//substraction
//http://127.0.0.1:5000/sub/10/3
app.get("/sub/:num1/:num2", function (request, response) {
    var box = ConvertValues(request);
    var result = box.num1 - box.num2;
    response.send("substraction = " + result);
});

//multiplication
//http://127.0.0.1:5000/mul/10/3
app.get("/mul/:num1/:num2", function (request, response) {
    var box = ConvertValues(request);
    var result = box.num1 * box.num2;
    response.send("multiplication = " + result);
});

//division
//http://127.0.0.1:5000/div/10/3
app.get("/div/:num1/:num2", function (request, response) {
    var box = ConvertValues(request);
    var result = box.num1 / box.num2;
    response.send("division = " + result);
});

app.listen(5000);
console.log("we are ready.....");