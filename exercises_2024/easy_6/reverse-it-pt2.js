/* Easy 6.8: Reverse It (Part 2)

Instructions:
- Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument.
- All five-or-more letter words should have their letters in reverse order.
- The string argument will consist of only letters and spaces.
- Words will be separated by a single space.

Input:
- A string with one or more words

Output:
- A string based on the input string, but where words with 5 letters or more have their letters reversed

Rules:
- Input will always be at least one word
- The input string seperates words with spaces
- Only reverse words that have 5 letters or more
- Keep the word order as-is; only reverse the order of letters (of words of 5 letters or more)

Questions:
-

Data:
- String (input)
- Arrays (processing)
- String (output)

Algorithm:
Get a string: inputString
Turn inputString into an array, splitting on a single space
Iterate over the array
  If the current word is 5 characters or longer, reassign the current word to itself reversed:
    Turn the word into an array
    Reverse the array
    Turn the array into a string
  Else:
    Leave word as-is
  Endif
Turn inputStringArray into a string, joining with a single space
*/

function reverseWords(inputString) {
  const WORD_LENGTH_MINIMUM = 5;

  return inputString
    .split(' ')
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