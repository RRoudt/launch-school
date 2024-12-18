/* JS100 - Arrays - 9. Travel

Instructions:
+ The destinations array contains a list of travel destinations.
+ Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().
  + For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false.

Input:
+ Array of strings
+ String to check if it's in the array

Output:
+ Boolean: true or false

Rules:
+ The inputs are a string and an array with string elements
+ The output is a boolean
+ Do not use the built-in method Array.prototype.includes()

Questions:
-

Data:
- Array (input)
- String (input)
- Boolean (output)
- Strings (individual elements)

Algorithm:
- Get a string and an array as input
- Iterate over the array
  - Check for every element if it's equal to the input string
    - If yes, return true
- If at the end of the array no element was matched, return false
*/

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(string, array) {
  for (let element of array) {
    if (element === string) return true;
  }

  return false;
}

// Test cases
console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false
console.log(contains('Sydney', destinations));    // true
console.log(contains('Amsterdam', destinations)); // false
console.log(contains('Rome', destinations));      // true
console.log(contains('Málaga', destinations));    // false