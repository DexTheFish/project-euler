/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/


// brute force strategy:
  // loop over permutations of `123456789*=`
    // check whether the permutation represents a true identity
    // add the product to a set
  // sum the set of products

// mathematical observations:

  // consider the relationship between the number of digits of the factors and product. The product of an n-digit and m-digit has either (n + m) or (n + m - 1) digits. Let p be the number of digits in the product. By solving the linear system
      // n + m + p = 9
      // p <= n + m
      // p >= n + m - 1
  // we see that any pandigital product relationship must involve a 2-digit and 3-digit factor multiplying to give a 4-digit product, or a 1-digit and 4-digit number multiplying to give a 4-digit number.

  // this leads to the following simplified algorithm:

    // 1. choose a sequence of two digits to form the first factor A.
    // 2. choose a sequence of three of the remaining digits to form the second factor B.
    // 3. use the remaining four digits to form the product C.
    // 4. check whether the relation A x B = C is true.
    // 5. repeat the algorithm for the case (1 digit) x (4 digit) = (4 digit).

  // notice that 10 x 100 = 1000 whereas 90 x 900 = 81000. If the product of the first digits of the factors is at least 10, then the overall product will be at least 10 000, which has 5 digits. This observation could be used to reduce the number of cases that are checked; however, it is already very fast to double-loop over all combinations of 2 and 3-digit numbers.

function hasUniqueDigits(num) {
  let digits;
  if (Array.isArray(num)) {
    digits = num.reduce((prev, cur) => prev + String(cur), '');
  }
  if (typeof num === 'number') {
    digits = String(num);
  }
  const digitsArr = digits.split('');
  return (digitsArr.length === new Set(digitsArr).size) && !digitsArr.includes('0');
}

let numsUpTo100 = new Array(100).fill(0).map((x, i) => i + 1);
let numsUpTo1000 = new Array(1000).fill(0).map((x, i) => i + 1);

let products = [];
let factorsAndProducts = [];
for (let x of numsUpTo100) {
  for (let y of numsUpTo1000) {
    let z = x * y;
    if (hasUniqueDigits([x, y, z]) && String(x).length + String(y).length + String(z).length === 9) {
      products.push(z);
      factorsAndProducts.push([x, y, z]);
    }
  }
}
console.log("products:   ", Array.from(new Set(products)));
console.log('factors and products:   ', factorsAndProducts);
console.log('sum of products:  ', Array.from(new Set(products)).reduce((prev, cur) => prev + cur));
console.log('~~~~~~~~')

let oneByFourProducts = [];
for (let x = 1; x < 10; x++) {
  for (let y = 1000; y < 10000; y++) {
    let z = x * y;
    if (hasUniqueDigits([x, y, z]) && String(x).length + String(y).length + String(z).length === 9) {
      oneByFourProducts.push(z);
    }
  }
}
console.log('one-by-four products:   ', oneByFourProducts);