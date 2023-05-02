// https://projecteuler.net/problem=54

// How many hands does Player 1 win?


// read in the hands as an array
const fs = require('fs');


const hands = fs.readFileSync('54-poker.txt').toString().split('\n');

const outcomes = {
  player1: 0,
  player2: 0
};

for (let hand of hands) {
  if (winner(hand) === 1) {
    outcomes.player1++;
  } else {
    outcomes.player2++;
  }
}

function winner(hand) {
  let cards = hand.split(" ");
  let player1Cards = cards.slice(0, 5);
  let player2Cards = cards.slice(5, 10);
  if (score(player1Cards) > score(player2Cards)) {
    return 1;
  }
  return 2;
}

function score(cards) {
  /*
  High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
*/
  return Math.random() * 10;
}

console.log(outcomes)