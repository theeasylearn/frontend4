var fs = require('fs');
var FileName = "friends.txt";
var FileContent = "param kushang";
fs.writeFile(FileName,FileContent,function(error){
    if(error==null)
        console.log("File has been saved successfully");
    else 
        console.log(error);
});