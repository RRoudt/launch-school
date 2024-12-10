/* Exercise 3: Remove 'fossil' from the array, then add 'geothermal' to the end of the array. */

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// Log array before mutation
console.log(`Before: ${energy}`);

// Remove and add element
energy.shift();
energy.push('geothermal');

// Log array after mutation
console.log(`After: ${energy}`);