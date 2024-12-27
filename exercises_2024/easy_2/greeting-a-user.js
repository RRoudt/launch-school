/* Easy 2.2: Greeting a User

Instructions:
- Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

Input:
- Name (string)

Output:
- Greeting (string)

Rules:
- If input ends in "!", returning string is in uppercase

Questions:
-

Data:
- String

Algorithm:
Get name
If name ends with "!", log:
  HELLO ${NAME}. WHY ARE WE SCREAMING!?
Else:
  Hello ${name}
Endif
*/

const readline = require('readline-sync');

console.log('What is your name?');
let name = readline.question();

if (name.endsWith("!")) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING!?`);
} else {
  console.log(`Hello ${name}.`);
}