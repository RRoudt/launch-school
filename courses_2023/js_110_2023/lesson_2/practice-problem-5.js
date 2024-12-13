/* Practice Problem 5

Instructions:
Compute and display the total age of the male members of the family.

Input:
- Object with nested objects

Output:
- A number, totaling all ages of the males

Rules:
- Display a single number
- Only count the age of male members

Data:
- Input is a nested object
- Output is an integer
- An array to temporarily store the filtered keys

Algorithm:
- Create an empty variable to keep track of the total age
- Copy the source object's keys into an array
- Iterate over the array
  - Use the current value to access the source object
  - Access the property 'gender' and check its value
    - Only keep the keys that have 'male' as value of gender
- Iterate over the filtered array
  - Use the current value to access the source object
  - Access the property 'age' and add its value to the total age
- Return the total age of all males
*/

function totalAgeMales(obj) {
  const filteredObjKeys = Object.keys(obj).filter(key => {
    return obj[key]['gender'] === 'male';
  });

  return filteredObjKeys.reduce((totalAge, key) => {
    return totalAge += obj[key]['age'];
  }, 0);
}

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(totalAgeMales(munsters));