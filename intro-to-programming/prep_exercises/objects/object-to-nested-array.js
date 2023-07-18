/* Exercise 8: Convert the person object into a nested array nestedPerson, containing the same key-value pairs. */

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

const nestedPerson = Object.entries(person);

console.log(nestedPerson);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]