"""
Create a function that takes a list of integers as an argument.
The function should return the minimum sum of 5 consecutive numbers in the list.
If the list contains fewer than 5 elements, the function should return None.

Input: list of integers
Output: lowest possible sum of 5 consecutive elements (numbers)

Explicit rules:
- Accept a list of integers as input
- Return None or an integer
- Return None if the input list is less than 5 elements long
- Return the lowest sum of 5 consecutive numbers in the list

Examples:
[1, 2, 3, 4] --> None
[1, 2, 3, 4, 5] --> 15
[1, 2, 3, 4, 5, 6] --> 15
[1, 2, 3, 4, 5, -5] --> 9
[55, 2, 6, 5, 1, 2, 9, 3, 5, 100] --> 16
[-1, -5, -3, 0, -1, 2, -4] --> -10

Data:
Input: list of integers
Intermediate:
- integer: elements of list, possible output (sum)
- None: possible output
- range: to iterate over input list
Output: None or integer (sum of elements)

Algorithm:
x 1. Receive list argument: numbers
x 2. Set variable to None: lowest_sum
x 3. If length of numbers list is less than 5:
    x Return lowest_sum (None)
x 4. Iterate for the length of the numbers list - 4:
    x Get sum of elements from current index to current index + 5: current_sum
    x If current index is 0, set lowest_sum to current_sum
    x If current_sum is lower than lowest_sum:
        x Set lowest_sum to current_sum
x 5. Return lowest_sum
"""

def minimum_sum(numbers):
    lowest_sum = None

    if len(numbers) < 5:
        return lowest_sum
    
    for idx in range(len(numbers) - 4):
        current_sum = sum(numbers[idx:idx + 5])

        if idx == 0:
            lowest_sum = current_sum

        if current_sum < lowest_sum:
            lowest_sum = current_sum

    return lowest_sum


print(minimum_sum([1, 2, 3, 4]) is None)
print(minimum_sum([1, 2, 3, 4, 5, -5]) == 9)
print(minimum_sum([1, 2, 3, 4, 5, 6]) == 15)
print(minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16)
print(minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10)