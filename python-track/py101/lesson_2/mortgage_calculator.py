# Build a mortgage calculator that determines the monthly payment,
# assuming that interest is compounded monthly.

# Inputs:
# X Loan amount
# X Loan duration in years
# X Yearly interest rate

# Calculate:
# X Monthly interest rate (APR / 12)
# X Loan duration in months

# Output:
# X Print monthly payment amount as dollars and cents
#   (e.g., $123.45 or $371.00.)

# Questions:
# X The input loan duration is in years?
#   X Let's assume, YES
# X What input is accepted?
#   X Loan amount: float (10000.5)
#   X Loan duration in years: float (2.5)
#   X APR: float (5.5)

# Formula:
# Monthly payment = loan amount * (month interest rate /
#   (1 - (1 + monthly interest rate) ** (-loan duration in months)))

import os

def prompt(message):
    print(f"==> {message}")

def invalid_number(value):
    try:
        number = float(value)
    except ValueError:
        return True

    if number <= 0:
        return True

    return False

def prompt_loan_amount():
    prompt("How much do you want to loan?")
    loan_amount_input = input()

    while invalid_number(loan_amount_input):
        prompt("That's not a valid number, please try again.")
        loan_amount_input = input()

    return float(loan_amount_input)


def prompt_loan_duration():
    prompt("How long should the loan be (in years)?")
    loan_duration_years_input = input()

    while invalid_number(loan_duration_years_input):
        prompt("That's not a valid number, please try again.")
        loan_duration_years_input = input()

    return float(loan_duration_years_input)

def prompt_yearly_interest_rate():
    prompt("What is the yearly interest rate (APR)?")
    prompt("Example: 5 for 5% or 2.5 for 2.5%")
    yearly_interest_rate_input = input()

    while invalid_number(yearly_interest_rate_input):
        prompt("That's not a valid number, please try again.")
        yearly_interest_rate_input = input()

    return float(yearly_interest_rate_input)

def invalid_choice(value):
    try:
        choice = value.strip().lower()[0]
        if choice not in ('y', 'n'):
            return True
    except IndexError:
        return True

    return False

def display_loan_summary(loan_amount_input, loan_duration_years_input,
                         yearly_interest_rate_input, monthly_payment_input):
    prompt(f"You want to loan: {loan_amount_input}")
    prompt(f"Loan duration in years: {loan_duration_years_input}")
    prompt(f"Annual Percentage Rate (APR): {yearly_interest_rate_input}")
    prompt(f"Your monthly payment will be: ${monthly_payment_input:.2f}")

prompt("Welcome to Mortgage Calculator!")

while True:
    # Prompt user for inputs
    loan_amount = prompt_loan_amount()
    loan_duration_years = prompt_loan_duration()
    yearly_interest_rate = prompt_yearly_interest_rate()

    # Calculate monthly interest rate and loan duration in months
    monthly_interest_rate = (yearly_interest_rate / 12) / 100
    loan_duration_months = loan_duration_years * 12

    # Calculate monthly payment
    monthly_payment = loan_amount * (monthly_interest_rate / (
        1 - (1 + monthly_interest_rate) ** (-loan_duration_months)
    ))

    # Show monthly payment amount
    display_loan_summary(loan_amount, loan_duration_years,
                         yearly_interest_rate, monthly_payment)
    print("------------------------------------------")
    prompt("Do you want to do another calculation? (y/n)")
    continue_choice = input()

    while invalid_choice(continue_choice):
        prompt("That's not a valid option. Please choose [y]es or [n]o")
        continue_choice = input()

    if continue_choice[0] == 'y':
        os.system('clear')
        continue

    prompt("Thank you for using calculator.")
    break