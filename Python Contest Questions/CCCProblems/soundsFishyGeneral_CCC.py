num = int(input())

data = []

for i in range(0, num, 1):
    data.append(int(input))

posCheck = 0
negCheck = 0
sameCheck = 0

for i in range(1, len(data), 1):
    if data[i] - data[i-1] > 0:
        posCheck = posCheck + 1
    elif data[i] - data[i-1] < 0:
        negCheck = negCheck + 1
    elif data[i] - data[i-1] = 0:
        sameCheck = sameCheck + 1

if posCheck > 0 and negCheck == sameCheck == 0:
    print("Fish Rising")
elif negCheck > 0 and posCheck == sameCheck == 0:
    print("Fish Diving")
elif sameCheck > 0 and negCheck == posCheck == 0:
    print("Constant Depth")
else:
    print("No Fish")