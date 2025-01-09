/* List and Text Processing 4: Capitalize Words

Instructions:
- Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.
- You may assume that a word is any sequence of non-whitespace characters.

Input:
- A string

Output:
- A string where every word start with a capital letter, followed by the rest of the letters in lowercase

Questions:
Q: Should letters be made lowercase if they uppercase but not at the start of the word?
  A: Yes, looking at the test cases they should be make lowercase
Q: What if a word doesn't start with a letter, but with a lexical mark?
  A: Don't do anything; "uppercase" the lexical mark but not any subsequent letter
Q: What to do with single-letter words?
  A: Capitalize the letter/word
Q: What to do with empty input strings?
  A: The test cases don't mention it, so let's not worry about it

Rules:
- Capitalize every first letter of every word from the input string
- Make all other letters lowercase
- Words in the input string are separated by a space

Data:
- String (input)
- Array (processing)
- String (output)

Algorithm:
Get a string
Turn string into an array, splitting spaces
Iterate over the array, adding each element to a new array as follows:
  First character to upper case + rest of element to lower case
End iterating over the array
Turn the new array into a string, combining with a space
Return the string
*/

function wordCap(string) {
  return string
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}


// Test cases
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'