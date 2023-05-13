// https://projecteuler.net/problem=27

function primes(n) {
  let arr = Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i]) {
      let j = i;
      while (i * j < arr.length) {
        arr[i * j] = false;
        j++;
      }
    }
  }
  return arr;
}
function quadratic(a, b, n) {
  return n ** 2 + a * n + b;
}




let primeArr = primes(1000000);
let numberOfConsecutivePrimes = 0;
let productOfCoefficients = 0;

for (let i = -1000; i <= 1000; i++) {
  for (let j = -1000; j <= 1000; j++) {
    let n = 0;
    let consecutive = 0;
    while (primeArr[quadratic(i, j, n)]) {
      consecutive++;
      n++;
    }
    if (consecutive > numberOfConsecutivePrimes) {
      numberOfConsecutivePrimes = consecutive;
      productOfCoefficients = i * j;
    }
  }
}

console.log(productOfCoefficients);
