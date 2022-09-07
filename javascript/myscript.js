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

function setCookie(name,value,days) {
    var d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  function getCookie(name) {
    var name = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }