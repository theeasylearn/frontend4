 let $ = function(id)
{
    return document.getElementById(id);
}
let html = function(id,text)
{
    $(id).innerHTML = text;
}
let _ = function(id)
{
    return $(id).value;
}
//arrow function 
let log = (msg) => console.log(msg);
let addition = (num1,num2) => parseInt(num1) + parseInt(num2);
let substraction = (num1,num2) => parseInt(num1) - parseInt(num2);
let multiplication = (num1,num2) => parseInt(num1) * parseInt(num2);
let division = (num1,num2) => parseInt(num1) / parseInt(num2);