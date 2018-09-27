const db = require("./db");
const { EventEmitter } = require("events");
const emitter = new EventEmitter();

emitter.on('login-service', (data) => {
    setImmediate(() => {
        emitter.emit('login-dao', db.users);
    })
})


module.exports = emitter;