const R = require('ramda');
const fs = require('fs');

const file = fs.readFileSync('adventures-of-sherlock-holmes.txt');
const rawContent = file.toString();

const sentences = rawContent.split('\n').map(c => c.replace('\r', ''));

const words = R.flatten(sentences.map(s => s.split(' '))).filter(s => s != '');

wordsObj = {}
words.forEach(word => {
  if (wordsObj[word]) {
    wordsObj[word]++;
  } else {
    wordsObj[word] = 1;
  }
})

const wordObjPairs = R.toPairs(wordsObj);

wordObjPairs.sort((a, b) => {
  return b[1] - a[1];
});

const topTen = R.take(10, wordObjPairs);
console.log(topTen);
