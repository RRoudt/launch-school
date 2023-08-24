/* JS101 — Easy 3.3:  Stringy Strings

Instructions:
- Write a function that takes one argument, a positive integer
- The function returns a string of alternating '1's and '0's
- The returning string always starts with a '1'
- The length of the string should match the given integer

Input:
- Integer

Output:
- String of alternating '1' and '0'

Rules:
- Returning string must start with '1'
- The returning string must be the length of the passed argument

Pseudocode:
- Get and set: targetStrLength
- Set stringyString: ''
- Loop for targetStrLength
  - If index % 2 === 1: stringyString += '0'
  - If index % 2 === 0: stringyString += '1'
- Return stringyString
*/

function stringy(targetStrLength) {
  let stringyString = '';

  for (let index = 0; index < targetStrLength; index += 1) {
    stringyString += index % 2 === 0 ? '1' : '0';
  }

  return stringyString;
}

// Test cases
console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"