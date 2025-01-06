/* Easy 6.5: Name Swapping

Instructions:
- Write a function that takes a string argument consisting of:
  - a first name, a space, and a last name
- and returns a:
  - new string consisting of the last name, a comma, a space, and the first name.

Input:
- A string containing a first name and a last name

Output:
- A string where the first and last name are swapped, and concatenated by a command and a space

Rules:
- The input string contains two words (names), separated by a space
- The output string needs to first show the last name, then a comma and a space, and then the first name

Data:
- String (input)
- Array (processing)
- String (output)

Algorithm:
Get a string: name
Turn name into an array (split on space)
Reverse the array
Turn the array into a string again by joining the elements with ', '
Return the reversed name
*/

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

// Test cases
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('John Doe'));       // "Doe, John"
console.log(swapName('Ramses Oudt'));    // "Oudt, Ramses"