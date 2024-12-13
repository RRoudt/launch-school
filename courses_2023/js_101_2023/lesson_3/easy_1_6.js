/* Easy 1.6

Add entries for Marilyn and Spot to the object.

Input:
- ages object
- additionalAges object

Output:
- ages object contains all ages from ages and additionalAges objects
*/

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);

console.log(ages);
// { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10, Marilyn: 22, Spot: 237 };