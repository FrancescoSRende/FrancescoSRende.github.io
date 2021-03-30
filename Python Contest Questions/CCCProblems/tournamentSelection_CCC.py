a = input()
b = input()
c = input()
d = input()
e = input()
f = input()

data = []

data.append(a)
data.append(b)
data.append(c)
data.append(d)
data.append(e)
data.append(f)

wins = 0

for i in range(0,6,1):
    if data[i] == 'W':
        wins = wins + 1

if wins >= 5:
    print(1)
elif wins == 3 or wins == 4:
    print(2)
elif wins == 1 or wins == 2:
    print(3)
else:
    print(-1)