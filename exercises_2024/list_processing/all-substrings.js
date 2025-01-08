/* List Processing 5: All Substrings

Instructions:
- Write a function that returns a list of all substrings of a string.
- Order the returned list by where in the string the substring begins.
  - This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on.
- Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

Input:
- A string

Output:
- An array with all substrings of the input string

Rules:
- Substring (array elements) are ordered by where they appear in the input string
  - First all substrings starting at index 0, then the substrings starting at index 1, 2, 3, etc.
- Substrings are added from shortest to longest:
  'abcde' -> ["a", "ab", "abc", "abcd", "abcde",
              "b", "bc", "bcd", "bcde",
              "c", "cd", "cde",
              "d", "de",
              "e"]

Data:
- String (input)
- Strings (array elements)
- Array (output)

Algorithm:
Get a string: inputString
Set an empty array variable: outputSubstrings
Iterate over inputString:
  Iterate from the current index (character) to the end of inputString
    Copy inputString, starting at the current index up to (and including) the current subIndex
End iterating over inputString
Return outputSubstrings
*/

function substrings(inputString) {
  let outputStrings = [];

  for (let index = 0; index < inputString.length; index += 1) {
    for (let subIndex = index; subIndex < inputString.length; subIndex += 1) {
      outputStrings.push(inputString.slice(index, subIndex + 1));
    }
  }

  return outputStrings;
}

// Test case
console.log(substrings('abcde'));
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]