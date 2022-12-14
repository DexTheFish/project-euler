/*
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

const { readFileSync } = require("fs");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");
  const arr = contents.split(",");
  return arr;
}

function nameValue(name) {
  let alphabetObj = { " ": 0 };
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].forEach((val, index) => (alphabetObj[val] = index + 1));
  // now alphabetObj = {a:1, b:2, ...}
  let total = 0;
  for (let char of name) {
    total += alphabetObj[char.toLowerCase()] || 0;
  }
  return total;
}

function totalNameScores(arr) {
  arr = arr.sort();
  console.log(arr);
  let scores = arr.map((val, index) => {
    return nameValue(val) * (index + 1);
  });
  console.log(scores);
  let totalScore = scores.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
  return totalScore;
}
let x = totalNameScores(syncReadFile("./22-names.txt"));
console.log(x);
