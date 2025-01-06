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

Further exploration:
- What if the person has one or more middle names?
- Refactor the current solution so that it can accommodate this; the middle names should be listed after the first name:
  'Karl Oskar Henriksson Ragvals' -> 'Ragvals, Karl Oskar Henriksson

Algorithm (further exploration):
Get a string: name
Set an empty string: reversedName
Turn name into an array (split on space): nameArray
Set a variable to the last index of nameArray (nameArray.length - 1): lastIndex
If nameArray === 2:
  Reverse nameArray
  Turn nameArray into a string by joining the elements with ', '
  Store the result in reversedName
Else:
  Create an array from the first element of nameArray to the second to last
    Turn this array into a string (joined by spaces), and store this in a variable: firstNames
  Store the value of the last element of nameArray in a variable: lastName
  Set reversedName to: `{lastname}, {firstNames}
Endif
Return reversedNamed
*/

function swapName(name) {
  let reversedName = '';
  let nameArray = name.split(' ');
  let lastIndex = nameArray.length - 1;

  if (nameArray.length === 2) {
    reversedName = nameArray.reverse().join(', ');
  } else {
    let firstNames = nameArray.slice(0, lastIndex).join(' ');
    let lastName = nameArray[lastIndex];
    reversedName = `${lastName}, ${firstNames}`;
  }

  return reversedName;
}

// Test cases
console.log(swapName('Joe Roberts'));                      // "Roberts, Joe"
console.log(swapName('John Doe'));                         // "Doe, John"
console.log(swapName('Ramses Oudt'));                      // "Oudt, Ramses"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"