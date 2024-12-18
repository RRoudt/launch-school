/* JS100 - Arrays - 3. Add + Delete

Instructions:
- We are given the following array of energy sources:
  ['fossil', 'solar', 'wind', 'tidal', 'fusion']

  Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

Input:
- An array

Output:
- Same array, but changed:
  - 'fossil' removed
  'geothermal' added

Data:
- Array
*/

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
energy.push('geothermal');

// Test case
console.log(energy); // ['solar', 'wind', 'tidal', 'fusion', 'geothermal'];