"""
PROBLEM:

Given a string, write a function `palindrome_substrings`
    which returns all the palindromic substrings of the input string
    that are 2 or more characters long.
Palindrome detection should be case-sensitive.

Input: string
Output: list of substrings
Rules:
    Explicit:
    - Accept one string as input
    - Palindromes are case-sensitive (Aba is not a palindrome, AbA is)
    - Substrings are 2 characters or more

    Implicit:
    - A palindrome is a substring that reads the same backwards as forwards
    - Return a list, with each element a substring that's a palindrome
    - An empty input string returns an empty list

Algorithm:
    Main program:
    x Get a string: input_string
    x Set an empty list: result
    x Create a list with all substrings of 2 characters or more of input string:
        substring_list
    x Loop through substring_list:
        x If current substring is a palindrome:
            x Add substring to result list
    x Return result list

    Get substrings:
    x Get a string: input_string
    x Create an empty list: result
    x Set a variable to 0 for the first character of substring: start_index
    x Iterate over input_string from start_index until len(input_string) - 1:
        x Set variable to 2 for initial substring length: num_chars
        x Iterate over input_string from num_chars
        until len(input_string) - start_index:
            x Get substring of input_string from start_index until num_chars
            x Append substring to result
            x Increment num_chars by 1
        x Increment start_index by 1
    x Return result list

    Check if is palindrome:
    x Get a string: input_string
    x Create a reversed version of input_string: reversed_input_string
    x Return input_string == reversed_input_string
"""

def get_substrings(input_string):
    result = []
    start_index = 0

    while start_index <= len(input_string) - 2:
        num_chars = 2
        
        while num_chars <= len(input_string) - start_index:
            substring = input_string[start_index:start_index + num_chars]
            result.append(substring)
            num_chars += 1

        start_index += 1

    return result

def is_palindrome(input_string):
    reversed_input_string = input_string[::-1]
    return input_string == reversed_input_string


def palindrome_substrings(input_string):
    result = []
    substring_list = get_substrings(input_string)

    for substring in substring_list:
        if is_palindrome(substring):
            result.append(substring)

    return result

# Test cases:
# Comments show expected return values
print(palindrome_substrings("abcddcbA"))   # ["bcddcb", "cddc", "dd"]
print(palindrome_substrings("palindrome")) # []
print(palindrome_substrings(""))           # []
print(palindrome_substrings("repaper"))    # ['repaper', 'epape', 'pap']
print(palindrome_substrings("supercalifragilisticexpialidocious")) # ["ili"]