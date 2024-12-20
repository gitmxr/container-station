const http = require("http");
http.createServer(function(req, res){
    console.log("request received")
    res.end("Hey from server side contianer")
}).listen(3000);
console.log("server started");