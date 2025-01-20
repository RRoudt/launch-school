/* String and Text Processing 1: Uppercase Check

Problem:
Take a string as an input, and tell whether it's all uppercase

Input:
- A string

Output:
- A boolean

Rules:
- If all alphabetic characters all uppercase:
  Return true
- If one alphabetic character is not uppercase:
  Return false  

Data:
- String (input)
- Boolean (output)

Algorithm:
Get inputString
If uppercase'd inputString is equal to inputString:
  Return true
Else:
  Return false
Endif
*/

function isUppercase(inputString) {
  return inputString.toUpperCase() === inputString;
}

// Test cases
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
