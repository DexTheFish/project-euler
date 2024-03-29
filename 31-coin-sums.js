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

// The above solution is clear but inelegant.
// Loop parameters can be tightened to improve runtime significantly, but the code is hard to adapt to other coin systems.
// below we develop a solution that is more efficient and adaptable to other currencies.

const waysToMake = (coins, sum) => {
  // coins is an array of coin values
  // return the number of coin combinations that add to sum
  let numberOfCombinations = 0;

  if (coins.length === 1) {
    // if there's only one type of coin, then the sum can be made in at most one way, depending on divisibility.
    return sum % coins[0] === 0 ? 1 : 0;
  }

  for (let n = 0; n * coins[0] <= sum; n++) {
    // if we choose to use n of coin[0], then the remainder must be made of other coins.
    // count the number of ways to make the remainder, excluding the use of coins[0].
    numberOfCombinations += waysToMake(coins.slice(1), sum - n * coins[0]);
  }

  return numberOfCombinations;
};

console.log(waysToMake([1, 2, 5, 10, 20, 50, 100, 200], 200));
