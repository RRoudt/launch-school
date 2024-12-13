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
- Get and remove the last name from the nameArr: lastName
- Return the lastName plus the first name(s)
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