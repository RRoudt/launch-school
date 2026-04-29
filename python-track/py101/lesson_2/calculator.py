# Ask the user for the first number.
# Ask the user for the second number.
# Ask the user for an operation to perform.
# Perform the operation on the two numbers.
# Print the result to the terminal.

print('Welcome to Calculator!')

# Ask the user for the first number
while True:
    number1 = input("What's the first number?\n")
    try:
        number1 = int(number1)
        break
    except:
        print("That's not a valid number")
        continue

# Ask the user for the second number
while True:
    number2 = input("What's the second number?\n")
    try:
        number2 = int(number2)
        break
    except:
        print("That's not a valid number")
        continue

# Ask the user for the operation to perform
operation = ''
while operation not in ('1', '2', '3', '4'):
    operation = input('What operation would you like to perform?\n'
                  '1) Add 2) Subtract 3) Multiply 4) Divide\n')

# Perform and print the operation on the two numbers
match operation:
    case '1':
        output = number1 + number2
        print(f"{output}")
    case '2':
        output = number1 - number2
        print(f"{output}")
    case '3':
        output = number1 * number2
        print(f"{output}")
    case '4':
        try:
            output = number1 / number2
            print(f"{output}")
        except:
            print("You can't divide by 0. Please choose another second number.")
