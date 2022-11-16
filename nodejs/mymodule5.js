//example of local module 
module.exports.info = function(msg){
        console.info('info ' + msg);
    };
module.exports.warn = function(msg){
        console.warn('warning ' + msg);
    };
module.exports.error=function(msg){
        console.error('error ' + msg);
    };
    
