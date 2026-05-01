# How could you modify the access user_profile['username'] so that it provides
# a default value (like 'guest') if the key is missing,
# preventing the KeyError from ever happening?

def get_user_greeting(user_profile):
    name = user_profile.get('username') or 'guest'

    print(f"Hello, {name}!")


user = {'name': 'Bob', 'status': 'away'}
username = {'username': '', 'status': 'away'}
username_bob = {'username': 'Bob', 'status': 'away'}
get_user_greeting(user) # Hello, guest!
get_user_greeting(username) # Hello, guest!
get_user_greeting(username_bob) # Hello, Bob!