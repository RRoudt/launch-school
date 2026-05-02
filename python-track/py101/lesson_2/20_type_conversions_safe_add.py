# Write a function safe_add(a, b) that attempts to convert both a and b to 
# floats and returns their sum.
# If either value cannot be converted to a float, 
# the function should return None instead of crashing.

def safe_add(a, b):
    try:
        return float(a) + float(b)
    except (TypeError, ValueError):
        return None

print(safe_add('1', '2.0')) # 3.0
print(safe_add('hi', 3.0))  # None