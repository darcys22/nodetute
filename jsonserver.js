var http = require('http')
var map = require('through2-map')
var url = require('url')

var server = http.createServer(function (req, res) {
  var urlinfo = url.parse(req.url, true)
  if (req.method == 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    router(urlinfo.pathname, new Date(urlinfo.query.iso), function (err, data) {
      res.end(data);
    });
  }
});

function router (route, date, callback) {
  switch(route) {
    case "/api/parsetime":
      callback(null, 
               JSON.stringify({"hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()})
              );
      break;
    case "/api/unixtime":
      callback(null, 
               JSON.stringify({"unixtime": date.getTime()})
              );
      break;
    default:
      callback("wrong route");  
  }
      
}

server.listen(process.argv[2]);

