/* JS100 - Functions 2 - 7. Arrow Functions (Part 1)

Instructions:
- Refactor the function below using arrow syntax. The final line should still log the same sentence.
*/

const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template
    .replace('VERB', verb)
    .replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.