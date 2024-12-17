/*
Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

Rules:
+ Write a function that returns a string
+ Accept two parameters:
  + Number of times the string needs to be repeated
  + String that needs to be repeated
+ Return the string times the number given in the argument
*/

function repeat(number, string) {
  return string.repeat(number);
}

// Test case
console.log(repeat(3, 'ha')); // 'hahaha'
console.log(repeat(5, 'hi')); // 'hihihihihi'