/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?
*/

// notice that the sum of digits of a 9-digit pandigital must be 1 + 2 + ... + 9 = 45, which is divisible by 3. Therefore 9-digit pandigitals are always composite. The same is true of 1 + 2 + ... + 8 = 36. This reduces the search space to integers up to 7654321.

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

function hasUniqueDigits(num) {
  let digits;
  if (Array.isArray(num)) {
    digits = num.reduce((prev, cur) => prev + String(cur), '');
  }
  if (typeof num === 'number') {
    digits = String(num);
  }
  const digitsArr = digits.split('');
  return (digitsArr.length === new Set(digitsArr).size) && !digitsArr.includes('0');
}

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let candidate = 765432;
while (!hasUniqueDigits(candidate) || !isPrime(candidate)) {
  candidate--;
}
console.log(candidate);



