/*
If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?
*/

const solutions = {};

for (let a = 1; a <= 333; a++) {
  for (let b = a; b <= 500; b++) {
    for (let c = b; c <= Math.min(a + b, 500); c++) {
      // check for right triangle and p <= 1000
      if (a**2 + b**2 === c**2 && a + b + c <= 1000) {
        solutions[a+b+c] = solutions[a+b+c] + 1 || 1;
      }
    }
  }
}


let perimeter = 0;
let maxCount = 0;
for (let p in solutions) {
  if (solutions[p] > maxCount) {
    perimeter = p;
    maxCount = solutions[p];
  }
}
console.log('perimeter:  ', perimeter);
console.log('    count:  ', maxCount);