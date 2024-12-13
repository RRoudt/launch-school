/* Easy 6.2: Double Char (Part 2)

Input:
- A string

Output:
- A string where every consonant is doubled

Rules:
- Don't double:
  - vowels
  - digits
  - punctuation
  - whitespace

Data:
- String as input
- String as output
- Array as intermediate structure
- Single string characters as array elements

Algorithm:
- Get an input string: str
- Set an empty output string: doubledStr
- Turn input string into array: strArr
- Iterate over strArr
  - Check if current character is a consonant
    - If yes, add the character twice to doubledStr
    - If not, add the character once to doubledStr
*/

function isConsonant(char) {
  const CONSONANTS = 'qwrtypsdfghjklzxcvbnm';
  return CONSONANTS.includes(char.toLowerCase());
}

function doubleConsonants(str) {
  const strArr = [...str];
  let doubledStr = '';

  strArr.forEach(char => {
    if (isConsonant(char)) {
      doubledStr += char.repeat(2);
    } else {
      doubledStr += char;
    }
  });

  return doubledStr;
}

// Test cases
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""