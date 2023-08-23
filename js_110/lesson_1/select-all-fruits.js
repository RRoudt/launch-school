/* Lesson 1.9: Select all fruits

Instructions:
-

Inputs:
- Object with key-value pairs

Outputs:
- Object with all key-value pairs that have 'Fruit' as value

Rules:
- Return a new object
- Only select key-value pairs that have 'Fruit' as value
- Show selected key-value pairs as key-value pair in new object

Data:
- Both the input and the output are plain objects

Algorithm:
- Create array out of object keys
- Create a new empty object to store selected values
- Loop over the array with the object keys
  - Reference the produce object using the current value as key
    - If the value at the location of the current key is 'Fruit', add it to the new object
- When looping ends, return the new object
(I know I can use a for...in loop, but want to do the basics as LS is doing)
*/

function selectFruit(produce) {
  let keys = Object.keys(produce);
  let selectedProduce = {}
  for (let index = 0; index < keys.length; index++) {
    let key = keys[index];
    if (produce[key] === 'Fruit') {
      Object.assign(selectedProduce, {[key]: produce[key]});
    }
  }
  return selectedProduce;
} 

// Test case
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }