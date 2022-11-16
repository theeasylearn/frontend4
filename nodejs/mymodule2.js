//example of local module 
var log = {
    info:function(msg)
    {
        console.info('info ' + msg);
    },
    warn:function(msg)
    {
        console.warn('warning ' + msg);
    },
    error:function(msg)
    {
        console.error('error ' + msg);
    }
}
//exporting object
module.exports = log;