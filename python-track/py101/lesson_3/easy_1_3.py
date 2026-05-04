# Show two different ways to create a new string with "Four score and " 
# prepended to the front of the string referenced by famous_words.

four_score = "Four score and "
famous_words = "seven years ago..."

famous_quote = four_score + famous_words
print(famous_quote)

print(f"{four_score}{famous_words}")