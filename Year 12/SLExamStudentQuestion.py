SID = ['1020', '3948', '6893', '2999', '4567', '1111', '9044', '1728', '2048']
sNames = ['Alex', 'Mark', 'Fred', 'Yoko', 'Chuck', 'Jane', 'Mike', 'Thomas', 'Jacob']
tennis = ['1020', '2999', '1111', '2048']
football = ['1020', '6893', '4567']
basketball = ['1020', '2999', '1111', '9044', '1728']

def isIn(x, col):
    for i in range(0, len(col), 1):
        if col[i] == x:
            return True
    return False

print(isIn('1020', basketball))
print(isIn('3948', football))

sum = 0
for i in range(0, len(SID), 1):
    if isIn(SID[i], tennis) == True and isIn(SID[i], football) == True:
        sum += 1
print(sum)

check = False
lst = []
for i in range(0, len(SID), 1):
    if isIn(SID[i], tennis) == False and isIn(SID[i], football) == False and isIn(SID[i], basketball) == False:
        lst.append(sNames[i])
if len(lst) == 0:
    print("All students have chosen a sport")
else:
    print(lst)