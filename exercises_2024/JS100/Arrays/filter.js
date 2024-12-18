/* JS100 - Arrays - 5. Filter

Instructions:
+ Count the number of elements in scores that are 100 or above.

Input:
+ Array of numbers

Output:
+ Number (of elements that are 100 or above)

Rules:
+ Only count elements that are 100 or above

Data:
+ Array (input)
+ Number (output)

Algorithm:
+ Set an empty counter
+ Iterate over the array
  + If the current element is 100 or higher, increase counter by 1
*/

let scores = [96, 47, 113, 89, 100, 102];

function countHundredOrMore(arr) {
  let counter = 0;

  arr.forEach(num => {
    if (num >= 100) counter += 1;
  });

  return counter;
}

// Test case
console.log(countHundredOrMore(scores)); // 3