/* Exercise 3: Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement.

The object should contain at least 3 elements.*/

let myArray = {
  0: 'Ramses',
  1: 34,
  2: ['Coding', 'Reading'],
  length: 3,
};

console.log("myArray length: " + myArray.length);

for (let i = 0; i < myArray.length; i += 1) {
  console.log(`"Index" ${i}: ${myArray[i]}`);
}