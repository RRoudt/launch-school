"""
Create a function that takes a string argument and returns a copy of the string
with every second character in every third word converted to uppercase.
Other characters should remain the same.

Input: string
Output: string

Rules:
- Accept a string as argument
- Return a string
- In the returning string, every second character of every third word must
  be uppercased
- All other characters should remain as-is
- If less than three words are in the input, nothing happens
- If the third word has less than 2 characters, nothing happens
- If the string has more than 3 words, subsequent 3rd words are also changed

Examples:
aaA bB c --> aaA bB c
Lorem Ipsum is simply dummy text of the printing world
                        v
'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'

Data:
Input: string
Intermediate:
- integer: to keep track of word number
- string: words and characters
- list: to keep track of individual words
Output: string

Algorithm:
x Receive string argument: input_string
x Turn input_string into list: input_words
x Set empty list: output_words
x Set integer variable to 1: word_counter
x Iterate over input_words list:
    x Set empty string variable: new_word
    x If current word is 3rd in the string:
        x Iterate over current word:
            x If current character has an uneven index:
                x Add uppercase version of character to new_word
            x Else: add character as-is to new_word
    x Else: set new_word to current word
    x Add new_word to output_words
    x Increment word_counter by 1
x Return output_words as a string
"""

def to_weird_case(input_string):
    input_words = input_string.split()
    output_words = []
    word_counter = 1

    for word in input_words:
        new_word = ''

        if word_counter % 3 == 0:
            for idx, char in enumerate(word):
                if idx % 2 == 1:
                    new_word += char.upper()
                else:
                    new_word += char
        else:
            new_word = word
        
        output_words.append(new_word)
        word_counter += 1


    return ' '.join(output_words)

original = 'Lorem Ipsum is simply dummy text of the printing world'
expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world'
print(to_weird_case(original) == expected)

original = 'It is a long established fact that a reader will be distracted'
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
print(to_weird_case(original) == expected)

print(to_weird_case('aaA bB c') == 'aaA bB c')

original = "Mary Poppins' favorite word is supercalifragilisticexpialidocious"
expected = "Mary Poppins' fAvOrItE word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
print(to_weird_case(original) == expected)