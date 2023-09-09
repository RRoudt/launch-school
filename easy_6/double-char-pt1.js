/* Easy 6.1: Double Char (Part 1)

Input:
- A string

Output:
- A string where every character of the input string is doubled

Rules:
- Every character must be doubled, including spaces
- An empty input string should return an empty string

Data:
- String as input
- String as output
- Array as intermediate structure

Algorithm:
- Get a string
- Set a new empty string: doubledStr
- Turn string into an array: strArr
- Iterate over strArr
  - Add the current character twice to doubledStr
- Return doubledStr
*/

function repeater(str) {
  const strArr = [...str];
  let doubledStr = '';

  strArr.forEach(char => {
    doubledStr += char.repeat(2);
  });

  return doubledStr;
}

// Test cases
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""