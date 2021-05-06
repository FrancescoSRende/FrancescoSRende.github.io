def sumAmicableNumbers(a):
    nums = {}
    sumAmic = 0
    for i in range(1, a, 1):
        sumFactors = 0
        for j in range(1, (i+1)//2 + 1, 1):
            if i % j == 0:
                sumFactors = sumFactors + j
        nums.update({i: sumFactors})


    additionalList = []
    finishedList = []
    
    for x,y in nums.items():

        finishedList = finishedList.append(x)

        for m,n in nums.items():

            if y == n and x != m and m not in finishedList:
                sumAmic = sumAmic + m
                additionalList.append(x)
                nums.pop(m)
            
    for item in additionalList:
        sumAmic = sumAmic + item

    return sumAmic



print(sumAmicableNumbers(10))