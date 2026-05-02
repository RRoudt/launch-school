# Ask the user for the first number.
# Ask the user for the second number.
# Ask the user for an operation to perform.
# Perform the operation on the two numbers.
# Print the result to the terminal.
# Ask the user if they wanted to perform another calculation
#   If they respond with yes: start a new calculation
# Use the JSON format to store messages in a file

import json
with open('calculator_messages.json', 'r') as file:
    M = json.load(file)

def prompt(message):
    print(f"==> {message}")

prompt(M['welcome'])

# While the user wants to keep calculating
while True:
    # Ask the user for the first number
    while True:
        prompt(M['prompt_number1'])
        number1 = input()
        try:
            number1 = int(number1)
            break
        except ValueError:
            prompt(M['not_valid_number'])
            continue

    # Ask the user for the second number
    while True:
        prompt(M['prompt_number2'])
        number2 = input()
        try:
            number2 = int(number2)
            break
        except ValueError:
            prompt(M['not_valid_number'])
            continue

    # Ask the user for the operation to perform
    operation = ''
    while operation not in ('1', '2', '3', '4'):
        prompt(M['what_operation_prompt'])
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
                prompt(M['zero_division_error'])
                output = None

    prompt(f"{M['result']} {output}")

    # Ask the user to do another calculation
    prompt(M['another_calculation'])

    continue_calculation = input()
    if continue_calculation == '':
        break
    if continue_calculation[0] != 'y':
        break