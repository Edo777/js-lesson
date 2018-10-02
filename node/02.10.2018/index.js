const http = require("http");
const service = require("./service");
const Validate = require("./validate");

const server = http.createServer((req, res) => {
    let _data;
    req.on('data', (data) => {
        _data = JSON.parse(data);
    });
    req.on('end', () => {
        if (req.method.toLowerCase() === 'post') {
            switch (req.url) {
                case '/user':
                    Validate.registration()
                        .then(() => {
                            return service.registration(_data, res);
                        })
                        .catch((error) => {
                            res.statusCode = 400;
                            return res.end(error);
                        })
                    
                default:
                    res.statusCode = 404;
                    return res.end('url is wrong');
            }
        } else if (req.method.toLowerCase() === 'get') {

        } else if (req.method.toLowerCase() === 'put') {

        } else if (req.method.toLowerCase() === 'delete') {

        } else {
            res.statusCode = 404;
            return res.end('url is wrong')
        }
    });
});

server.listen(3000, () => {
    console.log("listening");
});