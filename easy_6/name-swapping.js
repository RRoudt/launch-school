/* Easy 6.5: Name Swapping

Input:
- String with a first name, a space, and a last name

Output
- A string with the last name, a comma, a space, and the first name

Rules:
- The first and last name in the input string are separated by a space
- The output string must have the last name first and the first name last

Data:
- String as input
- String as output
- Array as intermediate structure

Algorithm:
- Get a string: name
- Turn name into an array, splitting on a space: nameArr
- Reverse the nameArr
- Turn nameArr into a string, separating the elements by a comma and space
  - Return this
*/

function swapName(name) {
  let nameArr = name.split(' ');
  const lastName = nameArr.pop();
  return lastName + ', ' + nameArr.join(' ');
}

// Test cases
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Ramses Oudt'));    // "Oudt, Ramses"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"