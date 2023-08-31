/* eslint-disable max-len */
/* Easy 5.2: Combining Arrrays

Instructions:
- Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two.
- There should be no duplication of values in the returned array, even if there are duplicates in the original arrays.
- You may assume that both arguments will always be arrays.

Input:
- Two arrays

Output:
- One new deduplicated array

Rules:
- Each value can only appear once in the returning array

Data:
- Two arrays as input
- One new array as output

Algorithm:
- Get a list of arrays
- Create a new array: deduplicatedArr
- Iterate through the list of arrays
  - Iterate through each array
    - Check whether the current value is already in deduplicatedArr
      - If not, add value to deduplicatedArr
- Return deduplicatedArr
*/

function union(...arrs) {
  let deduplicatedArr = [];

  arrs.forEach(subArr => {
    subArr.forEach(element => {
      if (!deduplicatedArr.includes(element)) {
        deduplicatedArr.push(element);
      }
    });
  });

  return deduplicatedArr;
}

// Test cases
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 3, 5], [3, 1, 5]));    // [1, 3, 5]
console.log(union(['hi', 'hello', 'goodbye'], ['bonjour', 'hi', 'au revoir'], ['see ya', 'goodbye']));    // ['hi', 'hello', 'goodbye', 'bonjour', 'au revoir', 'see ya']