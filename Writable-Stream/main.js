const fs = require('fs');

/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const readableStream = fs.createReadStream('Writable-stream/input.txt', {
    highWaterMark: 10
});