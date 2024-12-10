/* Easy 6.7: Reverse It (Part 1)

Input:
- String

Output:
- A string with the words of the input string in reverse order

Rules:
- Keep the capitalization of the words as-is
- An empty string should return an empty string

Data:
- String as input
- String as output
- Array as intermediate structure

Algorithm:
- Get string: inputString
- If inputString is empty, return an empty string
- Turn string into array, splitting on spaces
- Reverse the array
- Turn the array into a string, words separated by spaces and return it
*/

function reverseSentence(inputString) {
  if (inputString === '') return '';
  return inputString.split(' ').reverse().join(' ');
}

// Test cases
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"