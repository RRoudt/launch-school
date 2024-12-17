/*
Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?

Inputs:
+ Two strings

Output:
+ Boolean whether the strings are the same

Rules:
+ Case sensitivity should not matter for equality
*/

function checkStringEquality(stringA, stringB) {
  stringA = stringA.toLowerCase();
  stringB = stringB.toLowerCase();

  return stringA === stringB;
}

// Test data
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';
let string4 = 'PenGuIn';
let string5 = 'Penguino';

// Test cases
console.log(checkStringEquality(string1, string2)); // true
console.log(checkStringEquality(string1, string3)); // false
console.log(checkStringEquality(string3, string4)); // true
console.log(checkStringEquality(string3, string5)); // false