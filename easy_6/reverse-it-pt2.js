/* Easy 6.8: Reverse It (Part 2)

Input:
- A string with one or more words

Output:
- A string with the words from the input string
  - All words with five or more letters must have their letters reversed

Rules:
- Input will always be at least one word long
- If a word is 5 letters or more, reverse its letters
- The words should appear in the order they appear in the input
- Words are separated by a single space

Data:
- String as input
- String as output
- Array as intermediate structure to split sentence
- Array as intermediate structure to split words

Algorithm (before further exploration):
- Get a string: inputStr
- Set empty array: outputStrArr
- Turn the inputStr into an array, splitting on single spaces: inputWords
- Iterate over the inputWords
  - Check length of the current word
    - If the length is 5 or more:
      - Turn the word into an array
      - Reverse the array
      - Turn array into a string
      - Push the reversed string to outputStrArr
    - Else:
      - Add the word to the outputStrArr as-is
- Turn outputStrArr into an string, separated by spaces
  - Return this string

Algorithm (with map() method):
- Get a string: inputStr
- Turn the inputStr into an array, splitting on single spaces: inputWords
- Iterate over the inputWords and return its resulting array as a string
  - Check length of the current word
    - If the length is 5 or more:
      - Turn the word into an array
      - Reverse the array
      - Turn array into a string and return it
    - Else:
      - Return the word as-is
*/

// Original solution
// function reverseWords(inputStr) {
//   const WORD_LENGTH_MINIMUM = 5;
//   let outputStrArr = [];
//   let inputWords = inputStr.split(' ');

//   for (let word of inputWords) {
//     if (word.length >= WORD_LENGTH_MINIMUM) {
//       outputStrArr.push(word.split('').reverse().join(''));
//     } else {
//       outputStrArr.push(word);
//     }
//   }

//   return outputStrArr.join(' ');
// }

// Solution using the map() method
function reverseWords(inputStr) {
  const WORD_LENGTH_MINIMUM = 5;
  let inputWords = inputStr.split(' ');

  return inputWords
    .map(word => {
      if (word.length >= WORD_LENGTH_MINIMUM) {
        return word.split('').reverse().join('');
      } else {
        return word;
      }
    })
    .join(' ');
}

// Test cases
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"