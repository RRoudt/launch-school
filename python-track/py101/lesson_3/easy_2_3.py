# Programmatically determine whether 42 lies between 10 and 100, inclusive.
# Do the same for the values 100 and 101.

def num_between_nums(num, start, end):
    num_range = range(start, end + 1)
    return num in num_range

print(num_between_nums(42, 10, 100))  # True
print(num_between_nums(100, 10, 100)) # True
print(num_between_nums(101, 10, 100)) # False