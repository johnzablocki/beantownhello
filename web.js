var http = require("http");

var message = { "message" : "Hello, Beantown alt.net Git World!" };

http.createServer(function(req, res) {
    res.writeHeader(200, { "Content-Type" : "application/json" });
    res.end(JSON.stringify(message));
}).listen(process.env.PORT || 8675, "0.0.0.0");