limit = int(input())
speed = int(input())
diff = speed - limit
if diff <= 0:
    print("Congratulations, you are within the speed limit!")
elif 1<= diff <= 20:
    print("You are speeding and your fine is $100.")
elif 21<= diff <= 30:
    print("You are speeding and your fine is $270.")
else:
    print("You are speeding and your fine is $500.")