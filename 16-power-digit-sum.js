/*

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

*/

const sumOfDigitsAttempt = (n) => {
  // this approach does not work for large n (including n = 1000).
  // the problem is that precision is lost when dealing with regular numbers larger than 2^53.
  let number = 2 ** n;
  let sum = 0;
  while (number > 1) {
    // add the rightmost digit, truncate, repeat.
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
};

const sumOfDigits = (n) => {
  // the solution uses BigInt https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt which is able to perform arithmetic of large numbers.

  // calculate 2 ** n by doubling n times
  let exponent = 1;
  let number = BigInt("2");
  while (exponent < n) {
    exponent++;
    number += number;
  }
  // separate 2 ** n into an array of single-digit numbers
  let digitArr = String(number)
    .split("")
    .map((x) => Number(x));
  // add together all the digits
  let digitSum = digitArr.reduce((prev, cur) => prev + cur, 0);
  return digitSum;
};

console.log("------- sum of digits of 2 ** 1000: -----------");
console.log(sumOfDigits(1000));
