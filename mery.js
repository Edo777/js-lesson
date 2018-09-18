let refs = {
    timers: [
        { eventName: "setTimeout1", isReady: false },
        { eventName: "setTimeout2", isReady: false },
        { eventName: "setTimeout3", isReady: false },
        { eventName: "setTimeout4", isReady: false },],

    fses: [
        { eventName: "fsOperation1", isReady: false },
        { eventName: "fsOperation2", isReady: false },
        { eventName: "fsOperation3", isReady: false }],

    immediate: [
        { eventName: "immidateEvent1", isReady: false },
        { eventName: "immidateEvent2", isReady: false },
        { eventName: "immidateEvent3", isReady: false },]
}
//Math.random() * (max - min) + min;
let readyEvents = () => {
    for (let obj in refs) {
        //console.log(value + " " + refs[value][0].eventName)
        for (let i = 0; i < refs[obj].length; i++) {
            let randVal = Math.round(Math.random() + 1);
            console.log(randVal)
            if (randVal % 2 === 0) {
                refs[obj][i].isReady = true;
            }
            console.log(refs[obj][i])
        }
    }
    console.log('%%%%');
};
while (refs.timers.length + refs.immediate.length + refs.fses.length > 0) {
    readyEvents();
    //1.tick
    for (let i = 0; i < refs.timers.length; i++) {
        if (refs.timers[i].isReady) {
            console.log(refs.timers[i]);
            refs.timers.splice(i, 1)
        }
    }

    //2.tick
    for (let i = 0; i < refs.fses.length; i++) {
        if (refs.fses[i].isReady) {
            console.log(refs.fses[i]);
            refs.fses.splice(i, 1)
        }
    }

    //3.tick
    for (let i = 0; i < refs.immediate.length; i++) {
        if (refs.immediate[i].isReady) {
            console.log(refs.immediate[i]);
            refs.immediate.splice(i, 1)
        }
    }
}

console.log(refs);





readyEvents();



// console.log(refs);
