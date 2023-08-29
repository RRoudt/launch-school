/* eslint-disable max-len */
/* Practice Problem 14

Instructions:
Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

Input:
- Object with nested objects and nested arrays

Output:
-

The return value should look like this:
[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

Rules:
- The sizes should be in uppercase
- The colors should be capitalized

Data:
- Object with nested objects and nested arrays as input
- Array as output, with some nested arrays

Algorithm:
- Get object
- Create new empty array: fruitsAndVegetables
- Iterate through the input object
  - Check the value of the type property
    - If type: 'fruit', iterate through the subarray at the colors prop
      - Capitalize each element in the subarray and add it to a new subarray
      - Add the new subarray to fruitsAndVegetables
    - If type: 'vegetable'
      - Access the value at the size property and add it to fruitsAndVegetables
- Return fruitsAndVegetables
*/

function fruitsAndVeggies(obj) {
  let fruitsAndVegetables = [];

  for (let prop in obj) {
    if (obj[prop].type === 'fruit') {
      let colorsCapitalized = [];

      obj[prop].colors.forEach(color => {
        colorsCapitalized.push(color[0].toUpperCase() + color.slice(1));
      });

      fruitsAndVegetables.push(colorsCapitalized);
    } else if (obj[prop].type === 'vegetable') {
      fruitsAndVegetables.push(obj[prop].size.toUpperCase());
    }
  }

  return fruitsAndVegetables;
}

// Test case
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

console.log(fruitsAndVeggies(obj));
// Expected output:
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
