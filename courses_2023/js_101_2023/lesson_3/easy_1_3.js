/* Easy 1.3

Determine whether the following object of people and their age contains an entry for 'Spot'.

Input:
- Object with names as keys, and ages as values

Output:
- True if object contains key 'Spot'
- False if object does not contain key 'Spot'
*/

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// My solution
/* This turns out to be a wrong solution, because if 'Spot' is in the object but
has age 0, this would still return false whereas hasOwnProperty()
would return true. */
console.log(!!ages.Spot); // false

// Launch School's solution
console.log(ages.hasOwnProperty("Spot")); // false