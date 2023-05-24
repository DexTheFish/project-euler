/*
The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

// the main challenge is to design a function that converts integers to binary strings.
// the function `binary` achieves this by starting at '0' and incrementing using the base 2 addition algorithm.
// using the `binary` function, the problem can be solved in approximately 60 seconds.
// the function `changeBase` is faster, simpler, and more general. By repeatedly dividing n by k, we obtain a sequence of remainders which represent the digits of n in base k.
// using the `changeBase` function, the problem can be solved in under 300 milliseconds.

function palindrome(s) { 
  const reverse = String(s).split('').reverse().join('');
  return reverse === String(s);
}

function binary(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('input must be a nonnegative integer');
  }
  let result = '0';
  for (let i = 0; i < n; i++) {
    let index = 0;
    while (result[index] != '0' && result[index]) {
      index++;
    }
    if (index === result.length) {
      result = '0'.repeat(index) + '1';
    }
    if (index < result.length) {
      result = '0'.repeat(index) + '1' + result.slice(index + 1);
    }
  }
  return result.split('').reverse().join('');
}

function changeBase(n, k) {
  // express n in base k
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('input must be a nonnegative integer');
  }
  let digits = '';
  let q = n;
  while (q > 0) {
    digits = digits.concat(String(q % k));
    q = Math.floor(q / k);
  }
  return digits.split('').reverse().join('');
}

function sumDoubleBasePalindromes(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (palindrome(i) && palindrome(binary(i))) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}

function sumDoubleBasePalindromesEfficiently(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (palindrome(i) && palindrome(changeBase(i, 2))) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}

// console.time('fast');
// sumDoubleBasePalindromesEfficiently(1000000);
// console.timeEnd('fast');

// console.time('slow');
// sumDoubleBasePalindromes(1000000);
// console.timeEnd('slow');