/* Easy 1.7

Determine whether the name Dino appears in the strings below -- check each string separately.

Input:
- String

Output
- True if string contains 'Dino'
- False if string does not contain 'Dino'
*/

// Data
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

let str1HasDino = str1.includes('Dino');
let str2HasDino = str2.includes('Dino');

// Test cases
console.log(str1HasDino); // false
console.log(str2HasDino); // true
