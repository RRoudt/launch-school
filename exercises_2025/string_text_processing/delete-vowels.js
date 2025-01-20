/* String and Text Processing 2: Delete Vowels

Problem:
Accept an array, and output an array with all vowels removed

Input:
- An array

Output:
- An array based on the input, but with the vowels removed

Questions:
Q: Should a new array be returned?
  A: Yes (assumption)
Q: What is a vowel in this case?
  A: a, e, i, o, u
Q: How many elements does the input have?
  A: 1 or more (assumption)
Q: Can there be other elements than strings?
  A: No (assumption)

Rules:
- Remove all vowels from input (a, e, i, o, u)
- Return a new array

Data:
- Array (input)
- Strings (elements)
- Array (output)

Algorithm:
Get an array with one or more string elements
Iterate over the array:
  Iterate over each word in the array
    Replace each  a, e, i, o, u character with an empty string
  End iterating over each word
End iterating over the array and return a new array
*/

function removeVowels(arr) {
  return arr.map(word => word.replace(/[aeiou]/gi, ""));
}

// Test cases
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(  removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(  removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
