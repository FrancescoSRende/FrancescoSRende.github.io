a = input()
b = input()
c = input()
d = input()

square = []
square.append(a)
square.append(b)
square.append(c)
square.append(d)

rowSum1 = 0
rowSum2 = 0
rowSum3 = 0
rowSum4 = 0

columnSum1 = 0
columnSum2 = 0
columnSum3 = 0
columnSum4 = 0

for i in range(0, 4, 1):
    rowSum1 = rowSum1 + int(a[i])
    rowSum2 = rowSum2 + int(b[i])
    rowSum3 = rowSum3 + int(c[i])
    rowSum4 = rowSum4 + int(d[i])
    columnSum1 = columnSum1 + int(square[0][i])
    columnSum2 = columnSum2 + int(square[1][i])
    columnSum3 = columnSum3 + int(square[2][i])
    columnSum4 = columnSum4 + int(square[3][i])

sums = []
sums.append(rowSum1)
sums.append(rowSum2)
sums.append(rowSum3)
sums.append(rowSum4)

sums.append(columnSum1)
sums.append(columnSum2)
sums.append(columnSum3)
sums.append(columnSum4)

contains_duplicates = any(sums.count(element) > 1 for element in sums)

if contains_duplicates == False:
    print("not magic")
else:
    print("magic")