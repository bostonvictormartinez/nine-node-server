var http=require('http');
var url=require('url');
http.createServer(function(req, res){
  var urlParts=url.parse(req.url);
  console.log(req.url, urlParts);
  switch(urlParts.pathname){
    case"/":
  homepage(req,res);
  break;
    case"/read":
    read(req,res);
    break;
    case "/svc/update":
     update(req,res);
     break;
     default:
      homepage(req,res);
      break;
  }

}).listen(3000);
console.log('server running');

function homepage(req,res){
  res.end('hello homepage');
}


function read(req,res){
  res.end("hello no data for reading");
}
function update(req, res){
  res.end("hello no data for upload");
}

//node http_route.js output says server running. go to localhost:3000 for

/// Url {
//  protocol: null,
//  slashes: null,
//  auth: null,
//  host: null,
//  port: null,
//  hostname: null,
//  hash: null,
//  search: null,
//  query: null,
//  pathname: '/',
//  path: '/',
//  href: '/' }
