/* Easy 2.6: The End Is Near But Not Here

Instructions:
- Write a function that returns the next to last word in the String passed to it as an argument.
- Words are any sequence of non-blank characters.
- You may assume that the input String will always contain at least two words.

Input:
- String of multiple words

Output:
- Second to last word

Rules:
- Input is at least two words long

Data:
- String (input)
- String (output)

Algorithm:
- Get string
- Turn string into array, cutting on the spaces
- Return second-to-last element of array
*/

function penultimate(string) {
  let stringArr = string.split(' ');

  return stringArr[stringArr.length - 2];
}

// Test cases
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true