const fs = require('fs');

/*
The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.

Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?
*/

// a reasonable upper bound for word value would be 20 * 26 = 500. Let us build an array of triangular numbers:

let triangularNumbers = [];
for (let n = 1; n < 100; n++) {
  triangularNumbers.push(n * (n + 1) / 2);
}

function wordValue(word) {
  return word.toLowerCase().split('').reduce((prev, cur) => {
    return prev + cur.charCodeAt(0) - 96
  }, 0)
}

fs.readFile('42-words.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  const wordsArray = data.split(',').map(word => word.replace(/"/g, ''));
  const triangularWordCount = wordsArray.reduce((prev, cur) => {
    if (triangularNumbers.includes(wordValue(cur))) {
      return prev + 1;
    }
    return prev;
  }, 0)
  console.log(wordsArray);
  console.log(triangularWordCount);
});