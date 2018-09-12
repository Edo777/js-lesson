const events = [
    { event: "setTimeout", isReady: false },
    { event: "setInterval", isReady: false },
    { event: "immediate", isReady: false },
    { event: "fs read", isReady: false },
    { event: "immediate", isReady: false }
];

while (events.length) {
    for (let i = 0; i < events.length; i++) {
        let ind = Math.floor(Math.random() * (events.length - 1));        
        events[ind].isReady = true;
        if (events[ind].isReady) {
            console.log(events[ind].event);
            
            events.splice(ind, 1);
        }
    }    
};

console.log("process exit");
function load(){

}