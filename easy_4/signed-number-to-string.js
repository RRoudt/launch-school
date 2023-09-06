/* eslint-disable max-len */
/* Easy 4.12: Convert a Signed Number to a String

Instructions:
- Write a function that takes an integer and converts it to a string representation.
You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString().
  - You may, however, use integerToString() from the previous exercise.
- You might also want to check the Math.sign() function.

Input:
- A number, positive or negative

Output:
- String version of the number

Rules:
- If the number is positive, prepend the resulting string with a '+'
- If the number is negative, prepend the resulting string with a '-'
- If the number is 0, return the string '0'

Questions:
- How should -0 be handled?
  - In the further exploration, it should return '-0'

Data:
- Number as input
- String as output

Algorithm:
- Check whether the number is positive or negative
  - If positive, get string version of number and return prepended by '+'
  - If negative,  get string version of absolute version of number and return prepended by '-'
  - If negative 0, return '-0'
  - Else, return '0'
*/

function integerToString(num) {
  const stringChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let resultStr = '';
  do {
    let index = num % 10;
    num = Math.floor(num / 10);
    resultStr = stringChars[index] + resultStr;
  } while (num > 0);

  return resultStr;
}

function signedIntegerToString(num) {
  if (Math.sign(num) === -1) {
    return '-' + integerToString(Math.abs(num));
  } else if (Math.sign(num) === 1) {
    return '+' + integerToString(num);
  } else if (Object.is(num, -0)) {
    return '-0';
  } else {
    return '0';
  }
}

// Test cases
console.log(signedIntegerToString(4321) === "+4321");  // logs true
console.log(signedIntegerToString(-123) === "-123");   // logs true
console.log(signedIntegerToString(0) === "0");         // logs true
console.log(signedIntegerToString(-0) === "-0");       // logs true