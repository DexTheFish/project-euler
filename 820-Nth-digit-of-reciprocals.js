/*

https://projecteuler.net/problem=820

Let dn(x) be the nth decimal digit of the fractional part of x, or 0 if the fractional part has fewer than n digits.

let S(n) = SUM(k=1 to k=n) dn(1/k).

Find S(10**7).
*/

const d = (n, x) => {
  let fractionalPartOfX = x - Math.floor(x);
  // if we multiply the fractional part by 10^n, then the nth decimal digit is moved to the ones place.
  return Math.floor(fractionalPartOfX * 10 ** n) % 10;
};

const S = (n) => {
  let sum = 0;
  for (let k = 1; k <= n; k++) {
    sum += d(n, 1 / k);
  }
  console.log();
  return sum;
};
console.log(d());
console.log(S(122));
