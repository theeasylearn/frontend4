var common = require("./common");
let  getAllStudent  = function (request,response)
{
    console.log("request received....");
    common.MongoClient.connect(common.Connection,function(error,database){
        if(error!=null)
            console.log(error.errmsg);
        else 
        {
            var nodejs = database.db(common.DATABASE_NAME);
            var byname = { name : -1}; // use 1 for asending order -1 for descending order 
            nodejs.collection("student").find({},{}).sort(byname).toArray(function(error,student){
                if(error!=null)
                {
                    console.log(error.errmsg);
                }
                else 
                {
                    var output = JSON.parse(JSON.stringify(student));
                    response.send(output);
                }
                database.close();
            });
        }
    });
}
module.exports.getAllStudent = getAllStudent;