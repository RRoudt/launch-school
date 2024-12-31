/* Easy 4.8: Letter Swap

Instructions:
- Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.
  - You may assume that every word contains at least one letter, and that the string will always contain at least one word. 
  - You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Input:
- A string

Output:
- A string based on the input string, where the first and last letter of every word are swapped

Rules:
- The first and last letter of every word must be swapped
- Every word contains at least one letter
- Every string contains at least one word
- Each string only contains words and spaces, never multiple sequential spaces

Questions:
Q: Does anything need to happen with cases?
  A: From the test case it seems like uppercase letters need to stay uppercase
  'Abcde' -> 'ebcdA'

Data:
- String (input)
- Array (processing)
- String (output)

Algorithm:
Get a string: inputString
If the inputString is of length 0 or 1:
  Return inputString
Endif
Turn inputString into an array, splitting on the spaces: stringArr
Iterate over stringArr and mutate it:
  If the current element is one character long:
    Store the current element as-is in stringArr
  Endif
  Swap the first and last letter of the current element:
    Store the first letter of the word (at index 0): firstLetter
    Store the last letter of the word (at last index): lastLetter
    Store a string: letterSwappedWord
      lastLetter, plus:
      slice from the current element, from index 1 to second-to-last index, plus
      firstletter
  Store the swapped word at the current element in stringArr
Enditeration
Return stringArr as a string, where each element is joined together by a space
*/

function swap(inputString) {
  if (inputString.length === 1) return inputString;

  let stringArr = inputString.split(' ');

  for (let index = 0; index < stringArr.length; index += 1) {
    let word = stringArr[index];

    if (word.length === 1) {
      stringArr[index] = word;
      continue;
    }

    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];

    let letterSwappedWord = lastLetter + word.slice(1, word.length - 1) + firstLetter;

    stringArr[index] = letterSwappedWord;
  }

  return stringArr.join(' ');
}

// Test cases
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"