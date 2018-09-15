const { EventEmitter } = require("events");

class MyEventEmitter extends EventEmitter {
    constructor() {
        super();
        setImmediate(() => {
            this.emit('eventName', "hello");
        })
            

    }
};
const emitter = new MyEventEmitter();
emitter.on('newListener', (event) => {
    console.log(event);
});

emitter.on('eventname', () => {
    console.log("bhjbub");
});
emitter.on('eventname2', () => {
    console.log("bhjbub");
});