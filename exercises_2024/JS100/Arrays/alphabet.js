/* JS100 - Arrays - 4. Alphabet

Instructions:
+ Split the alphabet into an array of characters.

Input:
+ The alphabet (a-z), as a string.

Output:
+ The alphabet (a-z), as an array (each letter is an element)

Data:
+ String
+ Array
*/

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphabetArr = [...alphabet];

// Test case
console.log(alphabetArr);
/*
[
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
]
*/