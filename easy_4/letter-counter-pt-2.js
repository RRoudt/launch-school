/* eslint-disable max-len */
/* Easy 4.7: Letter Counter (Part 2)

Instructions:
- Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.
- Words consist of any sequence of non-space characters.
- Exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

Input:
- String of words (separated by spaces)

Output:
- Object with word length as key, and times the word length occurs in string as value

Rules:
- Only letters must be counted
- Must support zero or more words
- Words are separated by a space
- Object must use length of substrings as keys
- Object must use times there's a substring with that length as the value for each key

Data:
- String as input
- Plain object as output
- Array for intermediate storage of substrings

Algorithm:
- Get string
- Create an empty object: wordLengthFreqObj
- Guard clause: check if string is empty
  - If so, return wordLengthFreqObj
- Split string into an array of substrings, delimited by spaces
- Iterate over the array with substrings
  - Set empty wordLength counter
  - Turn substrings into an array and iterate over it, checking every character if it's a letter
    - If yes, add 1 to the wordLength counter
  - Check if wordLengthFreqObj already has a key matching the current substring's length
    - If yes, update the property with the current value plus 1
    - If not, add the property with the value 1
- Return wordLengthFreqObj
*/

function isAlpha(char) {
  return 'abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase());
}

function wordSizes(string) {
  let wordLengthFreqObj = {};
  if (string === '') return wordLengthFreqObj;

  let substringArr = string.split(' ');

  substringArr.forEach(word => {
    let wordLength = 0;

    // Check every character in word if it's a letter
    word.split('').forEach(char => {
      if (isAlpha(char)) {
        wordLength += 1;
      }
    });

    // Check if wordLength exists as property and set or increase value
    if (wordLengthFreqObj.hasOwnProperty(wordLength)) {
      wordLengthFreqObj[wordLength] += 1;
    } else {
      wordLengthFreqObj[wordLength] = 1;
    }
  });

  return wordLengthFreqObj;
}

// Test cases
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}