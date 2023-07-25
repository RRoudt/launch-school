/* Easy 2.1: Welcome Stranger

Inputs:
- Array with parts of a person's name
- Object with a person's title and occupation

Output:
- Return a greeting that used the person's full name and title

Example:
greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
=> Hello, John Q Doe! Nice to have a Master Plumber around.

Pseudocode:
SET nameArr containing an array with parts of a person's name
SET job containing an object with a person's title and occupation
SET name by joining parts of nameArr array, separated by spaces
RETURN string that says: "Hello, ${name}!
  Nice to have a ${job.title} ${job.occupation} around"
*/

function greetings(nameArr, job) {
  const name = nameArr.join(' ');
  return `Hello, ${name}! Nice to have a ${job.title} ${job.occupation} around.`;
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// => Hello, John Q Doe! Nice to have a Master Plumber around.