const path = require('node:path');

// separator bar for the current OS
console.log(path.sep);

// join multiple segments into a single path
console.log(path.join(__dirname, 'archivo.txt'));

const base = path.extname('/var/www/html/index.html');
console.log(base); // index.html