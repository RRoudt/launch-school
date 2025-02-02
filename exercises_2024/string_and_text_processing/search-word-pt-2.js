/* String and Text Processing 10: Search Word (Part 2)

Instructions:
- Write a function that takes a word and some text as arguments, and returns the text with every instance of the word highlighted.
- To highlight a word, enclose the word with two asterisks ('**') on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**')

Input:
- A word
- String or text (multiple words, separated by a space)

Output:
- String where every search word is highlighted, like this:
  **SEARCHWORD**

Rules:
- Add ** before and after the matched words
- Make matched words uppercase

Data:
- Strings (input)
- Array (processing)
- String (output)

Algorithm:
Get a word to search for: inputWord
Get a string to search (and replace) on: inputString
Turn inputString into an array (splitting on spaces), iterate over it to create a new array:
  For each word, clean it so only alphabetical characters are left
  If current word matches the inputWord:
    Add word to new array as: **WORD** (make it uppercase)
  Else:
    Add word to new array as-is
  Endif
End iterating over the array, turn the new array into a string (joining with spaces) and return this string
*/

function searchWord(inputWord = '', inputString = '') {
  if (!inputWord && !inputString) return 0;

  return inputString
    .split(' ')
    .map(word => {
      let cleanedWord = word.replaceAll(/[^a-z]/gi, '');
      
      if (cleanedWord.toLowerCase() === inputWord.toLowerCase()) {
        return `**${word.toUpperCase()}*`;
      } else {
        return word;
      }
    })
    .join(' ');
}

// Test case
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"