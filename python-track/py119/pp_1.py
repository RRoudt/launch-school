"""
Create a function that takes a list of numbers as an argument.
For each number, determine how many numbers in the list are smaller than it,
and place the answer in a list.
Return the resulting list.

When counting numbers, only count unique values. That is, if a number occurs
multiple times in the list, it should only be counted once.

Input: list of numbers

Explicit rules:
- Accept a list with numbers as input
- Input list only contains numbers
- Output a list with numbers
- The numbers in the output list represent the number of elements from
  the input list that were less than the current element
    - If a numbers occurs multiple times, count it only once

Implicit rules:
- Numbers are integers
- If no numbers are lower, a 0 should be added to the output list

Examples:
[1] --> [0]
[7, 7, 7] --> [0, 0, 0]
[8, 1, 2, 2, 3] --> [3, 0, 1, 1, 2]

Data:
Input: list with integers
Intemediate:
- list: to keep track of numbers
- integers: elements of input and output lists
- set: to get unique numbers
Output: list with integers

Algorithm:
- 1. Receive list argument: numbers
- 2. Create set out of numbers list: unique_numbers
- 3. Set empty list variable: lower_counts
- 4. Iterate over numbers list:
    - Set variable to 0: count
    - Iterate over unique_numbers set:
        - If unique_num is less than num:
            - Increment count by 1
    - Append count to lower_counts
- 5. Return lower_counts list
"""

def smaller_numbers_than_current(numbers):
    unique_numbers = set(numbers)
    lower_counts = []

    for num in numbers:
        count = 0
        
        for unique_num in unique_numbers:
            if unique_num < num:
                count += 1

        lower_counts.append(count)

    return lower_counts

print(smaller_numbers_than_current([8, 1, 2, 2, 3]) == [3, 0, 1, 1, 2])
print(smaller_numbers_than_current([7, 7, 7, 7]) == [0, 0, 0, 0])
print(smaller_numbers_than_current([6, 5, 4, 8]) == [2, 1, 0, 3])
print(smaller_numbers_than_current([1]) == [0])

my_list = [1, 4, 6, 8, 13, 2, 4, 5, 4]
result   = [0, 2, 4, 5, 6, 1, 2, 3, 2]
print(smaller_numbers_than_current(my_list) == result)