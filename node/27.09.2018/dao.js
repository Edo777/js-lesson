const { users } = require("./db");

const { EventEmitter } = require("events");
const emitter = new EventEmitter();

emitter.on('reg-dao', (data) => {
    data.password.hash()
    users.push(data);
    setImmediate(() => {
        emitter.emit('reg-service', users);
    })
})


module.exports = emitter;