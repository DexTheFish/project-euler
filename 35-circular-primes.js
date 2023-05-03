/*
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
*/

function isCircular(n, primes) {
  let digits = String(n);
  let rotations = [];
  for (let i = 0; i < digits.length; i++) {
    rotations.push(Number(digits.slice(i,n) + digits.slice(0, i)));
  }
  for (let r of rotations) {
    if (!primes.includes(r)) {
      return false;
    }
  }
  return true;
}

function primesArray(sieveSize) {
  // return an array of prime numbers up to sieveSize
  let integers = Array(sieveSize + 1)
    .fill(0)
    .map((val, index) => index);

  let primes = [];

  // loop over the integers array
  for (let n = 2; n < integers.length; n++) {
    // check whether the value is nonzero
    if (integers[n] !== 0) {
      // add it to the list of primes
      primes.push(n);
      // set its multiples equal to zero
      let j = 2;
      while (n * j < integers.length) {
        integers[n * j] = 0;
        j++;
      }
    }
  }
  return primes;
};


let count = 0;
let max = 1000000;
let primes = primesArray(max);
console.log(primes.slice(0,10));``
for (let p of primes) {
  if (isCircular(p, primes)) {
    count++;
  }
}
console.log(count);