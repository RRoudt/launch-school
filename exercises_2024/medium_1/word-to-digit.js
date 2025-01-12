/* Small Problems - Medium 5: Word to Digit

Instructions:
- Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Input:
- A string

Output:
- A string, but the words for numbers have been replaced by the actual numbers

Questions:
Q: What is a 'number word'?
  A: The name for the number, written out. E.g.: 0 (number) -> zero (number word)

Rules:
- Return the string as-is, but with the number words replaced by numbers

Data:
- String (input)
- Array (processing)
- String (output)

Algorithm:
Get a string: inputStr
Create a data structure to look up number value for each number word
Iterate over each word in inputStr:
  Clean up word from any interpunction (only leave the letters)
  If current word is a number word:
    Save number value of number word to new string
  Else:
    Save word to new string as-is
  Endif
End iterating over each word and return the new string
*/

function wordToDigit(inputStr) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  return inputStr
    .split(' ')
    .map(word => {
      let cleanWord = word.replace(/[^a-z]/gi, '');

      if (NUMBER_WORDS.includes(cleanWord)) {
        let numberWordIndex = NUMBER_WORDS.indexOf(cleanWord);
        return word.replace(cleanWord, numberWordIndex);
      } else {
        return word;
      }
    })
    .join(' ');
}

// Test cases
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));
// "The weight is done."