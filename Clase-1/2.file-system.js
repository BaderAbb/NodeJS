const fs = require('node:fs/promises');
const { text } = require('node:stream/consumers');

fs.readFile('./archivo.txt', 'utf-8')

console.log('File Content:');
console.log('_____________________');