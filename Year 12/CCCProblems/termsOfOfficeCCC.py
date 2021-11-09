x = int(input("Enter the current year: "))
y = int(input("Enter a future year: "))
year = x
print("All positions change in year " + str(year))
year = year + 60
while year <= y:
    print("All positions change in year " + str(year))
    year = year + 60