const http = require("http");
const serviceEmitter = require("./service");
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/reg':
            serviceEmitter.emit('reg', { req, res });
            break;
        default:
            res.statusCode = 404;
            return res.end('not found that url');
    }
})

server.listen(3000, () => {
    console.log(`listening `);
})