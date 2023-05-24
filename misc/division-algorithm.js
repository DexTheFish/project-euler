function divide(p, q) {
  // divide p by q
  let wholeNumberPart = Math.floor(p / q);
  let decimalPart = "";
  let remainders = [];
  let digits = String(p);
  let i = 0;
  let n = p - wholeNumberPart;
  console.log('whole part: ', wholeNumberPart);
  console.log('decimal part: ', decimalPart);
}


divide(100, 3);