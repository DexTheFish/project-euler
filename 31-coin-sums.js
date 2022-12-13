/*
In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/

const differentWaysToMake = (sum) => {
  let numberOfWays = 0;
  for (let ones = 0; ones <= sum; ones++) {
    for (let twos = 0; 2 * twos <= sum; twos++) {
      for (let fives = 0; 5 * fives <= sum; fives++) {
        for (let tens = 0; 10 * tens <= sum; tens++) {
          for (let twenties = 0; 20 * twenties <= sum; twenties++) {
            for (let fifties = 0; 50 * fifties <= sum; fifties++) {
              for (let pounds = 0; 100 * pounds <= sum; pounds++) {
                for (let twoPounds = 0; 200 * twoPounds <= sum; twoPounds++) {
                  let total =
                    ones +
                    2 * twos +
                    5 * fives +
                    10 * tens +
                    20 * twenties +
                    50 * fifties +
                    100 * pounds +
                    200 * twoPounds;
                  if (total === sum) {
                    numberOfWays += 1;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return numberOfWays;
};

console.log(differentWaysToMake(200));
