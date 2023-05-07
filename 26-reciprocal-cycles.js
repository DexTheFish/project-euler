/*
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

// How does one work out a decimal expansion by hand?
// Applying the division algorithm, we recognize a cycle when a step's remainder is equal to a previous remainder. Let us therefore carry out the division algorithm while keeping track of the remainders and checking for duplicates.

const calculateCycleLength = (divisor) => {
  // this should perform the division algorithm on 1/n while collecting data to determine the cycle length of the decimal expansion of 1/n.
  let remainders = [];
  let result = "";
  let dividend = 1;

  // the algorithm proceeds until we get a remainder of zero (terminating)
  // or until we get a previously-encountered remainder (repeating)
  while (new Set(remainders).size === remainders.length && dividend != 0) {

    // move over by some place values until division can be performed
    while (dividend < divisor) {
      dividend *= 10;
      result += '0';
    }

    // use the whole part of the division to add a digit to the result
    let quotient = Math.floor(dividend / divisor);
    result += String(quotient);
    
    // get the remainder after division
    let remainder = dividend % divisor;

    // use the remainder as the new dividend
    dividend = remainder;

    // keep track of the remainder
    remainders.push(remainder);
  }
  return remainders.length - 1;
};

let [max, n] = [0, 0];
for (let i = 2; i < 1000; i++){
  let cycleLength = calculateCycleLength(i);
  if (cycleLength > max) {
    max = cycleLength;
    n = i; 
  }
}
console.log(max, n);


// const calculateCycleLength = (divisor) => {
//   if (!Number.isInteger(divisor) || divisor <= 0) {
//     throw new Error('divisor must be a positive integer');
//   }

//   let remainders = [];
//   let quotientDigits = "";
//   let dividend = 1;

//   while (!remainders.includes(dividend) || dividend === 0) {
//     while (dividend < divisor) {
//       dividend *= 10;
//       quotientDigits += "0";
//     }
//     let quotient = Math.floor(dividend / divisor);
//     let remainder = dividend % divisor;
//     dividend = remainder;

//     quotientDigits += String(quotient);
//     remainders.push(dividend);
//   }

//   const firstIndex = remainders.indexOf(dividend);
//   const secondIndex = remainders.lastIndexOf(dividend);
//   const cycleLength = secondIndex - firstIndex;
//   console.log(quotientDigits, remainders, cycleLength)
//   return {
//     quotientDigits,
//     remainders,
//     cycleLength
//   };
// };


calculateCycleLength(10);






const answer = (n) => {
  // return the value of d < n for which 1/d contains the longest recurring cycle in its decimal expansion.
  let cycleLengths = [0, 0];
  for (let i = 2; i < n; i++) {
    let cycleLength = calculateCycleLength(i);
    cycleLengths.push(cycleLength);
  }

  let maxLength = cycleLengths.reduce((prev, cur) => Math.max(prev, cur));
  return maxLength;
};

//console.log(answer(1000));
