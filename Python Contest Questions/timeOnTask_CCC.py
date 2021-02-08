def time():
    timeLimit = int(input())
    numChores = int(input())

    chores = []
    temp = ""

    for i in range(0, numChores, 1):
        temp = int(input())
        chores.append(temp)

    chores.sort()

    total = 0
    i = 0

    while total < timeLimit:
        #print(total, i, timeLimit)
        total = total + chores[i]
        i = i + 1
        if total > timeLimit:
            print(str(i - 1))
            return
        elif total == timeLimit:
            print(str(i))
            return
        
    print(i)
    return
    

time()