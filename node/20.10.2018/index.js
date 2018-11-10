const express = require("express");
const server = express();
const clientService = require("./service");
const Validate = require("./validate");
server.use(express.json());
server.post('/client', Validate.signUp, clientService.signUp);
server.post('/client/login', Validate.signUp, clientService.login);

server.listen(3000, () => {
    console.log("listening");
});
