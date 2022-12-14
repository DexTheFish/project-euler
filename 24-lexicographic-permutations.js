/* A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

 012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

const permutations = (s) => {
  // this function uses too much memory.
  let permutationsArray = [];

  for (let i = 0; i < 10; i++) {
    // i represents the index of the first digit to be chosen.
    // if i=1 then the permutation begins with a 1, for example.
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        for (let l = 0; l < 10; l++) {
          for (let m = 0; m < 10; m++) {
            for (let n = 0; n < 10; n++) {
              for (let o = 0; o < 10; o++) {
                for (let p = 0; p < 10; p++) {
                  for (let q = 0; q < 10; q++) {
                    for (let r = 0; r < 10; r++) {
                      for (let t = 0; t < 10; t++) {
                        let indices = [j, k, l, m, n, o, p, q, r, t];
                        let distinct = indices.reduce(
                          (prev, cur) => prev * (prev - cur),
                          1
                        );
                        if (distinct) {
                          permutationsArray.push(
                            s[i] +
                              s[j] +
                              s[k] +
                              s[l] +
                              s[m] +
                              s[n] +
                              s[o] +
                              s[p] +
                              s[q] +
                              s[r] +
                              s[t]
                          );
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return permutationsArray.sort((a, b) => a - b)[999999];
};

// there are 10! total permutations, which is about 3.6 million.
// they are partitioned evenly by choice of first digit; for example there are 9! permutations beginning with a zero.

// DERIVING THE FIRST DIGIT

// the first digit is 2 because there are 9! permutations that begin with 0 and 9! permutations that begin with 1. These smallest ones make up 9! + 9! = 720,000 (approx) of the total.
// ------

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function millionthLexicographicPermutation(digits) {
  // digits is a string of ascending digits with no repeats
  // we are concerned primarily with digits = '0123456789'
  let answer = "";
  let d = digits;
  let space = 1000000 - 1; // this is the number of permutations smaller than our answer
  while (d.length > 0) {
    let nextDigitIndex = Math.floor(space / factorial(d.length - 1));
    space = space - nextDigitIndex * factorial(d.length - 1);
    answer = answer.concat(d[nextDigitIndex]);
    d = d
      .split("")
      .filter((x) => x != d[nextDigitIndex])
      .join("");
  }
  return answer;
}

console.log(millionthLexicographicPermutation("0123456789"));
