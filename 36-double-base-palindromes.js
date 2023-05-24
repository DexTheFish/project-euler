/*
The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

function palindrome(s) { 
  const reverse = String(s).split('').reverse().join('');
  return reverse === String(s);
}

function binary(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('input must be a nonnegative integer');
  }
  let result = '0';
  for (let i = 0; i < n; i++) {
    let index = 0;
    while (result[index] != '0' && result[index]) {
      index++;
    }
    //console.log(`Index:  ${index}  |   Result:  ${result}`)
    if (index === result.length) {
      //console.log('end of string!');
      result = '0'.repeat(index) + '1';
    }
    if (index < result.length) {
      //console.log('in the string!');
      result = '0'.repeat(index) + '1' + result.slice(index + 1);
    }
    //console.log(`Index:  ${index}  |   Result:  ${result}`)
  }
  return result.split('').reverse().join('');
}

function sumDoubleBasePalindromes(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (palindrome(i) && palindrome(binary(i))) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumDoubleBasePalindromes(1000000));











//binary(8);
