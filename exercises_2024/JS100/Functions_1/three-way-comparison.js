/*
Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

Rules:
+ Write a function
+ Accept two string arguments
+ Compare the length of the arguments
  + If the first string is shorter, return -1
  + If the second string is shorter, return 1
  + If both strongs are of equal length, return 0
*/

function compareByLength(stringA, stringB) {
  if (stringA.length === stringB.length) {
    return 0;
  } else if (stringA.length <= stringB.length) {
    return -1;
  } else {
    return 1;
  }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0