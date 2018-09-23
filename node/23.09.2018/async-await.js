function promise() {
    return new Promise((r, j) => {
        setTimeout(() => {
            r('hello');
        }, 2000);
    })
}
var asyncFunction = async () => {
    let result = await promise();
    console.log(result);
}
asyncFunction();