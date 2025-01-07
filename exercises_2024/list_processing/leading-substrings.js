/* EXERCISE

Instructions:
- Write a function that takes a string argument and returns a list of substrings of that string.
- Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

Input:
- A string

Output:
- An array consisting of substrings

Rules:
- The first substring should be the first letter of the word
- The last substring should be the whole input string
- Order the array from the shortest substring to the longest

Data:
- String (input)
- Array (output)

Algorithm:
Get a string: inputString
Turn the inputString into an array and loop over it:
  Copy inputString from the start to the current index + 1, and add this to outputArray
End looping over inputString
Return outputArray
*/

function leadingSubstrings(inputString) {

  return inputString
    .split('')
    .map((_, index) => inputString.slice(0, index + 1));
}

// Test cases
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]