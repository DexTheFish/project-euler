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
  // to make this function more efficient we should precompute an array
  // of d(m) for 1 < m < n.
  console.log("beginning!");
  let sum = 0;
  for (let i = 1; i < n - 1; i++) {
    console.log("test1");
    for (let j = i + 1; j < n; j++) {
      console.log(i, j);
      if (d(i) === j && d(j) === i) {
        sum += i + j;
        console.log("stepping!", i, j);
      }
    }
  }
  return sum;
};
console.log(sumOfAmicableNumbers(10000));
