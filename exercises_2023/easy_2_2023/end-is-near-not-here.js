/* Easy 2.6: The End Is Near But Not Here

Input:
- String.

Output:
- Next to last word in string passed as argument.

Rules:
- Words are any sequence of non-blank characters.
- Assume that input string will always contain at least two words.

Steps:
- Get string
- Split string to array
  - Split character is a space: ' '
- Return element from array at index: array.length - 2
*/

function penultimate(string) {
  const stringArray = string.split(' ');
  return stringArray[stringArray.length - 2];
}

// Test cases
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true