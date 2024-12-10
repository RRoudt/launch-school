/* Lesson 3. Practice Problems: Easy 2.6

Instructions:
- Create a new array that contains all of the values of the source array, but in an unnested format.

Input:
- Array with some nested elements (but not all).

Output:
- Unnested element

Pseudocode;
- Set and get array: nestedArr
- Set a new empty array: unnestedArr
- Loop through the array: nestedArr
  - If current element is an array
    - Loop through the elements within the array: nestedArr[el]
      - Add the current subelement to unnestedArr: nestedArr[el][subEl]
  - Else
    - Add the current element to unnestedArr: nestedArr[el]
*/

function getUnnestedArrayFrom(nestedArr) {
  let unnestedArr = [];

  nestedArr.forEach(el => {
    if (Array.isArray(el)) {
      el.forEach(subEl => unnestedArr.push(subEl));
    } else {
      unnestedArr.push(el);
    }
  });

  return unnestedArr;
}

// Test case
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let unnestedFlintsones = getUnnestedArrayFrom(flintstones);

console.log(flintstones);
// [ 'Fred', 'Wilma', [ 'Barney', 'Betty' ], [ 'Bambam', 'Pebbles' ] ]

console.log(unnestedFlintsones);
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]