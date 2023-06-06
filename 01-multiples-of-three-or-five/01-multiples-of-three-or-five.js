/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

//  ----------- ALGORITHMIC SOLUTION -----------------

const sumOfMultiples = (n) => {
  // return the sum of all multiples of 3 or 5 below n.
  // loop over all numbers up to n and check for divisibility.
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};
const answer = sumOfMultiples(1000);
console.log(answer);

// ---------------------------------------------------

// ----------- MATHEMATICAL SOLUTION -----------------

const sumOfMultiples2 = (n, m) => {
  // return the sum of all multiples of m below n.
  // apply the formula for a sum of consecutive integers.

  const multiplesOfM = Math.floor((n - 1) / m);

  const sum = (m * multiplesOfM * (multiplesOfM + 1)) / 2;

  return sum;
};

const answer2 =
  sumOfMultiples2(1000, 3) +
  sumOfMultiples2(1000, 5) -
  sumOfMultiples2(1000, 15);

// --------------------------------------------------
