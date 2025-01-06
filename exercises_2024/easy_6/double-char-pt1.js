/* Easy 6.1: Double Char (Part 1)

Instructions:
- Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

Input:
- A string

Output:
- A string, the result of doubling every character from the input string

Rules:
- Every character should be doubled, including interpunction
- An empty input string should return an empty string

Data:
- String (input)
- String (processing)
- String (output)

Algorithm:
Get a string: inputString
Set a variable containing an empty string: outputString
Iterate over inputString:
  Add the current character to outputString, times 2
Return outputString
*/

function repeater(inputString) {
  let outputString = '';

  for (let char of inputString) {
    outputString += char + char;
  }

  return outputString;
}

// Test cases
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""