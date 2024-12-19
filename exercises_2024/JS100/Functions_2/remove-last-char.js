/* JS100 - Functions 2 - 6. Remove Last Char

Instructions:
- Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

Input:
- String

Output:
- String

Rules:
- Return the input string, without the last character
*/

function removeLastChar(string) {
  return string.slice(0, string.length - 1);
}

// Test cases
console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'