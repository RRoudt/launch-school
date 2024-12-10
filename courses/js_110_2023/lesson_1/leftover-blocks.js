/* Lesson 1.7: Leftover blocks

Instructions:
- Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

Input:
- Integer for a total number of cubes 

Output:
- Integer for number of cubes left after building the tallest possible valid structure

Rules:
- Top layer is a single block
- A block in an upper layer must be supported by four blocks below
- A block in a lower layer can support more than one block in an upper layer
- There can be no gaps between blocks
- Layer number correlates with number of blocks in a layer: **layer number * layer number = number of blocks in layer.**

Data:
- No special data structure is needed as a number is given as input and a number needs to be returned.

Algorithm:
- Get `totalBlocks` and check whether it's higher than `0`
	- If it's `0` or below, return `0`
- Set `currentLayerNum`: `1`
- Set `currentLayerLength`: `1`
- Set `remainingBlocks` to `totalBlocks`
- While `remainingBlocks` >= `currentLayerLength`
	- Subtract `currentLayerLength` value from `remainingBlocks` value
	- Increment `currentLayerNum` by `1`
	- Reassign `currentLayerLength` value to: `currentLayerNum * currentLayerNum`
- Return `remainingBlocks` value
*/

function calculateLeftoverBlocks(totalBlocks) {
  if (totalBlocks <= 0) return 0;

  let currentLayerNum = 1;
  let currentLayerLength = 1;
  let remainingBlocks = totalBlocks;

  while (remainingBlocks >= currentLayerLength) {
    remainingBlocks -= currentLayerLength;
    currentLayerNum += 1;
    currentLayerLength = currentLayerNum * currentLayerNum;
  }

  return remainingBlocks;
}

// Test cases
console.log(calculateLeftoverBlocks(0) === 0);  //true
console.log(calculateLeftoverBlocks(1) === 0);  //true
console.log(calculateLeftoverBlocks(2) === 1);  //true
console.log(calculateLeftoverBlocks(4) === 3);  //true
console.log(calculateLeftoverBlocks(5) === 0);  //true
console.log(calculateLeftoverBlocks(6) === 1);  //true
console.log(calculateLeftoverBlocks(14) === 0); //true