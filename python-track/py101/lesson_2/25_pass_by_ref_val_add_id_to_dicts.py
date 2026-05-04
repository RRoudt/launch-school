# Write a function named add_id_to_dicts that takes a list of dictionaries 
# as an argument. The function should iterate through the list and add a 
# new key-value pair, 'id': index, to each dictionary in place, where index 
# is the dictionary's position in the list. 
# The function should not return anything.

def add_id_to_dicts(dict_list):
    for (index, dictionary) in enumerate(dict_list):
        dictionary['id'] = index
        

users = [{'name': 'Alice'}, {'name': 'Bob'}]
add_id_to_dicts(users)
print(users)
# Expected output: [{'name': 'Alice', 'id': 0}, {'name': 'Bob', 'id': 1}]