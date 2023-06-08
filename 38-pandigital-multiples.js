/*
Take the number 192 and multiply it by each of 1, 2, and 3: 192 × 1 = 192, 192 × 2 = 384, 192 × 3 = 576. By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1, 2, 3).

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1, 2, 3, 4, 5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1, 2, ..., n) where n > 1?
*/

// Each term in the expression b x (1, 2, 3, ..., n) has at least as many digits as b itself.
// The concatenated product must be a 9-digit number.
// Therefore digits(b) <= 9 / n. Since n > 1, this ensures b is at most a 4-digit number in all cases.

function pandigital(x, n) {
  // true iff x is 9-digit and contains all digits 1 through n
  let str = String(x);
  if (str.length != n) {
    return false;
  }
  for (let i = 1; i <= str.length; i++) {
    if (!str.includes(String(i))) {
      return false;
    }
  }
  return true;
}

let largest = 0;
for (let b = 1; b <= 9876; b++) {
  let product = '';
  let t = 1;
  while (product.length <= 9 && !pandigital(product, 9)) {
    product = product + b * t;
    t++;
  }
  if (pandigital(product, 9) && Number(product) > largest) {
    largest = Number(product);
  }
}

console.log(largest);



