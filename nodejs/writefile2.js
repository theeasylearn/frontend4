var fs = require('fs');
var FileName = "fruits.txt";
var FileContent = "apple banana mango";
fs.writeFileSync(FileName,FileContent);
console.log('file saved successfully')