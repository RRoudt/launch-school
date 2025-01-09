/* String and Text Processing 2: Delete Vowels

Instructions:
- Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

Input:
- An array with string elements

Output:
- An array with string elements, but none of the elements contain a vowel

Questions:
Q: Should the same array be returned (i.e. should be mutated)?
  A: Let's assume not, so return a new array

Rules:
- Accept an array as input
- Return a new array (I came up with this rule)
- Add the elements from the input array to the new array, but filter out all vowels (a, e, i, o, u — regardless of case)

Data:
- Array (input)
- Strings (array elements)
- Vowels ("subtype" of string: a, e, i, o, u)
- Array (output)

Algorihtm:
Get an array of strings: inputArray
Set an empty array to add the filtered words to: filteredArray
Iterate over inputArray
  Iterate over each string
    Set a temporary variable: filteredString
    If the current character is not a vowel (a, e, i, o, u — regardless of case):
      Add the character to filteredString
    End if
  End iterating over the string and add filteredString to filteredArray
End iterating over inputArray
Return filteredArray
*/

function removeVowels(inputArray) {
  let filteredArray = [];

  inputArray.forEach(string => {
    let filteredString = '';

    for (let char of string) {
      if (/[^aeiou]/i.test(char)) filteredString += char;
    }

    filteredArray.push(filteredString);
  });

  return filteredArray;
}

// Test cases
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]