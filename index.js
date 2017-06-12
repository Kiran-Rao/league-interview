const R = require('ramda');
const fs = require('fs');

const file = fs.readFileSync('adventures-of-sherlock-holmes.txt');
const rawContent = file.toString();

const contents = rawContent.split('\n').map(c => c.replace('\r', ''));

console.log(R.take(4, contents));
