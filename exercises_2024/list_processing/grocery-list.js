/* List processing 8: Grocery List

Instructions:
- Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array.
- Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit.
- The output array is such that each fruit name appears the number of times equal to its desired quantity:
  [['apple', 3], ['orange', 1], ['banana', 2]] -> ["apple", "apple", "apple", "orange", "banana", "banana"]

Input:
- A two-dimensional array

Output:
- A one-dimensional array

Rules:
- The output array should contain each value (at first subindex) times the number (at second subindex)

Data:
- Array (two-dimensional, input)
- String (first subelements)
- Number (second subelements)
- Array (flat, output)

Algorithm:
Get an array: inputArray
Iterate over inputArray to create a new array:
  Add each word to a subarray, for the times that's in multiplier
  Return the subarray
End iterating over inputArray and return the new array, flattened
*/

function buyFruit(inputArray) {
  return inputArray
    .map(wordMultiplier => {
      let [word, multiplier] = wordMultiplier;
      let wordArr = [];

      for (let count = 0; count < multiplier; count += 1) {
        wordArr.push(word);
      }

      return wordArr;
    })
    .flat();
}

// Test case
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]