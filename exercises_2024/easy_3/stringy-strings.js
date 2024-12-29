/* Easy 3.3: Stringy Strings

Instructions:
- Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'.
- The length of the string should match the given integer.

Input:
- A positive integer

Output:
- A string of alternating 1s and 0s

Rules:
- Always start the string with a '1'
- The length of the output string should be input integer

Questions:
-

Data:
- Whole number (input)
- String of 1s and 0s (output)

Algorithm:
Get targetNum
If targetNum is 0 or less:
  Return empty string
Endif
Set outputString: '1'
Start loop for targetNum of times, starting at 1:
  If last character of outputString is '1':
    Add '0' to outputString
  Else:
    Add '1' to outputString
  Endif
Return outputString
*/

function stringy(targetNum) {
  if (targetNum <= 0) return '';

  let outputString = '1';

  for (let iteration = 1; iteration < targetNum; iteration += 1) {
    outputString.endsWith('1') ? outputString += '0' : outputString += '1';
  }

  return outputString;
}

// Test cases
console.log(stringy(6));     // "101010"
console.log(stringy(9));     // "101010101"
console.log(stringy(4));     // "1010"
console.log(stringy(7));     // "1010101"
console.log(stringy(1));     // "1"
console.log(stringy(0));     // ""
console.log(stringy(-1));    // ""