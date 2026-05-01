# Modify the calculate_total_price function
# to handle None values by ignoring them.
# The function should still sum the valid prices and return the total.

def calculate_total_price(prices):
    total = 0
    for price in prices:
        if price is not None:
            total += price
    return total

# Data from an external source, sometimes an item is out of stock
item_prices = [10.50, 4.99, None, 12.75]

print(f"Total price: ${calculate_total_price(item_prices)}")