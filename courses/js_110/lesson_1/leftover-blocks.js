/* JS110 - Lesson 1.7: PEDAC Guided Practice: Leftover Blocks

Instructions:
- Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.
  - The building blocks are cubes
  - The structure is built in layers
  - The top layer is a single block
  - A block in an upper layer must be supported by four blocks in a lower layer
  - A block in a lower layer can support more than one block in an upper layer
  - You cannot leave gaps between blocks

Input:
- A number (meaning amount of cubes)

Output:
- A number
  - The number of blocks left after building the tallest possible valid structure

Rules:
- Blocks are cubes
  - Cubes are six-sided, have square faces, and have equal lengths on all sides
- The top layer is a single block
- A block in an upper layer needs to be supported by 4 blocks in a lower layer
- A block in a lower layer can support multiple blocks in an upper layer
- There cannot be gaps between block
- Number of blocks in a layer = layer number x layer number

Questions:
Q: Is the number input an integer (a whole number)?
  A: Yes, from the discussion/answer of step 1, it seems to be the case.
Q: What is the desired shape of the structure? A tower or more like a pyramid? 
  A: See answer below; it's like a pyramid.
Q: Are supporting blocks horizontal or vertical?
  Vertical:
  *
  *
  * 
  * 
  * 
  Horizontal:
  *****
  A: From the discussion in step 1, it looks like the structure is like this (--- is a single block):
      ---
    --- ---
  --- --- ---
Q: Will there always be leftover blocks?
    A: From the test cases it seems like there are sometimes leftover blocks, and sometimes there are none
Q: Can a layer have more blocks than it needs?
  A: As there can be leftover blocks, let's assume each layer will have as many blocks as it needs for a valid structure

Data:
- Number (input)
- Number (output)
- The structure could be created with an array, but I think a simple calculation will be enough

Algorithm:
Get a number: startingBlocks
Set a number and initialize it to the value of startingBlocks: leftoverBlocks
Set a number to 1: currentLayer
While leftoverBlocks > (currentLayer * currentLayer):
  leftoverBlocks = leftoverBlocks - (currentLayer * currentLayer)
  currentLayer += 1
Return leftoverBlocks
*/

function calculateLeftoverBlocks(startingBlocks) {
  let leftoverBlocks = startingBlocks;
  let currentLayer = 1;
  let blocksNeededForLayer = currentLayer * currentLayer;

  while (leftoverBlocks >= blocksNeededForLayer) {
    leftoverBlocks -= blocksNeededForLayer;
    currentLayer += 1;
    blocksNeededForLayer = currentLayer * currentLayer;
  }

  return leftoverBlocks;
}

// Test cases
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true