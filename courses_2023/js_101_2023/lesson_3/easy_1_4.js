/* Easy 1.4

Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized.

Input:
- String

Output:
- Capitalized string, with all other letters in lowercase
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let capitalizedDesc = munstersDescription[0].toUpperCase() +
  munstersDescription.slice(1).toLowerCase();

console.log(capitalizedDesc);
// The munsters are creepy and spooky.