# Write a program that outputs The Flintstones Rock! 10 times, 
# with each line prefixed by one more hyphen than the line above it.
# The output should start out like this:
# -The Flintstones Rock!
# --The Flintstones Rock!
# ---The Flintstones Rock!

string = "The Flintstones Rock!"
for num in range(1, 11):
    print(f"{'-' * num}{string}")