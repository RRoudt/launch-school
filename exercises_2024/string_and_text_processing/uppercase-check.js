/* String and Text Processing 1: Uppercase Check

Instructions:
- Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise.
- Ignore characters that are not alphabetic.

Input:
- A string

Output:
- A boolean

Rules:
- Return true if all alphabetic characters in the string are uppercase
- Return false if even one alphabetic character in the string is lowercase
- Ignore all non-alphabetic characters

Questions:
Q: What to do with an empty string?
  A: Return true (see example/test case)

Examples:
'Four Score' -> false
'4SCORE!' - > true
'' -> true

Data:
- String (input)
- Array (processing)
- String/character (array elements)
- Boolean (output)

Algorithm:
Get a string
Iterate over the string:
  If the current character is lowercase alphabetical:
    Return false
  End if
End iterating over the string
Return true
*/

function isUppercase(string) {
  // First solution
  // for (let char of string) {
  //   if (/[a-z]/.test(char)) {
  //     return false;
  //   }
  // }
  // return true;

  // Second solution
  // return !/[a-z]/.test(string);

  // Third, easiest solution (learned from the LS solution)
  return string.toUpperCase() === string;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true