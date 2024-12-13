/* eslint-disable max-len */
/* Practice Problem 16

Given the following data structure, write some code that defines an object where the key is the first item in each subarray, and the value is the second.

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
*/

// Test case
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let obj = Object.fromEntries(arr);

console.log(obj);
// Expected output:
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }