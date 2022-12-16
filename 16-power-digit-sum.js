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

const estimateSumOfDigits = (n) => {
  // assuming that the digits of 2 ** n are distributed randomly from 0 to 9, we can estimate:
  // sum of digits = (number of digits) x (average digit value).
  // the average digit value can be computed directly.
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sumDigitValues = digits.reduce((prev, cur) => prev + cur);
  const averageDigitValue = sumDigitValues / digits.length;
  // the number of digits can be estimated by repeatedly dividing 2 ** n by 10 until the result
  // is reduced to a single digit.
  let numberOfDigits = 1;
  let number = 2 ** n;
  while (number > 10) {
    number = number / 10;
    numberOfDigits++;
  }
  return numberOfDigits * averageDigitValue;
};

console.log("----------- heuristic estimate: ---------------");
console.log(estimateSumOfDigits(1000));

console.log("------- sum of digits of 2 ** 1000: -----------");
console.log(sumOfDigits(1000));

// incredibly, the true answer (1366) is very close to the estimate (1359). They differ by only half a percentage. Recall the basis of our estimate was the assumption that the digits are randomly distributed. How remarkable that such a structured number as 2 ** n has a seemingly unstructured base-10 expansion!
