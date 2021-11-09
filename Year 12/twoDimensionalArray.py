lst = [[1,2,3],[4,5,6],[7,8,9]]

print(lst[0])
print(lst[1][0])

# for r in range(0, len(lst), 1):
#     for c in range(0, len(lst[r]), 1):
#         print(lst[r][c])


# Populating a two-dimensional list

twoD = []

row = int(input("Rows: \n"))
col = int(input("Columns: \n"))

for r in range(0, row, 1):
    temp = []
    for c in range(0, col, 1):
        temp.append(input("Input a value: \n"))
    twoD.append(temp)

print(twoD)