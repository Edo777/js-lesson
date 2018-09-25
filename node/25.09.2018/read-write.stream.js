const fs = require("fs");

const r_stream = fs.createReadStream('out.txt', { highWaterMark: 8 });
const w_stream = fs.createWriteStream('in.txt');

let readed_bytes = 0;
r_stream.on('data', (data) => {
    readed_bytes += 8;
    if (readed_bytes == 64) {
        r_stream.close();
        w_stream.close();
    }
    // w_stream.write(data.toString()); first variant
});
r_stream.pipe(w_stream); //second variant
