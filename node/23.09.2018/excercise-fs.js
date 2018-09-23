const fs = require("fs");
const http = require("http");
const url = require("url");
const server_host = {
    port: 3000,
    host: '127.0.0.1'
};

const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            switch (req.url) {
                case '/message':
                    const file = url.parse(req.url).pathname + '.txt';
                    fs.readFile(__dirname + file, (err, result) => {
                        if (err) {
                            res.statusCode = 404;
                            res.setHeader(`Content-Type`, `text/plain`);
                            res.end(`not found that file`);
                            return
                        }
                        res.statusCode = 200;
                        res.statusMessage = 'Access';
                        res.setHeader(`Content-Type`, `text/plain`);
                        res.end(result.toString());
                        return
                    })
                    break;

                default:
                    res.statusCode = 404;
                    res.setHeader(`Content-Type`, `text/plain`);
                    res.end(`url not found`);
                    return
            }
            break;
        case 'POST':
        res.end('sxal ban')
            break
        default:
            res.end('sxal ban')
            break;
    }
});

server.listen(server_host.port, server_host.host, () => {
    console.log("listening to ", server_host.port);
});
