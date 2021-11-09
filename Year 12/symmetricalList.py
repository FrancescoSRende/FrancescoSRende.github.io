lst1 = []

x = int(input("Input length of first list: \n"))

for i in range(0, x, 1):
    lst1.append(input("Input a value: \n"))

symList = []
half = []

for i in range(0, x, 1):
    half.append("")

for i in range(0, x, 1):
    half[x - i - 1] = lst1[i]

symList = lst1 + half

print(symList)

newSym = lst1 + lst1[::-1]

print(newSym)