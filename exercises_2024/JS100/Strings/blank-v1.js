/* Write a function that checks whether a string is empty or not.

Input:
+ String

Output:
+ Boolean
  + True if string has length of 0
  + False is tring has length of 1 or more

Rules:
+ Spaces count as characters
*/

function isBlank(string) {
  return !string.length;
}

// Test cases
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true