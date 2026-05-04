# X Write a function called add_to_list that takes one argument, a list. 
# X The function should add the integer 42 to the end of that list. 
# X The function should not have a return statement.
# X Then, write the code to call this function with a list and print the list
#   to show that it has been changed.

def add_to_list(input_list):
    input_list.append(42)

my_list = ['Answer', 'to', 'Universe']
add_to_list(my_list)
print(my_list) # ['Answer', 'to', 'Universe', 42]