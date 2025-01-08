/* JS110 - Lesson 1.9: Selection and Transformation - Select fruit

Instructions:
- We want to select the key-value pairs where the value is 'Fruit'.
- How would you implement this function?

Input:
- An object

Output:
- An object with only the key-value pairs where the value is 'Fruit'

Rules:
- Accept an object as input
- Return a new object

Questions:
Q: Should a new object be returned?
  A: Let's assume, yes

Data:
- Object (input)
- Strings (object values)
- Object (output)

Algorithm:
Get an object: inputObj
Set an empty object: outputObj
Iterate over inputObj
  If the current value is 'Fruit':
    Add the current key-value pair to outputObj
  End if
End iterating over inputObj
Return outputObj
*/

function selectFruit(inputObj) {
  let outputObj = {};

  for (let key in inputObj) {
    if (inputObj[key] === 'Fruit') {
      outputObj[key] = inputObj[key];
    }
  }

  return outputObj;
}

// Test case
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }