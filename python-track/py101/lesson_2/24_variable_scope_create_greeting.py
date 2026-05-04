# x Write a function called create_greeting that takes one argument, name. 
# x This function should use a global variable called greeting_word and 
#       combine it with the name parameter to return a full greeting string.
# x For example, if greeting_word is 'Hello', calling create_greeting('Alice')
#       should return the string 'Hello, Alice'.

greeting_word = "Hello, "

def create_greeting(name):
    return greeting_word + name

print(create_greeting('Alice'))