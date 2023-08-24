/* eslint-disable max-len */
/* Greeting a user

- Write a program that will ask for user's name. The program will then greet the user.
- If the user writes "name!" then the computer yells back to the user.

Examples:
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

Input:
- Name (ask user)

Output:
- Greeting

Rules:
- If input ends in "1", greet and yell back at the user
*/

const readline = require('readline-sync');

const name = readline.question('What is your name? ');

if (name[name.length - 1] !== '!') {
  console.log(`Hello ${name}`);
} else {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
}