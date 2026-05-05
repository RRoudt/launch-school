# Write two different ways to remove all of the elements from the following list:

numbers1 = [1, 2, 3, 4]
numbers2 = [1, 2, 3, 4]
numbers3 = [1, 2, 3, 4]

for _ in range(len(numbers1)):
    numbers1.pop()

while numbers2:
    numbers2.pop()

numbers3.clear()

print(numbers1) # []
print(numbers2) # []
print(numbers3) # []