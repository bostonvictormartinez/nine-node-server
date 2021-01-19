//restful webservices
var http=require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Welcome node session');
}).listen(3000);
console.log('server on host 3000');
