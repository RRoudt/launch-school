/* eslint-disable max-len */
/* Easy 4.8: Letter Swap

Instructions:
- Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.
- You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Input:
- String of words, separated by spaces

Output:
- String of words, separated by sapced, where the first and the last letters of every word are swapped

Rules:
- Every word contains at least one letter
- The string contains at least one word
- Strings only contain words and spaces
- There are no leading, trailing, or repeated spaces

Data:
- String as input
- String as output
- Array as intermediate structure
- Strings as array elements

Algorithm:
- Get a string: str
- Split the string into an array: wordsArr
  - Split on spaces, turning every word into an element
- Create the flippedWordsArr by iterating over wordsArr
  - If word length is 1, return word as-is
  - Set variable containing the first character of the word: firstChar
  - Set variable containing the last character of the word: lastchar
  - Return: lastchar + word from index 1 to second to last index + firstChar
- Return the flippedWordsArr as a string
*/

function swap(str) {
  let wordsArr = str.split(' ');

  let flippedWordsArr = wordsArr.map(word => {
    if (word.length === 1) return word;

    const firstChar = word[0];
    const lastChar = word[word.length - 1];

    return lastChar + word.slice(1, -1) + firstChar;
  });

  return flippedWordsArr.join(' ');
}

// Test cases
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"