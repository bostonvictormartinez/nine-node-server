var express=require('express');

var router=express.Router();

router.get("/", function(res,req){
  res.send('Search home page');
})

router.get('/about', function(req,res){
  res.send("about this search");
})

module.exports=router;
