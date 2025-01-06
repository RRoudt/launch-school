/* Easy 6.7: Reverse It (Part 1)

Instructions:
- Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

Input:
- A string

Output:
- The input string, but the word order is reversed

Rules:
- The output string consists of the input string, but all words are reversed:
  'Reverse these words' -> 'words these Reverse'
- Words themselves stay untouched; letters remain as they are
- An empty string returns an empty string

Data:
- String (input)
- Array (processing)
- String (output)

Algorithm:
Get a string: inputString
Turn inputString into an array of words (split on space)
Reverse the array
Join the array as a string (adding spaces)
Return the resulting string
*/

function reverseSentence(inputString) {
  return inputString.split(' ').reverse().join(' ');
}

// Test cases
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"