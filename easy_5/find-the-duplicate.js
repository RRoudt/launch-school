/* Easy 5.4: Find the duplicate

Instructions:
- Given an unordered array, find the one value that occurs twice

Input:
- Unordered array with one value that's in it twice

Output:
- The value that appears twice

Rules:
- Only one value appears twice, every other value appears once
- Return the value as soon as a duplicate has been found (break the program)

Data:
- Array as input
- Array as intermediate structure
- Value that's duplicate as return value

Algorithm:
- Get an array
- Initialize a new empty array to add items to
- Iterate over the input array
  - Check whether the current value is already in the new array
    - If not, add it to the array
    - If yes, return the current value and stop the program
*/

function findDup(arr) {
  let uniqueElements = [];

  for (let element of arr) {
    if (!uniqueElements.includes(element)) {
      uniqueElements.push(element);
    } else {
      return element;
    }
  }

  return undefined;
}

// Test cases
console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73