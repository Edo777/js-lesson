let refs = {
    timers: [
        { eventName: "setTimeout1", isReady: false },
        { eventName: "setTimeout2", isReady: true },
        { eventName: "setTimeout3", isReady: false },
        { eventName: "setTimeout4", isReady: true },],

    fses: [
        { eventName: "fsOperation1", isReady: false },
        { eventName: "fsOperation2", isReady: true },
        { eventName: "fsOperation3", isReady: false }],

    immediate: [
        { eventName: "immidateEvent1", isReady: false },
        { eventName: "immidateEvent2", isReady: false },
        { eventName: "immidateEvent3", isReady: true },]
}
// executes ready-made commands
for (let i = 0; i < refs.timers.length; i++) {
    let index = Math.floor(Math.random() * (refs.timers.length - 1));
   
    if (refs.timers[i].isReady) {
        console.log("done", refs.timers[i]);
        refs.timers.splice(i, 1);
    }
}

for (let i = 0; i < refs.fses.length; i++) {
   
    if (refs.fses[i].isReady) {
        console.log("done", refs.fses[i]);
        refs.fses.splice(i, 1);
    }
}

for (let i = 0; i < refs.immediate.length; i++) {
    
    if (refs.immediate[i].isReady) {
        console.log("done", refs.immediate[i]);
        refs.immediate.splice(i, 1);
    }
}
///////////////////////////////////////////////////////////////////////////////////////

//executes randomly selected commands
while (
    refs.timers.length
    +
    refs.fses.length
    +
    refs.immediate.length
    > 0

) {
    

    for (let i = 0; i < refs.timers.length; i++) {
        let index = Math.floor(Math.random() * (refs.timers.length - 1));
        //console.log(refs.timers.length);
        //console.log(index);
        refs.timers[index].isReady = true;
        if (refs.timers[i].isReady) {
            console.log("done", refs.timers[i]);
            refs.timers.splice(i, 1);
        }
    }

    for (let i = 0; i < refs.fses.length; i++) {
        let index = Math.floor(Math.random() * (refs.fses.length - 1));
        refs.fses[index].isReady = true;
        if (refs.fses[i].isReady) {
            console.log("done", refs.fses[i]);
            refs.fses.splice(i, 1);
        }
    }

    for (let i = 0; i < refs.immediate.length; i++) {
        let index = Math.floor(Math.random() * (refs.immediate.length - 1));
        refs.immediate[index].isReady = true;
        if (refs.immediate[i].isReady) {
            console.log("done", refs.immediate[i]);
            refs.immediate.splice(i, 1);
        }
    }


}

console.log(refs);
