const dao = require("../dao/car.dao");

class Service {
    get(data, res) {
        dao.get(data.id).then((car) => {
            delete car.isDeleted;
            return res.end(JSON.stringify(car));
        }).catch((error) => {
            return res.end(error);
        })
    };
}
module.exports = new Service();