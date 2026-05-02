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

def prompt(message):
    print(f"==> {message}")

def invalid_number(input):
    try:
        number = float(input)
        if number <= 0:
            raise ValueError(f"Value must be > 0: {input}")
    except ValueError:
        return True
    
    return False


prompt("Welcome to Mortgage Calculator!")

while True:
    # Ask user for loan amount
    prompt("How much do you want to loan?")
    loan_amount_input = input()

    while invalid_number(loan_amount_input):
        prompt("That's not a valid number, please try again.")
        loan_amount_input = input()

    loan_amount = float(loan_amount_input)

    # Ask user for loan duration
    prompt("How long should the loan be (in years)?")
    loan_duration_years_input = input()

    while invalid_number(loan_duration_years_input):
        prompt("That's not a valid number, please try again.")
        loan_duration_years_input = input()

    loan_duration_years = float(loan_duration_years_input)

    # Ask user for yearly interest rate
    prompt("What is the yearly interest rate (APR)?")
    prompt(f"Example: 5 for 5% or 2.5 for 2.5%")
    yearly_interest_rate_input = input()

    while invalid_number(yearly_interest_rate_input):
        prompt("That's not a valid number, please try again.")
        yearly_interest_rate_input = input()

    yearly_interest_rate = float(yearly_interest_rate_input)
            
    # Calculate monthly interest rate and loan duration in months
    monthly_interest_rate = (yearly_interest_rate / 12) / 100
    loan_duration_months = loan_duration_years * 12

    # Calculate monthly payment
    monthly_payment = loan_amount * (monthly_interest_rate / (
        1 - (1 + monthly_interest_rate) ** (-loan_duration_months)
    ))

    # Show monthly payment amount
    prompt(f"Your monthly payment is: ${round(monthly_payment, 2)}")
    print("--------------------------------------")
    prompt("Do you want to do another calculation? (y/n)")
    continue_calculating = input().strip().lower()

    if continue_calculating == '':
        break
    if continue_calculating[0] != 'y':
        break
