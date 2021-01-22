a = input()
b = input()
c = input()
d = input()

line1 = []
line2 = []
line3 = []
line4 = []

while True:
    try:
        loc = a.index("")
        line1.append(a[0:loc])
        a = a[loc+1:]
    except:
        # this gets evaluated when the program crashes
        line1.append(a)
        break

while True:
    try:
        loc = b.index("")
        line2.append(b[0:loc])
        b = b[loc+1:]
    except:
        # this gets evaluated when the program crashes
        line2.append(b)
        break

while True:
    try:
        loc = c.index("")
        line3.append(c[0:loc])
        c = c[loc+1:]
    except:
        # this gets evaluated when the program crashes
        line3.append(c)
        break

while True:
    try:
        loc = d.index("")
        line4.append(d[0:loc])
        d = d[loc+1:]
    except:
        # this gets evaluated when the program crashes
        line4.append(d)
        break

lineSum1 = 0
lineSum2 = 0
lineSum3 = 0
lineSum4 = 0
columnSum1 = 0
columnSum2 = 0
columnSum3 = 0
columnSum4 = 0
    
for i in range(0,4,1):
    lineSum1 = lineSum1 + line1[i]

for i in range(0,4,1):
    lineSum2 = lineSum2 + line2[i]

for i in range(0,4,1):
    lineSum3 = lineSum3 + line3[i]

for i in range(0,4,1):
    lineSum4 = lineSum4 + line4[i]

columnSum1 = line1[1] + line2[1] + line3[1] + line4[1]
columnSum2 = line1[2] + line2[2] + line3[2] + line4[2]
columnSum3 = line1[3] + line2[3] + line3[3] + line4[3]
columnSum4 = line1[4] + line2[4] + line3[4] + line4[4]

if lineSum1 == lineSum2 and lineSum2 == lineSum3 and lineSum3 == lineSum4 and lineSum4 == columnSum1 and columnSum1 == columnSum2 and columnSum2 == columnSum3 and columnSum3 == columnSum4:
    print("magic")
else:
    print("not magic")