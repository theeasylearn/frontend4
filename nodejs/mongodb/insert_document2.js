var MongoDB = require("mongodb").MongoClient
var ConnectionURL = "mongodb://localhost:27017/frontend4"
MongoDB.connect(ConnectionURL,function(error,database){
    if(error!=null)
        console.log(error.errmsg);
    else 
    {
        var frontend4 = database.db("frontend4");
        var objects = [
            {name:'Ankit',age:37},
            {name:'Mahek',weight:80.22},
            {name:'param',surname:'patel'},
            {name:'Ankit',surname:'patel'},
            {name:'Ankit',weight:75.12},
        ];
        frontend4.collection("student").insertMany(objects,function(err,res){
            if(err!=null)
                console.log(err.errmsg);
            else 
            {
                console.log('Document(s) added');
                database.close();
            }
        });
    }
});