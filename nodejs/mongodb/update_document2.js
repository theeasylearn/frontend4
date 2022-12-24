var MongoDB = require("mongodb").MongoClient
var ConnectionURL = "mongodb://localhost:27017/frontend4"
MongoDB.connect(ConnectionURL,function(error,database){
    if(error!=null)
        console.log(error.errmsg);
    else 
    {
        var frontend4 = database.db("frontend4");
        var Condition = {age:37}
        var NewValue = {$set : {age:40} };

        frontend4.collection("student").updateOne(Condition,NewValue,function(err,res){
            if(err!=null)
                console.log(err.errmsg);
            else 
            {
                console.log('Document(s) updated');
                database.close();
            }
        });
    }
});