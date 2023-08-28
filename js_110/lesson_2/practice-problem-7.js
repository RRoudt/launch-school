/* Practice Problem 8

Instructions:
Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop. 

Input:
- Object with at each element, an array

Output:
- Only the vowels from the strings in the array

Rules:
- Don't use a for or while loop
- Only output the vowel
- Output to the console

Data:
- Object as input
- Array as nested object
- String with only vowels
- Array to temporarily keep string (to filter them)

Algorithm:
- Get an object with strings inside arrays
- Create an empty string to keep vowels
- Iterate over the input object
  - Iterate over its array
    - Turn each string into an array
      - Iterate over each string array
        - If current character is a vowel, add to the vowels array
- Return vowels
*/

function isVowel(character) {
  return 'aeiou'.includes(character.toLowerCase());
}

function getVowels(obj) {
  let vowels = '';
  let objValues = Object.values(obj);

  objValues.forEach(arr => {
    arr.forEach(str => {
      str.split('').forEach(char => {
        if (isVowel(char)) {
          vowels += char;
        }
      });
    });
  });

  return vowels;
}

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

console.log(getVowels(obj));