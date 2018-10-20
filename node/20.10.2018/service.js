const clientDao = require("./client.dao");
class Service {
    static signUp(req, res) {
        clientDao.signUp(req.body.username, req.body.password)
            .then(r => res.status(200).send(r))
            .catch(e => res.status(500).send(e));
    }

    static login(req, res) {
        clientDao.login(req.body.username, req.body.password)
            .then(r => res.status(200).json(r))
            .catch(e => res.status(400).send(e));
    }
}

module.exports = Service;