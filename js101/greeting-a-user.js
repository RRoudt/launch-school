/* Easy 2.2: Greeting a user

Input:
- Ask for the user's name

Output
- Greet the user
- If the user enters an !, yell back to the user

Examples:
> What is your name? Bob
= Hello Bob.

> What is your name? Bob!
= HELLO BOB. WHY ARE WE SCREAMING?

Pseudocode:
GET name from user
IF name includes '!'
  PRINT 'HELLO NAME. WHY ARE WE SCREAMING?'
ELSE
  PRINT 'Hello name.'
*/

const readline = require('readline-sync');

let name = readline.question('What is your name? ');

if (name.includes('!')) {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}