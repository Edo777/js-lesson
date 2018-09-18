setTimeout(() => {
    console.log("timer1");
}, 0);
setTimeout(() => {
    console.log("timer1");
}, 0);
setTimeout(() => {
    console.log("timer1");
    process.nextTick(() => {
        console.log("tick");
    })
}, 0);
setTimeout(() => {
    console.log("timer1");
}, 0);
setTimeout(() => {
    console.log("timer2");
    process.nextTick(() => {
        console.log("tick2");
    })
}, 1000);

console.log("tick");