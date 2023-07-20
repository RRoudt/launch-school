/* Exercise 9: Convert nestedArray into an object, containing the same key-value pairs. */

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = {};

nestedArray.forEach(element => {
  person[element[0]] = element[1];
});

console.log(person);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }