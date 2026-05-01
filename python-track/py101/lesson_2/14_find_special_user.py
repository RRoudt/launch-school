# The programmer intended for this function to find and return the name of 
# the first special user.
# What name does it actually return,
# and how would you fix it to meet the original intent?

def find_special_user(users):
    special_user_name = "Not found"
    for user in users:
        if user['is_special']:
            special_user_name = user['name']
            break
    return special_user_name

user_list = [
    {'name': 'Alice', 'is_special': False},
    {'name': 'Bob', 'is_special': True},
    {'name': 'Charlie', 'is_special': True}
]

print(find_special_user(user_list))