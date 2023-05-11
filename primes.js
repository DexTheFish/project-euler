  // return an array of prime numbers up to n (inclusive)

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
