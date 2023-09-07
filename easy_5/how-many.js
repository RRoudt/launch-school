/* Easy 5.9: How Many?

Instructions:
- Counts the number of occurances of each element in an array
- Once counter, log each element with the number of occurances
- Try to solve the problem when words are case insensitive

Input:
- Array of values

Output:
- Elements and the amount of occurances, logged to the console

Rules:
- Words are case insensitive ("suv" === "SUV") (further exploration)
- Result must be logged to the console as:
  car => 4

Data:
- Array as input
- Strings as output to console
- Object as intermediate structure:
  {
    car: 4,
    truck: 3,
    suv: 2,
    motorcycle: 2,
  }

Algorithm:
- Create a new empty object: elementOccurances
- Iterate over the input array (arr)
  - Make current element lowercase
  - Check if a key with the current element's name exists in elementOccurances
    - If yes, increment its value by 1
    - If not, create the key and set its value to 1
- Iterate over elementOccurances
  - For each property, log to the console:
    property => value
*/

function countOccurrences(arr) {
  let elementOccurances = {};

  // Iterate over input array and add elements to object
  arr.forEach(element => {
    element = element.toLowerCase();
    if (elementOccurances.hasOwnProperty(element)) {
      elementOccurances[element] += 1;
    } else {
      elementOccurances[element] = 1;
    }
  });

  // Iterate over object and log occurances to console
  for (let prop in elementOccurances) {
    console.log(`${prop} => ${elementOccurances[prop]}`);
  }
}

// Test case
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
// car => 4
// truck => 3
// suv => 2
// motorcycle => 2