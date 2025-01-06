/* Easy 6.2: Double Char (Part 2)

Instructions:
- Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string.
- The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Input:
- A string

Output:
- A string based on the input string where every consonant character is doubled

Rules:
- Double only the consonant characters
  - a, e, i, o, u should not be doubled
  - digits should not be doubled
  - punctuation should not be doubled
  - whitespace should not be doubled
- An empty input string should return an empty output string

Data:
- A string (input)
- Strings (processing)
- A string (output)

Algorithm:
Get a string: inputString
Set a new empty string: outputString
Iterate over the inputString
  If current character is alphabetical AND NOT a vowel (a, e, i, o, u):
    Add current character to outputString, times two
  Else:
    Add current character to outputString
  Endif
Enditerate
Return outputString
*/

function doubleConsonants(inputString) {
  let outputString = '';

  for (let char of inputString) {
    if (/[a-z]/i.test(char) && /[^aeiou]/i.test(char)) {
      outputString += char + char;
    } else {
      outputString += char;
    } 
  }

  return outputString;
}

// Test cases
console.log(doubleConsonants('String') === 'SSttrrinngg');                  // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!') === 'HHellllo-WWorrlldd!');    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th') === 'JJullyy 4tthh');              // "JJullyy 4tthh"
console.log(doubleConsonants('') === '');                                   // ""