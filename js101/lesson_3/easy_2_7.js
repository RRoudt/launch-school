/* Lesson 3. Practice Problems: Easy 2.7

Instructions:
- Create an array from the given object that contains only two elements: Barney's name and Barney's number:

Input:
- Object with names and numbers

Output:
- Array that only contains: Barney's name and Barney's number

Pseudocode:
- Turn the object into an array
  - This results in a nested array of key-value pairs: [key, value]
- Filter the nested elements, only keeping the one(s) that have 'Barney' as key
- Flatten the resulting array to unnest the element(s)
*/

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let barney = Object.entries(flintstones).filter(([key, value]) => {
  if (key === 'Barney') return [key, value];
}).flat();

console.log(barney); // [ 'Barney', 2 ]