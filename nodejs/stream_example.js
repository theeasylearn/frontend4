var fs = require('fs');
function ReadFromFile() {
   var count = 0; 
   var readStream = fs.createReadStream('content.html', 'utf-8');
   readStream.on('error', (error) => console.log(error.message));
   readStream.on('data', (FileContent) => {
        console.log(FileContent);
        count= count + 1;
   });
   readStream.on('end', () => console.log(count));
};
ReadFromFile();
// https://fusebit.io/blog/process-large-files-nodejs-streams/?utm_source=www.google.com&utm_medium=referral&utm_campaign=none