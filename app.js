console.log("This is our test for git hub. :P");

var http = require('http');
var url = require('url');
var fs = require('fs'); // file system
var timestamp = require('./timeStamp');

http.createServer(function(req,res){
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });
    /*
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("<h1>Welcome to the Homepage!</h1>");
    res.write("The day and time is:" + timestamp.timeStamp() + "<br>");
    res.write("this is the url you requested" + req.url + "<br>");
    var q = url.parse(req.url, true).query;
    var resTxt = q.id + " " + q.user;
    res.end(resTxt);
    */
}).listen(3030);