/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

const factorial = (n) => {
  // return n factorial
  while (n > 1) {
    return n * factorial(n - 1);
  }
  return 1;
};

const sumDigits = (n) => {
  let sum = 0;
  let num = n;
  while (num >= 1) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(sumDigits(factorial(4)));
