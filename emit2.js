const emitter = require("./emit");

emitter.on('start', (d) => {
    console.log(d);
})