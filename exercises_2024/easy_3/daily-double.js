/* Easy 3.1: ddaaiillyy ddoouubbllee

Instructions:
- Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.
  - Example:
  "ddaaiillyy ddoouubbllee" => "daily double"

Input:
- String where some sequential characters are double

Output:
- String where duplicate sequential characters are reduced to one

Rules:
- If the preceding character is the same as the current character, don't include it in the new string

Data:
- String (input and output)

Algorithm:
Get inputString
Set outputString
Iterate over inputString:
  If the current character is not the same as the previous:
    Add the character to outputString
  Endif
*/

function crunch(inputString) {
  let outputString = '';

  for (let index = 0; index < inputString.length; index += 1) {
    if (inputString[index] !== inputString[index + 1]) {
      outputString += inputString[index];
    }
  }

  return outputString;
}

// Test cases
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""