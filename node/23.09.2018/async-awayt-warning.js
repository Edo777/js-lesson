function promise() {
    return new Promise((r, j) => {
        setTimeout(() => {
            console.log("timer");
            r(5);
        }, 2000);
    })
}
var asyncFunction = () => {
    let promises = [];
    let s = 0;
    for (let index = 0; index < 1000; index++) {
        promises.push(promise());
    }
    Promise.all(promises).then((d) => {
        d.forEach((v) => {
            s += v
        })

    })
    console.log(" sum = ", s);
}
asyncFunction();