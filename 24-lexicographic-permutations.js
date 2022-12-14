/* A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

 012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

// --------- SOLUTION ------------

// There are 9! permutations that begin with the digit 0, and 9! permutations that begin with the digit 1. Together, these make up the first ~700,000 entries in the lexicographical order. The next batch of permutations (those beginning with the digit 2) takes us up to ~1,050,000 and must therefore contain the 1,000,000th entry. We conclude that the answer begins with the digit 2. This number 2 arose because 9! fits into 1,000,000 twice without going over.

// We then require the ~300,000th entry among those beginning with 2. To find its first (technically second) digit, we ask how many times 8! fits into 300,000 without going over, and so on. The answer to each division question tells us which index to choose from when placing the next digit. The process terminates when there are no more digits to be placed.
// ------

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function millionthLexicographicPermutation(digits) {
  // digits is a string of ascending digits with no repeats
  // we are concerned primarily with digits = '0123456789'
  let answer = "";
  let d = digits;
  let space = 1000000 - 1; // this is the number of permutations smaller than our answer
  while (d.length > 0) {
    let nextDigitIndex = Math.floor(space / factorial(d.length - 1));
    space = space - nextDigitIndex * factorial(d.length - 1);
    answer = answer.concat(d[nextDigitIndex]);
    d = d
      .split("")
      .filter((x) => x != d[nextDigitIndex])
      .join("");
  }
  return answer;
}

console.log(millionthLexicographicPermutation("0123456789"));
