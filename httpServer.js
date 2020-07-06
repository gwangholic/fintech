var http = require("http");
console.log("server is starting");

http.createServer(function (req, res){
    console.log(req);
    console.log(res);
    var body = "hello Server";
    res.setHeader("Content-Type", "text/html; charset=utf-8"); // text/html , text/plain ...
    res.end("<html><h1>안녕하세요<h1></html>");
}).listen(3000);

// req : request
// res : response