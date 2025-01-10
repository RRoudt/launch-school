/* String and Text Processing 9: Search Word (Part 1)

Instructions:
- Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.
- You may assume that the word and text inputs will always be provided, and that all word breaks are spaces.
- Thus, some words will include punctuation such as periods and commas. Also assume that the search is case-insensitive.

Input:
- A word
- String or text (multiple words, separated by a space)

Output:
- Number (amount of times the word appears in the input string)

Questions:
Q: Is a word only counted if the whole word matches, or is a substring matching also okay?
  A: Some words contain interpunction, this should be filtered out, otherwise only whole word matches

Rules:
- There's always a word and string input
- Words are separated by spaces
- Only count word is whole word matches (ignoring interpunction)
- Search should be case-insensitive
- Account of one or both arguments missing
- If both arguments are missing, return 0

Algorithm:
Get an inputWord
Get an inputString
Turn inputString into an array (splitting on spaces), and iterate over it:
  For each word, clean it so only alphabetical characters are left
  If current word matches the inputWord:
    Count it once
  Endif
Stop iterating over the array, and return the counted matches
*/

function searchWord(inputWord = '', inputString = '') {
  if (!inputWord && !inputString) return 0;

  return inputString
    .split(' ')
    .reduce((count, word) => {
      let cleanedWord = word.replaceAll(/[^a-z]/gi, '');
      
      if (cleanedWord.toLowerCase() === inputWord.toLowerCase()) {
        return count += 1;
      } else {
        return count;
      }
    }, 0);
}

// Test case
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));      // 4
console.log(searchWord(text));             // 0
console.log(searchWord());                 // 0