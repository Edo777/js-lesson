class Validate {
    static signUp(req, res, next) {
        if(!req.body.username || !req.body.password) {
            return res.status(400).send("Username or password is required!");
        }
        next();
    }
}

module.exports = Validate;