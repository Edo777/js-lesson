const http = require("http");
const service = require("./service");

const server = http.createServer((req, res) => {
    let _data;
    req.on('data', (data) => {
        _data = JSON.parse(data);
    })
    req.on('end', () => {
        if (req.method.toLowerCase() === 'post') {
            switch (req.url) {
                case '/user':
                    return service.registration(_data, res)
                default:
                    res.statusCode = 404;
                    return res.end('url is wrong')
            }
        } else if (req.method.toLowerCase() === 'get') {

        } else if (req.method.toLowerCase() === 'put') {

        } else if (req.method.toLowerCase() === 'delete') {

        } else {
            res.statusCode = 404;
            return res.end('url is wrong')
        }
    })
});

server.listen(3000, () => {
    console.log("listening"); 
});