/* JS110 - Lesson 2.5: Practice Problem 8

Instructions:
- Using the forEach method, write some code to output all vowels from the strings in the arrays.
- Don't use a for or while loop.

Input:
- Object

Output:
- All vowels from the strings in the nested arrays

Questions:
Q: What does "output" mean?
  A: Let's assume logged to the console
Q: How should the vowels be displayed? One by one or as one string?
  A: Let's assume one by one
Q: What counts as a vowel?
  A: Let's assume: a, e, i, o, u (regardless of case)

Rules:
- Use the forEach method
- Don't use a for or while loop
- Strings are stored in an array, which is stored as a value of a property in an object

Data:
- Object (input)
- Arrays (nested in the object)
- Strings (array elements)
- Vowels ('subtype' of strings)

Algorithm:
Get an object
Turn object values into an array and iterate over it:
  Iterate over each word:
    Turn word into an array and iterate over each character:
      If character is a, e, i, o, u:
        Log character to console
    End iterating over characters
  End iterating over words
End iterating over array
*/

function displayVowels(obj) {
  Object.values(obj).forEach(arr => {
    arr.forEach(word => {
      word.split('').forEach(character => {
        if (/[aeiou]/i.test(character)) {
          console.log(character);
        }
      })
    });
  });
}

// Test case
let obj = {
  first: ['the', 'quick'],                 // e u i
  second: ['brown', 'fox'],                // o o
  third: ['jumped'],                       // u e
  fourth: ['over', 'the', 'lazy', 'dog'],  // o e e a o
};

displayVowels(obj);