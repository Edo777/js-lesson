const dao = require("./dao");

class Service {
    registration(data, res) {
        if (!data.password || !data.username) {
            res.statusCode = 400;
            return res.end('username and password is required');
        }
        dao.registration(data).then((result) => {
            res.statusCode = 200;
            return res.end(JSON.stringify({ data: result }));
        }).catch((error) => {
            return res.end(error);
        })
    };
    //kgreq nuyn skzbunqov delete, update, get metodnery:
}

module.exports = new Service();