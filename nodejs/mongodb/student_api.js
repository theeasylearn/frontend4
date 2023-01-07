var common = require("./common");
var fs = require("fs");
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
            nodejs.collection("student").find(Condition,{}).toArray(function(error,student){
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
let  getStudentById  = function (request,response)
{
    console.log("request received....");
    common.MongoClient.connect(common.Connection,function(error,database){
        if(error!=null)
            console.log(error.errmsg);
        else 
        {
            var nodejs = database.db(common.DATABASE_NAME);
            var Condition = {
                _id : new common.ObjectId(request.params.id)
            }
            nodejs.collection("student").find(Condition,{}).toArray(function(error,student){
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
let inputform = function(request,response){
    var FileName = "insert_student.html";
    var FileContent = fs.readFileSync(FileName);
    response.send(FileContent.toString());
}

let InsertStudent = function(request,response){
    common.MongoClient.connect(common.Connection,function(error,database){
        if(error!=null)
            console.log(error.errmsg);
        else 
        {
            var nodejs = database.db(common.DATABASE_NAME);
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

let UpdateStudent = function(request,response){
    common.MongoClient.connect(common.Connection,function(error,database){
        if(error!=null)
            console.log(error.errmsg);
        else 
        {
            var nodejs = database.db(common.DATABASE_NAME);
            var document = {
               $set : 
               {
                name: request.body.name,
                city: request.body.city
               }
            };
            var Condition = {
                _id : new common.ObjectId(request.body.id)
            }
            nodejs.collection("student").updateOne(Condition,document,function(error,result){
                if(error!=null)
                    console.log(error.errmsg);
                else 
                    response.json({'message':'Student Updated successfully'});
                database.close();
            });
        }
        
    });
}

let DeleteStudent = function(request,response){
    common.MongoClient.connect(common.Connection,function(error,database){
        if(error!=null)
            console.log(error.errmsg);
        else 
        {
            var nodejs = database.db(common.DATABASE_NAME);
            var Condition = {
                _id : new common.ObjectId(request.body.id)
            }
            nodejs.collection("student").deleteOne(Condition,function(error,result){
                if(error!=null)
                    console.log(error.errmsg);
                else 
                    response.json({'message':'Student Deleted successfully'});
                database.close();
            });
        }
        
    });
}
module.exports.getAllStudent = getAllStudent;
module.exports.InsertStudent = InsertStudent;
module.exports.UpdateStudent = UpdateStudent;
module.exports.DeleteStudent = DeleteStudent;
module.exports.getStudentById = getStudentById;
module.exports.inputform = inputform;