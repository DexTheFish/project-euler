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
  // the two factors cannot have an odd number (say, 3) and a 5 in the ones places, since ****3 X ***5 = ******5 which uses 5 twice.
   // the product ends in a 5 iff one of the factors ends in a 5.





