var log = console.log;
class Emitter {
    constructor() {
        this.events = {};
    }

    emit(event, data) {
        this.events[event] = {}
        this.events[event].data = data;
        this.events[event].isNew = true;
    }

    on(event) {
        this.events[event].interval = setInterval(() => {
            if (this.events[event].isNew) {
                console.log(this.events[event].data);
                this.events[event].isNew = false;
            }
        }, 100)
    }

    removeListener(event){
        clearInterval(this.events[event].interval);
    }
}

const emitter = new Emitter();

emitter.emit('start', 8);
emitter.on('start');
setTimeout(() => {
    emitter.removeListener('start');
}, 5000)

