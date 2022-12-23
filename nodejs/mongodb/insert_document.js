var MongoDB = require("mongodb").MongoClient
var ConnectionURL = "mongodb://localhost:27017/frontend4"
MongoDB.connect(ConnectionURL,function(error,database){
    if(error!=null)
        console.log(error.errmsg);
    else 
    {
        var frontend4 = database.db("frontend4");
        var document = 
        {
            name : 'Ankit',
            surname : 'Patel',
            age : 37,
            weight: 75.25
        };
        frontend4.collection("student").insertOne(document,function(err,res){
            if(err!=null)
                console.log(err.errmsg);
            else 
            {
                console.log('Document added');
                database.close();
            }
        });
    }
});