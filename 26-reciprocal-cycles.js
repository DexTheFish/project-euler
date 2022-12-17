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

const calculateCycleLength = (n) => {
  // this should perform the division algorithm on 1/n while collecting data to determine the cycle length of the decimal expansion of 1/n.
  return 1;
};

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

console.log(answer(1000));
