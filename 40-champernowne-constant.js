/*
An irrational decimal fraction is created by concatenating the positive integers: 0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression: d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000.
*/


function bruteForceAlgorithm() {
  // Directly concatenating the integers from 0 to 1 000 000 requires significant memory and is not scalable. Still, this brute force approach works for the problem at hand.
  let int = 0;
  let str = '';
  
  while (int <= 2 * 10 ** 5) {
    str += int;
    int++;
  }
  
  let product = 1;
  let index = 1;
  while (index <= 10 ** 6) {
    product *= str[index];
    index *= 10;
  }
  console.log(product);
  return product;
}

bruteForceAlgorithm();

function champernowne(n) {
  // let the 'k-th block' be the part of Champernowne's constant obtained by concatenating the k-digit positive integers.
  let i = n;
  let k = 1;
  
  // if i is past the first block, then we move to the next block and adjust i accordingly.
  // each block has k * 9 * 10 ** (k - 1) digits.
  while (i > k * 9 * 10 ** (k - 1)) {
    i -= k * 9 * 10 ** (k - 1);
    k += 1;
  }

  // once the appropriate block is located, we can divide the index i - 1 by k and use the quotient and remainder.

  const firstNumberOfTheBlock = 10 ** (k - 1);
  const targetNumberOfTheBlock = firstNumberOfTheBlock + Math.floor((i - 1) / k);
  const indexOfTargetNumber = (i - 1) % k;
  return Number(String(targetNumberOfTheBlock)[indexOfTargetNumber]);
}

function algorithmicSolution() {
  let answer = champernowne(1) * champernowne(10) * champernowne(100) * champernowne(1000) * champernowne(10000) * champernowne(100000) * champernowne(1000000);
  console.log(answer);
  return answer;
}

algorithmicSolution();

