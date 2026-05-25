"""
You have a number of building blocks to build a valid structure. 
Write a program that, given the number of available blocks,
calculates the number of blocks left over
after building the tallest possible valid structure.

There are certain rules about what determines a valid structure:
- The building blocks are cubes.
- The structure is built in layers.
- The top layer is a single block.
- A block in an upper layer must be supported by four blocks in a lower layer.
- A block in a lower layer can support more than one block in an upper layer.
- You cannot leave gaps between blocks.

-----------------------------------------------------------------------------

Input: number of available blocks
Output: number of left over blocks
Intermediate:
- Strings: maybe as a list element?
- Integers: to keep track of left over blocks
- Floats: -
- Booleans: -
- Lists: to build the structure, where each layer is a nested list?
- Tuples: -
- Sets: -

Explicit rules:
- Structure is built in layers
- Top layer is a single block
- Each upper block must be supported by 4 blocks below
- Lower blocks can support more than one upper block
- No gaps between blocks

Implicit rules:
- A layer's amount of blocks == layer number * layer number
- Layer number 1 == top layer (1 block)
    - Layer number 2 == layer that support top layer (4 blocks)

Questions:
- 1. Should the input and output be an integer?
    - Yes, both are an integer
- 2. What does it mean an upper block needs to be supported by 4 lower blocks?
- 3. How many upper blocks can a lower block support if more than 1?
    - Each block supports either 1 or 2 (overlapping) blocks
- 4. What's the significance of that a building block is a cube?
- 5. What's a valid structure?
- 6. Can a layer have more than the required blocks?
    - No, a block cannot have more than its required blocks
- 7. Will there always be left over blocks, or can 0 blocks be left?
    - No, sometimes there will be 0 left over blocks

Examples:
Input --> Output
0 --> 0
1 --> 0 (1 layer)
2 --> 1 (1 layer)
4 --> 3 (1 layer)
5 --> 0 (2 layers)
6 --> 1 (2 layers)
14 --> 0 (3 layers)

Algorithms:
    High level:
    x 1. Get input: available_blocks
    x 2. Set current_layer to 1
    x 3. Calculate blocks_necessary_for_layer
    x 4. While necessary_blocks_for_layer are available:
        A. Subtract necessary blocks from available blocks
        B. Increment current_layer by 1
        C. Re-calculate blocks_necessary_for_layer: 
            current_layer * current_layer
    x 5. Return available blocks
"""

def calculate_leftover_blocks(available_blocks):
    current_layer = 1
    blocks_necessary_for_layer = current_layer * current_layer

    while blocks_necessary_for_layer <= available_blocks:
        available_blocks -= blocks_necessary_for_layer
        current_layer += 1
        blocks_necessary_for_layer = current_layer * current_layer

    return available_blocks


print(calculate_leftover_blocks(0) == 0)  # True
print(calculate_leftover_blocks(1) == 0)  # True
print(calculate_leftover_blocks(2) == 1)  # True
print(calculate_leftover_blocks(4) == 3)  # True
print(calculate_leftover_blocks(5) == 0)  # True
print(calculate_leftover_blocks(6) == 1)  # True
print(calculate_leftover_blocks(14) == 0) # True