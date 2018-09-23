const fs = require("fs");

let readStream = fs.createReadStream('__filename', {
    highWaterMark: 10
});
let writeStream  = fs.createWriteStream('message.txt');

readStream.on(`error`, () => {
    readStream.close();
    writeStream.close();
});
writeStream.on(`error`, () => {
    readStream.close();
    writeStream.close();
});

readStream.pipe(writeStream);

// let index = 0;
// writeStream.on(`error`, (err) => {
//     console.log(err.message);
// })
// writeStream.write('hello');
// writeStream.write('hello');
// writeStream.write('hello');
// writeStream.end('world');
// writeStream.write('hello');


// readStream.on(`data`, (data) => {
//     if(index == 3){
//         readStream.close()
//     }
//     console.log(`part = ${index++}, data = ${data.toString()}`);
// })
