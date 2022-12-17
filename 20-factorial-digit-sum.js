/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

// This question is similar to Problem 16.
// Because we study the digits of a large number (in this case 100!), the BigInt function is helpful.

const initialAttempt = (n) => {
  // this function cannot handle large n (including n = 100)
  // because the 'number' data type is not equipped to accurately handle such values.
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
  return sumDigits(factorial(n));
};

const sumOfDigits = (n) => {
  const factorial = (n) => {
    if (n === BigInt("1")) {
      return BigInt("1");
    }
    return n * factorial(n - BigInt("1"));
  };

  let sum = 0;
  let nFactorial = factorial(n);
  let digitArray = String(nFactorial)
    .split("")
    .map((x) => Number(x));
  let digitSum = digitArray.reduce((prev, cur) => prev + cur);
  return digitSum;
};

console.log(sumOfDigits(BigInt("100")));
