/*
The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

// given the hint that there exist 11 truncatable primes, we attempt to search within a limited scope and then expand the scope until it captures all targets.

// the first guess was to look at primes under 1 million, and it worked! 
// the largest truncatable prime is 739,397.

function trunks(n) {
  let trunks = [];
  let s = String(n);
  for (let i = 0; i < s.length; i++) {
    trunks.push(Number(s.slice(i)));
    trunks.push(Number(s.slice(0, i)));
  }
  return trunks.filter(val => val != 0);
}

function primes(n) {
  // create an array of booleans
  let arr = Array(n + 1).fill(true);

  // 0 and 1 are not prime
  arr[0] = false;
  arr[1] = false;

  // multiples of primes are not prime
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

function sumTruncatablePrimes(searchRange) {
  let sum = 0;
  let truncatablePrimesList = [];
  const p = primes(searchRange);
  p.forEach((bool, prime) => {
    if (bool) {
      let isTruncatable = true;
      trunks(prime).forEach(trunk => {
        if (!p[trunk]) {
          isTruncatable = false;
        }
      })
      if (isTruncatable && prime > 9) {
        truncatablePrimesList.push(prime);
        sum += prime;
      }
    }
  });
  console.log(truncatablePrimesList);
  return sum;
}

console.log(sumTruncatablePrimes(1000000));