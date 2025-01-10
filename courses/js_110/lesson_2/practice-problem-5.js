/* JS110 - Lesson 2.5: Practice Problem 5

Instructions:
- Compute and display the total age of the male members of the family.

Input:
- An object with nested objects

Output:
- The sum of the ages of the the male people in the input object

Rules:
- Only count the age if the gender === 'male'

Data:
- Objects (input, also nested)
- Strings (gender)
- Numbers (ages)
- Number (output)

Algorithm:
Turn the object values into an array and iterate over it
  If gender === 'male'
    Add the age to the sum
  Endif
End iterating over the array and return the sum
*/

function maleSumAge(people) {
  return Object.values(people).reduce((sum, person) => {
    return person.gender === 'male' ? sum += person.age : sum;
  }, 0);
}

// Test case
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(maleSumAge(munsters));
// => 444