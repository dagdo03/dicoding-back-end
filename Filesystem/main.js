const fs = require('fs');

const data = fs.readFileSync('Filesystem/notes.txt', 'UTF-8');
console.log(data);