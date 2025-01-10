/* String and Text Processing 8: How Long Are You?

Instructions:
- Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length.
- If the argument is an empty string or if no argument is passed, the function should return an empty array.
- You may assume that every pair of words in the string will be separated by a single space.

Input:
- String

Output:
- Array, where every element contains a word from the string, followed by a space, and the word's length

Rules:
- Return an array
  - Every array element needs to have this format:
  word + space + word's length (number), i.e.: "cow sheep chicken" => ["cow 3", "sheep 5", "chicken 7"]
- Return an empty array if no argument is passed, or the argument is an empty string
- Words in the string are separated by a single space

Data:
- String (input)
- String (array elements)
- Numbers (length of words)
- Array (output)

Algorithm:
Get a string
If string is falsy (empty string or undefined):
  Return outputArray
Endif
Set an empty array to add the words to: outputArray
Turn string into an array (splitting on a space), and iterate over the array (each word):
  Add current word + ' ' + length of word as a new element to outputArray
End iterating over the array
Return outputArray
*/

function wordLengths(string) {
  let outputArray = [];

  if (!string) return outputArray;

  string.split(' ').forEach(word => {
    outputArray.push(`${word} ${word.length}`);
  });
  
  return outputArray;
}

// Test cases
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []