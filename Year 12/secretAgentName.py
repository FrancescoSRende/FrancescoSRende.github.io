firstName = input("Input your first name: \n")

lastName = input("Input your last name: \n")


x = len(firstName)

firstName2 = firstName[(x//2):] + firstName[(x//2) - 1] + firstName[0:(x//2)-1]

firstName2 = firstName2.lower()

firstChar1 = firstName2[0].upper()

firstName2 = firstChar1 + firstName2[1:]



lastName2 = ""

for i in range(0, len(lastName), 1):
    lastName2 = lastName[i] + lastName2

lastName2 = lastName2.lower()

firstChar2 = lastName2[0].upper()

lastName2 = firstChar2 + lastName2[1:]


print(firstName2, lastName2)