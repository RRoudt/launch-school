/* JS110 - Lesson 2.5: Practice Problem 12 & 13

Instructions:
- Create a deep copy of the following nested array.

Input:
- Nested array

Output:
- Nested array (deep copy)

Algorithm:
Get a nested array
Turn nested array into a string
Turn string into an object (array)
Return new object/array
*/

// Test case
const arr = [
  ['b', 'c', 'a'],
  ['blue', 'black', 'green'],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
const deepCopiedArr = JSON.parse(JSON.stringify(arr));
console.log(deepCopiedArr);
console.log(arr !== deepCopiedArr);

const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};
const deepCopiedTruthiness = structuredClone(truthiness);
console.log(deepCopiedTruthiness);
console.log(truthiness !== deepCopiedTruthiness);