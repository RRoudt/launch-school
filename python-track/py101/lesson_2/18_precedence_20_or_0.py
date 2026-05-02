# Write a single if statement that checks if a variable num is either:
# An even number greater than 20, OR
# Exactly equal to 0.

num = 22
if (num % 2 == 0 and num > 20) or num == 0:
    print("Condition met!")
else:
    print("Condition NOT met")