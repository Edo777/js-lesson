const daoEmitter = require("./dao");

daoEmitter.on(`reg`, (data) => {
    var _data;
    data.req.on(`data`, (req_data) => {
        _data = JSON.parse(req_data);
    });
    data.req.on(`end`, () => {
        if (!_data) {
            data.res.statusCode = 400;
            return data.res.end('faild');
        }
        if (!_data.username || !_data.password) {
            data.res.statusCode = 400;
            return data.res.end('faild');
        }  

        daoEmitter.emit('reg-dao', _data);
        daoEmitter.on('reg-service', (d) => {
            if (d.length) {
                data.res.statusCode = 200;
                return data.res.end(JSON.stringify({ data: d }));
            }
            data.res.statusCode = 400;
            return data.res.end('try again');
        })
    });
});





module.exports = daoEmitter;
