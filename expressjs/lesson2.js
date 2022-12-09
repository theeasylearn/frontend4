var express = require("express")
var app = express()

//get for /contactus 
app.get("/contactus",function(request,response){
    response.send("this is get request for contact us page....");
});

app.post("/contactus",function(request,response){
    response.send("this is post request for contact us page....");
});

app.put("/contactus",function(request,response){
    response.send("this is put request for contact us page....");
});

app.delete("/contactus",function(request,response){
    response.send("this is delete request for contact us page....");
});

var port = 5000;
app.listen(port,function(error){
    if(error!=null)
        console.log(error);
    else 
        console.log("we are ready to accept request.....");
});
