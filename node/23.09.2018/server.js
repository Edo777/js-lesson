const http = require("http");
const log = console.log;

var SERVER = http.createServer((request, response) => {
    response.statusCode = 400;
    console.log(request.url);
    response.setHeader('Content-type', 'text/plain');

    response.statusMessage = "Name is required"; 
    response.end("hello");
});

SERVER.listen(3000, '127.0.0.1', () => {
    log("Listening ");
});

