var MongoDB = require("mongodb").MongoClient
var ConnectionURL = "mongodb://localhost:27017/frontend4"
MongoDB.connect(ConnectionURL,function(error,database){
    if(error!=null)
        console.log(error.errmsg);
    else 
    {
        var frontend4 = database.db("frontend4");
        var Condition = {name:'Mahek'}
        frontend4.collection("student").deleteOne(Condition,function(err,res){
            if(err!=null)
                console.log(err.errmsg);
            else 
            {
                console.log('Document deleted');
                database.close();
            }
        });
    }
});