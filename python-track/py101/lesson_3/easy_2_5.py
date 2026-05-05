# Back in the stone age (before CSS), we used spaces to align things on the screen.
# If we have a 40-character wide table of Flintstone family members,
# how can we center the following title above the table with spaces?

table_length = 40
title = "Flintstone Family Members"
print('*' * table_length)

# Manual solution
title_length = len(title)
padding_total = table_length - title_length
padding_side = padding_total // 2
print(f'{' ' * padding_side}{title}')

# Built-in solution
print(title.center(table_length))