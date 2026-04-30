# Ask the user for the first number.
# Ask the user for the second number.
# Ask the user for an operation to perform.
# Perform the operation on the two numbers.
# Print the result to the terminal.

def prompt(message):
    print(f"==> {message}")

prompt('Welcome to Calculator!')

# Ask the user for the first number
while True:
    prompt("What's the first number?")
    number1 = input()
    try:
        number1 = int(number1)
        break
    except ValueError:
        prompt("That's not a valid number")
        continue

# Ask the user for the second number
while True:
    prompt("What's the second number?")
    number2 = input()
    try:
        number2 = int(number2)
        break
    except ValueError:
        prompt("That's not a valid number")
        continue

# Ask the user for the operation to perform
operation = ''
while operation not in ('1', '2', '3', '4'):
    prompt("""What operation would you like to perform?
    1) Add 2) Subtract 3) Multiply 4) Divide""")
    operation = input()

# Perform and print the operation on the two numbers
match operation:
    case '1':
        output = number1 + number2
    case '2':
        output = number1 - number2
    case '3':
        output = number1 * number2
    case '4':
        try:
            output = number1 / number2
        except ZeroDivisionError:
            prompt("You can't divide by 0. "
                   "Please choose another second number.")
            output = None

prompt(f"The result is: {output}")