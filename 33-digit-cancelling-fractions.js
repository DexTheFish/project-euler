/*
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
*/

// the following solution fails to capture the case 49 / 98 = 4 / 8, as this is the only example involving a partially simplified fraction. However we are provided the knowledge that there exist only 4 cases. Therefore we use this code to find 3 cases and add in the final case manually.

function factors(n) {
  // return list of factors of n
  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function gcf(p, q) {
  // return the greatest common factor of p and q
  let factorsP = factors(p);
  let factorsQ = factors(q);
  let gcf = 1;
  for (let n of factorsP) {
    if (factorsQ.includes(n) && n > gcf) {
      gcf = n;
    }
  }
  return gcf;
}

function reduce(p, q) {
  // divide p and q by their greatest common factor
  let d = gcf(p, q);
  return [p / d, q / d];
}

let count = 0;
// loop over 2-digit numerators and denominators
for (let numerator = 10; numerator < 100; numerator++) {
  for (let denominator = numerator + 1; denominator < 100; denominator++) {
    // exclude trivial examples where the gcf is divisible by 10 or 11
    if (numerator % 10 === 0 && denominator % 10 === 0) {
      }
    else if (numerator % 11 === 0 && denominator % 11 === 0) {
    }
    else {
      //compare digits of the original and reduced fraction
      let [p, q] = reduce(numerator, denominator);
      if (String(p).length === 1 && String(q).length === 1 && String(numerator).includes(String(p)) && String(denominator).includes(String(q))) {
        //check that the same digit was cancelled from numerator and denominator
        if (String(numerator).split(String(p)).filter(x => x!='').join('') === String(denominator).split(String(q)).filter(x => x!='').join('')) {
          console.log(numerator, denominator);
        }
      }
    }
  }
}

let n = 16 * 19 * 26 * 49;
let m = 64 * 95 * 65 * 98;
console.log(reduce(n,m));
