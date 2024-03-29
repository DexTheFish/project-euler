/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

// notice that each radial layer of the square has exactly 4 diagonals, and their spacing (with respect to the spiral order) depends on the sidelength of the layer.
// these observations allow for a very simple calculation.

let sum = 1;
let currentNumber = 1;
let increment = 2;
while (increment <= 1000) {
  currentNumber += increment;
  sum += currentNumber;
  currentNumber += increment;
  sum += currentNumber;
  currentNumber += increment;
  sum += currentNumber;
  currentNumber += increment;
  sum += currentNumber;
  increment += 2;
}
console.log(sum);
