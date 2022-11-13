var express = require('express');
var app = express();
var fs = require("fs");
var users = {};

function readResourceFile(filePath){
  return fs.readFileSync(filePath);
}

app.get('/users', function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/json'});
   response.end(users);
})

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   users = readResourceFile("../resources/users.json");
   console.log("Example app listening at http://%s:%s", host, port);
})