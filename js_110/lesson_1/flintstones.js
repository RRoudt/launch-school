/* Practice problem 13.8: Flintstones

Instruction:
- Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array.

Input:
- Array with strings

Output:
- Plain object

Rules:
- Every element in the array will act as the value of a key-value pair
- The index number will be the value of the corresponding key

Data:
- Array as input
- Object as output

Algorithm:
- Create a new empty object
- Iterate over the array
  - For every element, use the string value as the object key to assign its index value to the newly created object
- Return the mutated object
*/

function elementsToObject(arr) {
  let obj = {};
  arr.forEach((key, index) => {
    obj[key] = index;
  });
  return obj;
}

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
console.log(elementsToObject(flintstones));