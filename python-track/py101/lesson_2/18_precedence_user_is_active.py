user_is_active = False
is_admin = True
has_permission = True

if user_is_active or (is_admin and has_permission):
    print("Condition met")
else:
    print("Condition not met")