var MongoDB = require("mongodb").MongoClient
var ConnectionURL = "mongodb://localhost:27017/frontend4"
MongoDB.connect(ConnectionURL,function(error,database){
    if(error!=null)
        console.log(error.errmsg);
    else 
    {
        var frontend4 = database.db("frontend4");

        frontend4.collection("student").find({},{projection:{_id:0}}).limit(2).toArray(function(error,document){
            if(error!=null)
                console.log(error.errmsg);
            else 
                console.log(document);
            database.close();
        });
    }
});