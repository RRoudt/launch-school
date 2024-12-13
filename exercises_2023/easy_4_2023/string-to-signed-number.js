/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* Easy 4.10: Convert a String to a Signed Number

Instructions:
- Write a function that takes a string of digits and returns the appropriate number as an integer.
- The string may have a leading + or - sign;
  - If the first character is a +, your function should return a positive number.
  - If it is a -, your function should return a negative number.
  - If there is no sign, return a positive number.
- You may assume the string will always contain a valid number.
- You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number().
  - You may, however, use the stringToInteger() function from the previous lesson.

Input:
- String version of a number

Output:
- Number version of the input number

Rules:
- If the string has a leading + or no sign, return a positive number
- If the string has a leading - sign, return a negative number

Data:
- String as input
- Number as output


Algorithm:
- Get a string
- Check what is the first character of string
  - If a '+'
    - Get number version of string, starting from second character
    - Return number version of string
  - If a '-'
    - Get number version of string, starting from second character
    - Return number version of string, prepended by a - sign
  - Else
    - Get number version of string
    - Return number version of string
*/

function charToNum(char) {
  switch (char) {
    case '0':
      return 0;
    case '1':
      return 1;
    case '2':
      return 2;
    case '3':
      return 3;
    case '4':
      return 4;
    case '5':
      return 5;
    case '6':
      return 6;
    case '7':
      return 7;
    case '8':
      return 8;
    case '9':
      return 9;
    default:
      return NaN;
  }
}

function stringToInteger(str) {
  let totalNum = 0;

  for (let index = 0; index < str.length; index++) {
    let num = charToNum(str[index]);
    totalNum = (10 * totalNum) + num;
  }

  return totalNum;
}

function stringToSignedInteger(str) {
  const firstChar = str[0];

  if (firstChar === '+') {
    return stringToInteger(str.slice(1));
  } else if (firstChar === '-') {
    return -stringToInteger(str.slice(1));
  } else {
    return stringToInteger(str);
  }
}

// Test cases
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true