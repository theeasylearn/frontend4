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
            var Condition = {"name":{$ne:null}}
            nodejs.collection("student").find(Condition,{}).sort(byname).toArray(function(error,student){
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
let InsertStudent = function(request,response){
    common.MongoClient.connect(common.Connection,function(error,database){
        if(error!=null)
            console.log(error.errmsg);
        else 
        {
            var nodejs = database.db(common.DATABASE_NAME);
            console.log('request body ',request.body);
            var document = {
                name: request.body.name,
                city: request.body.city
            };
            nodejs.collection("student").insertOne(document,function(error,result){
                if(error!=null)
                    console.log(error.errmsg);
                else 
                    response.json({'message':'Student added successfully'});
                database.close();
            });
        }
        
    });
}
module.exports.getAllStudent = getAllStudent;
module.exports.InsertStudent = InsertStudent;