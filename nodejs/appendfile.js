var fs = require('fs');
var FileName = "friends.txt";
var FileContent = "\nparam kushang";
fs.appendFile(FileName,FileContent,function(error){
    if(error==null)
        console.log("File has been saved successfully");
    else 
        console.log(error);
});