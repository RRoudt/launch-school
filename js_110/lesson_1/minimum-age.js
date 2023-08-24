/* Practice problem 13.10: Minimum age

Instructions:
- Pick out the minimum age from our current Munster family object.

Inputs:
- Object with numbers as values

Outputs:
- Single number of the lowest value in the object

Rules:
- Must return a single number

Data:
- Object as input
- Number as output

Algorithm:
- Get an object with numbers as values
- Create a new numerical variable and set to Infinity: minAge
- Create an array out of the object values
- Iterate over the array with object values
  - Compare the current value to the minAge value
    - If the current value is lower than minAge, reassign minAge to current value
- Return the value of the minAge variable
*/

function minimumAge(obj) {
  let minAge = Infinity;
  let ages = Object.values(obj);

  ages.forEach(age => {
    if (age < minAge) {
      minAge = age;
    }
  });

  return minAge;
}

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(minimumAge(ages));  // 10