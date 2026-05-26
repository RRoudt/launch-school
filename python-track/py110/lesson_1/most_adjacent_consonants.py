"""
Given a list of strings, sort the list based on the highest number of 
adjacent consonants a string contains and return the sorted list.
If two strings contain the same highest number of adjacent consonants,
they should retain their original order in relation to each other.
Consonants are considered adjacent if they are next to each other in the 
same word or if there is a space between two consonants in adjacent words.

Input: list with strings
Output: list with strings (sorted)

Explicit rules:
- Accept a list with string for elements
- Return a list
- Sort the list, with the string containing the most adjacent consonants first
- Ignore spaces while counting adjacent consonants
- If two strings have the same amount of adjacent consonants, keep their place

Implicit rules:
- Strings can contain multiple words (separated by a space)

Questions:
- 1. Should the input list be mutated?
- 2. What counts as a consonant?
- 3. Can lists be empty?
- 4. Can strings be empty?
- 5. Does case play a role?

"""

my_list = ['aa', 'baa', 'ccaa', 'dddaa']
print(sort_by_consonant_count(my_list))
# ['dddaa', 'ccaa', 'aa', 'baa']

my_list = ['can can', 'toucan', 'batman', 'salt pan']
print(sort_by_consonant_count(my_list))
# ['salt pan', 'can can', 'batman', 'toucan']

my_list = ['bar', 'car', 'far', 'jar']
print(sort_by_consonant_count(my_list))
# ['bar', 'car', 'far', 'jar']

my_list = ['day', 'week', 'month', 'year']
print(sort_by_consonant_count(my_list))
# ['month', 'day', 'week', 'year']

my_list = ['xxxa', 'xxxx', 'xxxb']
print(sort_by_consonant_count(my_list))
# ['xxxx', 'xxxb', 'xxxa']