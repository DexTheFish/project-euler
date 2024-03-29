/*

The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?

*/

// STRATEGY 1:

// 1. loop through the triangular numbers

// 2. count the factors (all of them, not just the prime ones)

// 3. stop when count > 500

const countDivisors = (n) => {
  // return the number of divisors of n
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
};

const triangular = (n) => {
  // return the value of the nth triangular number
  return (n * (n + 1)) / 2;
};

const firstSolution = () => {
  // this function implements strategy 1 using a basic countFactors function.
  // it is not sophisticated enough to do the problem in a reasonable runtime.
  let n = 1;
  let t = 1;
  const numberOfDivisors = 500; // maximum 200 for fast runtime

  while (countDivisors(t) <= numberOfDivisors) {
    t = triangular(n);
    n++;
  }
  console.log(t);
  return t;
};

// STRATEGY 2:

// implement strategy 1 while counting divisors more efficiently.
// a list of prime numbers can help count divisors.
// this list can be built in advance using a sieve.
// for now, the  proper sieve size will be a fixed constant determined through trial and error.

const primesArray = (sieveSize) => {
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

const countDivisorsFast = (number, primes) => {
  // use an array of prime numbers to quickly count divisors of n

  let n = number;
  let multiplicities = {};
  for (let p of primes) {
    while (n % p === 0) {
      multiplicities[p] ? (multiplicities[p] += 1) : (multiplicities[p] = 1);
      n = n / p;
    }
  }
  // the number of divisors is the product of successors of multiplicities
  return Object.values(multiplicities).reduce(
    (prev, cur) => prev * (cur + 1),
    1
  );
};

const secondSolution = () => {
  let primes = primesArray(10 ** 7);
  const numberOfDivisors = 500;
  let n = 1;
  while (countDivisorsFast(triangular(n), primes) <= numberOfDivisors) {
    n++;
  }
  return triangular(n);
};

// STRATEGY 3:

// let us examine the formula for the nth triangular number:
// t = n ( n + 1 ) / 2
// now recall the classic proof that there are infinitely many prime numbers.
// it involves noticing that any divisor d of n is not a divisor of n + 1.
// therefore 2t = n (n + 1) is a product of two coprimes.
// for coprimes, the divisors of the product are the products of the divisors.
// therefore it suffices to count the divisors of n and n+1.
// because n and n+1 are much smaller than their product, the problem is quite fast
// even when using the basic countDivisors function.

const thirdSolution = () => {
  let targetNumberOfDivisors = 500;
  let n = 0;
  let solved = false;
  while (!solved) {
    n++;
    if (n % 2 === 0) {
      solved =
        countDivisors(n / 2) * countDivisors(n + 1) > targetNumberOfDivisors;
    }
    if (n % 2 === 1) {
      solved =
        countDivisors(n) * countDivisors((n + 1) / 2) > targetNumberOfDivisors;
    }
  }
  return triangular(n);
};

console.log(secondSolution());
