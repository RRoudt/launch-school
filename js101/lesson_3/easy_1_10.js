/* Easy 1.10

Return a new version of this sentence that ends just before the word house.

Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

Input:
- String

Output:
- Same string but with the end cut off, starting at 'house' (inclusive)
*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

// My solution
let myAdviceCutShort = advice.split(' ').slice(0, 8).join(' ');

// Launch School's solution
let lsAdviceCutShort = advice.slice(0, advice.indexOf('house'));

console.log(`'${myAdviceCutShort}'`); // 'Few things in life are as important as'
console.log(`'${lsAdviceCutShort}'`); // 'Few things in life are as important as '