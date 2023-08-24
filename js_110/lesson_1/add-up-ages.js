/* Practice problem 13.9: Munster family ages

Instructions:
- Add up all of the ages from the Munster family object.

Inputs:
- Object with numbers as values

Outputs:
- Single number value of all number values in object added up

Rules:
- 

Data:
- Object as input
- Number as output

Algorithm:
- Get an object with only numbers as values
- Create an array out of the object values
- Iterate over the array with values
  - Add every element to the grand total
- Return the value of every element added up
*/

function addAllElements(obj) {
  const arrValues = Object.values(obj);
  return arrValues.reduce((sum, value) => sum + value);
}

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(addAllElements(ages));  // 6174