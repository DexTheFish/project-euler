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

const sumOfAmicableNumbersAttempt = (n) => {
  // return the sum of amicable numbers less than n.
  // to make this function more efficient we should precompute an array
  // of d(m) for 1 < m < n.
  let sum = 0;
  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (d(i) === j && d(j) === i) {
        sum += i + j;
      }
    }
  }
  return sum;
};

// presently our program loops approximately 0.5 * 10 ** 8 times
// and each step of the loop calls the function d twice.
// overall it is too inefficient to handle n = 10000.

// Are we looping too many times, or is d taking too long at each step?
// Let's see how long it takes to loop in the same fashion, but performing a trivial
// action at each step instead of calling d.

const runTimeOfBigLoop = (n) => {
  let start = Date.now();
  let count = 0;
  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (1 === 1 && 2 === 2) {
        count++;
      }
    }
  }
  let end = Date.now();
  console.log("runtime of loop: ", end - start);
};

// this function runs quickly, about 50ms for n = 10000. This suggests that the original function can be fixed by keeping the loop structure and improving the calculations performed at each iteration.

const sumOfAmicableNumbers = (n) => {
  // return the sum of amicable numbers less than n.
  // to make this function more efficient we precompute values for d(n).
  let dArray = Array(n);
  for (let i = 0; i < n; i++) {
    dArray[i] = d(i);
  }
  let sum = 0;
  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (dArray[i] === j && dArray[j] === i) {
        sum += i + j;
      }
    }
  }
  return sum;
};

console.log(sumOfAmicableNumbers(10000));
