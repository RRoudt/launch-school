/* JS110 - Lesson 2.5: Practice Problem 19

Instructions:
- Create a deep copy of the munsters object, whose nested objects cannot be altered.

Input:
- An object with nested objects

Output:
- A deep copy with frozen nested objects

Rules:
- Create a deep copy of the input object
- Freeze the nested objects of the deep copied object

Data:
- Object (input)
- Objects (nested, input object values)
- Object (output)
Algorithm:
Get an object and iterate over it:
  Deep copy the current nested object
  Freeze the deep copied nested object
  Add the new frozen nested object to a new object
End iterating over the object and return the new object
*/

function getDeepCopyFreeze(obj) {
  return Object
    .fromEntries(Object
    .entries(obj)
    .map(keyValue => {
      let [key, value] = keyValue;
      let deepCopiedValue = structuredClone(value);
      return [key, Object.freeze(deepCopiedValue)];
    }));
}

// Test case
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let deepCopiedFrozenMunsters = getDeepCopyFreeze(munsters);

deepCopiedFrozenMunsters.herman.age = 99;
munsters.herman.age = 99;
console.log(Object.isFrozen(deepCopiedFrozenMunsters.marilyn)); // true

console.log(deepCopiedFrozenMunsters);
// {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

console.log(munsters);
// {
//   herman: { age: 99, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };