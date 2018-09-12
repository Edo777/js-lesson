let refs = {
    timers: [
        { eventName: "setTimeout", isReady: false },
        { eventName: "setTimeout", isReady: false },
        { eventName: "setTimeout", isReady: false }
    ],
    fses: [
        { eventName: "setTimeout", isReady: false },
        { eventName: "setTimeout", isReady: false },
        { eventName: "setTimeout", isReady: false }
    ],
    immediate: [
        { eventName: "setTimeout", isReady: false },
        { eventName: "setTimeout", isReady: false },
        { eventName: "setTimeout", isReady: false }
    ]
}



while (
    refs.timers.length
    +
    refs.fses.length
    +
    refs.immediate.length > 0) {

}
process.exit()
