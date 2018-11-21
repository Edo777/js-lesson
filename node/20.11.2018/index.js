function a(x, y, cb) {
    setTimeout(() => {
        cb(x + y);
    }, 1000)
}
a(1, 5, (result) => {
    console.log(result);
})