/*
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: As 1! = 1 and 2! = 2 are not sums they are not included.
*/

// note that 9! = 362880 is the largest factorial of a digit.
// let x be an n-digit number, i.e. 10 ** (n-1) <= x <= 10 ** n.
// then an upper bound for the digit-factorial-sum of x would be
//  n * 362880.
// consider the equation
//  n * 362880 < 10 ** (n - 1).
// multiply both sides by 10:
//  n * 3628800 < 10 **n
//  10**n / n > 3628800.

// we prove that f(x) = 10**x / x is an increasing function (for x > 1).
// by the product rule:
//  f'(x) = (xlog10*10**x - 10**x) / x**2 = 10**x(xlog10 - 1) / x**2
// since x > 1 > 1/log10, the numerator is positive. Therefore f'(x) > 0, so f is increasing for x > 1. We test some values to find the threshold where f(x) > 10 * 9!.


let n =1;
while (10 ** n / n <= 3628800) {
  console.log(n, Math.ceil(10**n / n));
  n++;
}

// we see that if a number has 8 or more digits, then it cannot equal the sum of factorials of its digits. 


// therefore we loop up to 7-digit numbers (excluding 1 and 2, as per the problem description).


function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}


let sum = 0;
for (let i = 3; i < 10**7; i++) {
  const digitsArr = String(i).split('');
  const factorialSum = digitsArr.reduce((prev, cur) => Number(prev) + factorial(Number(cur)), 0);
  if (i === factorialSum) {
    sum += i;
  } 
}

console.log('total', sum);
