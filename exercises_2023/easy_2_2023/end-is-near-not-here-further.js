/* Further exploration of Easy 2.6: The End Is Near But Not Here

Input:
- String.

Output:
- Middle word from input string.

Rules:
- Words are any sequence of non-blank characters.
- When string is one word, return string
- When string is even, return word at index: stringArray.length / 2
- When string is uneven, return word at index:
  Math.floor(stringArray.length / 2)

Mental model:
// Case one: even string with two words
> console.log(penultimate("last word") === "word"); // logs true
stringArray.length === 2
2 / 2 === 1
stringArray[1] === "word"

// Case two: even string with four words
> console.log(penultimate("Launch School is great!") === "is"); // logs true
stringArray.length === 4
4 / 2 === 2
stringArray[2] === "is"

// Case three: uneven string with five words
> console.log(penultimate("Launch School is the best!") === "is"); // logs true
stringArray.length === 5
Math.floor(5 / 2) === 2
stringArray[2] === "is"

// Case four: uneven string with nine words
> console.log(penultimate(
    "Launch School is the best friggin' coding school ever!"
  ) === "best"); // logs true
stringArray.length === 9
Math.floor(9 / 2) === 4
stringArray[4] === "best"

Steps:
- Get string
- If string is empty, stop program
- Split string to stringArray
  - Split character is a space: ' '
- Set returnIndex
- If stringArray % 2 === 0
  - Set returnIndex to: stringArray.length / 2
- Else
  - Set returnIndex to: Math.floor(stringArray.length / 2)
- Return word at returnIndex from stringArray
*/

function penultimate(inputString) {
  // Check if parameter contains a value and is a string
  if ((!inputString) || (typeof inputString !== 'string')) return 'Please enter a string';

  // Split inputString into an array, splitting on spaces
  const stringArray = inputString.split(' ');

  // Find middle of stringArray
  let returnIndex = 0;
  if (stringArray.length % 2 === 0) {
    returnIndex = stringArray.length / 2;
  } else {
    returnIndex = Math.floor(stringArray.length / 2);
  }

  // Return word in the middle
  return stringArray[returnIndex];
}

// Test cases
console.log(penultimate()); // 'Please enter a string'
console.log(penultimate(42)); // 'Please enter a string'
console.log(penultimate(true)); // 'Please enter a string'
console.log(penultimate("last word") === "word"); // true
console.log(penultimate("Launch School is great!") === "is"); // true
console.log(penultimate("Launch School is the best!") === "is"); // true
console.log(penultimate("Launch School is the best friggin' coding school ever!") === "best"); // true