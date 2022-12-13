/*

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

*/

let n = 2 ** 1000;
let sum = 0;
while (n > 1) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

console.log(sum);

// the problem is that precision is lost when dealing with numbers larger than 2^53
// the solution is to instead deal with BigInt https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
//
