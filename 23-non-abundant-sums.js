/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

// as per the hint we need only consider positive integers up to 28123. A first attempt at an algorithm is as follows:

// 1. loop from 1 to 28123 and identify all of the abundant numbers (storing them in an array).
// 2. loop over all pairs of abundant numbers and identify their sums (storing them in an array).
// 3. strip the repeat values from the sums array, and the values larger than 28123
// 4. reduce (sum) the array to a single number
// 5. subtract this number from the sum of all positive integers up to 28123

// steps 2 and 3 can be reformulated to pre-filter duplicates instead of stripping them.

const d = (n) => {
  // return the sum of proper divisors of n
  let divisorSum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      divisorSum += i;
    }
  }
  return divisorSum;
};

const abundant = (n) => {
  // return an array of the positive abundant numbers up to n.
  let abundantArr = [];
  for (let i = 1; i <= n; i++) {
    if (d(i) > i) {
      abundantArr.push(i);
    }
  }
  return abundantArr;
};

const pairSums = (array) => {
  // return an array of all possible sums that can be formed from pairs of elements of the original array.
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let sum = array[i] + array[j];
      result.push(sum);
    }
  }
  return result.sort();
};

const answer = () => {
  let sums = pairSums(abundant(28123)).filter(
    (value, index, arr) => value <= 28123 && arr[index] !== arr[index - 1]
  );
  let sumsSum = sums.reduce((prev, cur) => prev + cur);
  let totalSum = (28123 * (28123 + 1)) / 2;
  let nonSumsSum = totalSum - sumsSum;
  return nonSumsSum;
};
