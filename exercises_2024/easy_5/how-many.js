/* Easy 5.9: How Many?

Instructions:
- Write a function that counts the number of occurrences of each element in a given array.
- Once counted, log each element alongside the number of occurrences.
- Consider the words case sensitive e.g. ("suv" !== "SUV").

Input:
- An array

Output:
- The number of occurences of each element, logged to the console.
  Example: car => 4

Rules:
- Values are case sensitive: "suv" !== "SUV"
- Each value needs to be logged to the console, followed by the number of times it occurs in the input array, like this: car => 4

Data:
- Array (input)
- Strings (array elements)
- String (output)

Algorithm:
Get an array: inputArray
Create an empty object: outputObject
Iterate over inputArray:
  If outputObject does not contain a key with as name the current element:
    Add a key-value pair to outputObject, where the key is the current array element and the value is 1
  Else:
    Increment the key-value pair where the key is the current array element by 1
  Endif
Enditerate
Iterate over outputObject:
  For each key-value pair, display in the console: `{key} => {value}`
Enditerate
*/

function countOccurrences(inputArray) {
  let outputObject = {};

  inputArray.forEach(element => {
    if (!outputObject.hasOwnProperty(element)) {
      outputObject[element] = 1;
    } else {
      outputObject[element] += 1;
    }
  });

  Object.entries(outputObject).forEach(keyValue => {
    let [key, value] = keyValue;
    console.log(`${key} => ${value}`);
  });
}

// Test case
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1