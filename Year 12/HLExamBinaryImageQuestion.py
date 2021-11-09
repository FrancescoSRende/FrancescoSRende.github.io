image = []

dim = int(input("Rows and columns: \n"))

for r in range(0, dim, 1):
    temp = []
    for c in range(0, dim, 1):
        val = input("Input a value (0 or 1): \n")
        while val != '0' and val != '1':
            val = input("Please input a value (0 or 1): \n")
        temp.append(val)
    image.append(temp)

print(image)

for i in range(0, dim, 1):
    for j in range(0, dim, 1):
        if image[i][j] == '1':
            image[i][j] = '0'
        else:
            image[i][j] = '1'

print(image)