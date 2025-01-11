/* JS110 - Lesson 2.5: Practice Problem 16

Instructions:
- Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.
- Example:
  [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

Input:
- An object containing objects as values

Output:
- An array
  - Containing strings, or arrays with strings

Questions:
Q: Should the nested arrays be manipulated?
  A: Let's assume not; create new nested arrays

Rules:
- Only include the colors of the fruits, and the sizes of the vegetables
- Colors of fruits should be capitalized
- Sizes should be all in uppercase

Data:
- Object (input)
- Arrays (object values)
- Strings (object and array values)
- Array (output)

Algorithm:
Get an object, turn it into an array, and iterate over that array:
  If type === 'fruit
    Iterate over the array in colors:
      Capitalize the string and add it to a new array
    End iterating over the array in colors and add the array to a new array
  Else:
    Add the value of size to a new array, all in uppercase
  Endif
End iterating over the array and return the new array
*/

function getColorSize(obj) {
  return Object
    .values(obj)
    .map(nestedObj => {
      if (nestedObj.type === 'fruit') {
        return nestedObj.colors.map(color => {
          return color[0].toUpperCase() + color.slice(1);
        });
      }

      return nestedObj.size.toUpperCase();
    });

}

// Test case
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

console.log(getColorSize(obj));
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]