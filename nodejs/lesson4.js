//importing local module
var mymodule = require("./mymodule2");
var name = require("./mymodule3");
var detail = require("./mymodule4");

//calling function from local module
mymodule.info("this is log message");
mymodule.warn("this is warn message");
mymodule.error("this is error message");
console.log(name);
console.log(detail.mobile);
console.log(detail.email);