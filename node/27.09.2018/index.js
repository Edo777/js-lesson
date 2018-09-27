const http = require("http");
const serviceEmitter = require("./service");
const server = http.createServer((req, res) => {
    serviceEmitter.emit(req.url, {
        req: req, 
        res: res
    });
})

server.listen(3000, () => {
    console.log(`listening `);
})