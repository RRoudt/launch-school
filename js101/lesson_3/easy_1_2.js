/* Easy 1.2

How can you determine whether a given string ends with an exclamation mark (!)?

Input:
- String

Output:
- true or false

Steps:
- Get string
- Get last character
- Compare last character of string to '!'
  - If the same, return true
  - If not the same, return false
*/

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// My solution
console.log(str1[str1.length - 1] === '!'); // true
console.log(str2[str2.length - 1] === '!'); // false

// Launch School's solution
str1.endsWith("!"); // true
str2.endsWith("!"); // false