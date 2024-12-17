/*
Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. 

Input:
+ String

Output:
+ Boolean
  + True if string has length of 0
  + False is tring has length of 1 or more

Rules:
+ Spaces DO NOT count as characters
*/

function isBlank(string) {
  string = string.trim();
  return !string.length;
}

// Test cases
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true