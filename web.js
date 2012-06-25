var http = require("http");

var message = { "message" : "Hello, World!" };

http.createServer(function(req, res) {
    res.writeHeader(200, { "Content-Type" : "application/json" });
    res.end(JSON.stringify(message));
}).listen(8675, "0.0.0.0");