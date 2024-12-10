/* Easy 1.11: UTF-16 String value

Input:
- String passed as argument to a function

Output:
- Sum of the UTF-16 values of every character in the input string.

Pseudocode:
GET inputString
SET sum = 0
WHILE index < length of inputString
  sum = sum + UTF-16 value of character at index
RETURN sum
*/

function utf16Value(inputString) {
  let sum = 0;

  for (let index = 0; index < inputString.length; index += 1) {
    sum += inputString.charCodeAt(index);
  }
  return sum;
}

// Test cases
console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811