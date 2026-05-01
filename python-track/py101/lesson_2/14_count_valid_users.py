# Write a function named count_valid_users that takes a list of dictionaries.
# Each dictionary represents a user and might have a 'name' key.
# The function should count how many users have a name (not an empty string).

def count_valid_users(users):
    count = 0
    for dct in users:
        name = dct.get('name')
        if (name != '') and (name is not None):
            count += 1
    return count

users = [
    {'name': 'Alice'},
    {'name': ''},
    {},
    {'name': 'Bob'}
]

print(count_valid_users(users)) # should return 2

def process_data(data_list):
    processed = []
    for item in data_list:
        if item > 10:
            processed.append('high')
        else:
            processed.append('low')
    return processed

values = [5, 15, 20, 8]
result = process_data(values)
print(result)