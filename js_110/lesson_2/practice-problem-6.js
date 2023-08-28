/* Practice Problem 6

Given this previously seen family object, print the name, age, and gender of each family member.

Each output line should follow this pattern:
(Name) is a (age)-year-old (male or female).
*/

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let person in munsters) {
  console.log(`${person} is a ${munsters[person].age}-year-old ${munsters[person].gender}`);
}