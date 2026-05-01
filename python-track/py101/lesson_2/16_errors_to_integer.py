# Write a function named to_integer that takes one argument, a string s.
# Inside the function, try to convert s to an integer.
# If the conversion is successful, return the integer.
# If the conversion fails because the string is not a valid integer
# (like "abc"), catch the specific exception and return None.

def to_integer(s):
    try:
        return int(s)
    except ValueError:
        return None

print(to_integer("123")) # 123
print(to_integer("abc")) # None