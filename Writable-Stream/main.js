const fs = require('fs');

/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const readableStream = fs.createReadStream('Writable-stream/input.txt', {
    highWaterMark: 15
});
const writableStream = fs.createWriteStream('Writable-Stream/output.txt');


readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

