const http = require(`http`);
const port = 7000;
const log = console.log;
const server = http.createServer((req, res) => {
    let i = 0
    req.on('data' , (d) => {
        i++;
    })
    req.on('end', () => {
        log("i = ", i)
        res.write("ok");
        res.end('ekav');
    })
});

server.listen(port, () => {
    log(`listen to ${port}`);
})