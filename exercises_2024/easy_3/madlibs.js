/* Easy 3.6: Madlibs

Instructions:
- Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.
- Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Input:
- Noun (string via prompt)
- Verb (string via prompt)
- Adverb (string via prompt)
- Adjective (string via prompt)

Output:
- Strings:
  Do you {verb} your {adjective} {noun} {adverb}? That's hilarious!
  The {adjective} {noun} {verb}s {adverb} over the lazy {noun}.
  The {noun} {adverb} {verb}s up {adjective} Joe's turtle.

Rules:
- Promp the user for the input
- Return a string based on the input

Data:
- Strings (input via prompt, and output to console)

Algorithm:
Get noun from user
Get verb from user
Get adjective from user
Get adverb from user
Display story in console
*/

const readline = require("readline-sync");

console.log('Enter a noun:');
let noun = readline.question();

console.log('Enter a verb:');
let verb = readline.question();

console.log('Enter an adjective:');
let adjective = readline.question();

console.log('Enter an adverb:');
let adverb = readline.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);