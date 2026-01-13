const fs = require('node:fs/promises');

const folder = process.argv[2] ?? '.';

fs.readdir(folder)
    .then(files => {
        console.log(`Contents of folder: ${folder}`);
        console.log('_____________________');
        files.forEach(
            file => console.log(file)
        );
    })
    .catch(err => {
        console.error('Error reading directory:', err);
        process.exit(1);
    });

console.log('Ending main thread execution');