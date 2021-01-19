var express=require("express");
var router=require('./router.js');

var app=express();
app.use('/search', router);

//app.get("/", function(req,res){
//  res.send("welcome node session");
//});

app.all('/anymethod', function(req,res, ){ //add next once tested
  console.log('Accessing verb : ',req.method);
  next()
});


 //used in postman once server is listening
//postman GET http://localhost:3000 use POST post to cmd line express-server.js runs any POST data

app.listen(3000, function(){
  console.log("Example app listening.");
});


//must do npm install express then run node express-server.js
