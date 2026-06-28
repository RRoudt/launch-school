"""
Create a function that takes a list of integers as an argument
and returns a tuple of two numbers that are closest together in value.
If there are multiple pairs that are equally close,
return the pair that occurs first in the list.

Input: list of integers
Output: tuple of integers

Rules:
- Accept a list of integers as input
- Output a tuple with two integers
- The output tuple must have the two numbers closest together in value
- When multiple pairs are equally close, return the first pair

Questions:
- What if a value occurs more than once?

Examples:
[12, 22, 7, 17] --> (12, 7)
[5, 25, 15, 11, 20] --> (15, 11)
[19, 25, 32, 4, 27, 16] --> (25, 27)

Data:
Input: list
Intermediate:
- integer: list elements, tuple elements, difference between elements
Output: tuple

Algorithm:
x Receive list argument: numbers
x Turn numbers list into a list of tuples: number_pairs
    x A number can only be paired if the difference is more than 0
x Set a variable to the first pair of number_pairs: lowest_pair
x Iterate over number_pairs, starting from the second pair:
    - If current pair has lower difference than difference of lowest_pair:
        - Set lower_pair to (num1, num2)

get_number_pairs(numbers):
x Iterate over numbers:
    x Iterate over numbers:
        x Subtract num2 from num1: difference
        x If difference > 0:
            x Add (num1, num2) tuple to resulting list
x Return resulting list
"""

def get_number_pairs(numbers):
    return [(num1, num2)
            for num1 in numbers
            for num2 in numbers
            if abs(num1 - num2) > 0]

def closest_numbers(numbers):
    numbers_pairs = get_number_pairs(numbers)
    lowest_pair = numbers_pairs[0]

    for idx in range(1, len(numbers_pairs)):
        current_pair = numbers_pairs[idx]

        if (abs(current_pair[0] - current_pair[1]) 
            < abs(lowest_pair[0] - lowest_pair[1])):
            lowest_pair = current_pair
    
    return lowest_pair

print(closest_numbers([5, 25, 15, 11, 20]) == (15, 11))
print(closest_numbers([19, 25, 32, 4, 27, 16]) == (25, 27))
print(closest_numbers([12, 22, 7, 17]) == (12, 7))