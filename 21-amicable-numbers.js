const d = (n) => {
  // return the number of proper divisors of n
  let divisorCount = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      divisorCount++;
    }
  }
  return divisorCount;
};

const sumOfAmicableNumbers = (n) => {
  // return the sum of amicable numbers less than n.
  let sum = 0;
  return sum;
};
