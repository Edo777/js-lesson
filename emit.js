const EventEmitter = require("events").EventEmitter;

const emitter = new EventEmitter();

setImmediate(() => {
    emitter.emit('start', { name: "edgar" });
})


module.exports = emitter;