const http = require("http");
const CarService = require("./service/car.service");
const CarValidate = require("./validate/car.validate");

const server = http.createServer((req, res) => {
    var _data;
    req.on('data', (data) => {
        _data = JSON.parse(data);
    });
    req.on('end', () => {
        if (req.method.toLowerCase() === 'post') {
            switch (req.url) {
                case '/admin/car':
                    CarValidate.get(_data).then(() => {
                        return CarService.get(_data, res);
                    }).catch((error) => {
                        res.statusCode = 400;
                        return res.end(error);
                    })
                    break;
                default:
                    res.statusCode = 404;
                    return res.end('url is wrong');
            }
        }
    });
});

server.listen(3000, () => {
    console.log("listening");

})