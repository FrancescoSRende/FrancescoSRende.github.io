print("Dog Age Calculator")

# while (True):
#     try:
#         age = int(input("Please input your age: "))
#         break
#     except:
#         print("Please input an integer number.")

age = input("Please input your age: ")

ageDictionary = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
}

if age.isnumeric():
    age = float(age)

if type(age) == str:
    for x in ageDictionary:
        if age == x:
            age = ageDictionary[x]
            break

dogAge = age*7

print("You are",dogAge,"dog years old.")
# print("You are " + str(dogAge) + " dog years old.")

# The comma automatically inserts a space, and also automatically casts variables
# to strings



print("Cat Age Calculator")

while (True):

    age = input("What is your age: ")
    if age.isnumeric() == True:
    # if age.isnumeric():
        catAge = int(age) * 6
        break
    else:
        print("Please input an integer number.")
    
print("You are",catAge,"cat years old.")