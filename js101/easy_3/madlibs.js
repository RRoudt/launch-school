/* JS101 Small Problems Exercises: Easy 3.6: Madlibs

Instructions:
- Create a simple madlib program
- Prompt for a noun, a verb, an adverb, and an adjective
- Inject the collected works from the prompts into a story

Inputs:
- A noun (string)
- A verb (string)
- An adverb (string)
- An adjective (string)

Outputs:
- Three strings, logged to the console

Example:
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

Pseudocode:
- Import readline-sync library
- Set and get string from user: noun
- Set and get string from user: verb
- Set and get string from user: adjective
- Set and get string from user: adverb
- Console log the strings:
  - Log: Do you {verb} your {adjective} {noun} {adverb}? That's hilarious!
  - Log: The {adjective} {noun} {verb}s {adverb} over the lazy {noun}.
  - Log: The {noun} {adverb} {verb}s up {adjective} Joe's turtle.
*/

const readline = require('readline-sync');

const noun = readline.question("Enter a noun: ");
const verb = readline.question("Enter a verb: ");
const adjective = readline.question("Enter an adjective: ");
const adverb = readline.question("Enter an adverb: ");

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);