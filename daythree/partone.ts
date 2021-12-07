import fs from 'fs';

const diagnostics = fs
    .readFileSync('./diagnostics', {
        encoding: 'utf8',
        flag: 'r',
    })
    .split('\n');

console.log(diagnostics);