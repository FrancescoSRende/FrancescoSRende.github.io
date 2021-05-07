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



def sumFactors(n):
    factors = set()
    for i in range(1, int(n**(1/2))+1):
        if n % i == 0:
            factors.add(i)
            factors.add(n//i)

    
    return sum(factors) - n


def sumAmicableNumbersB(n):

    amicableSet = set()
    for i in range(1, n+1):
        numA = sumFactors(i)
        numB = sumFactors(numA)

        if numB == i and numA != numB:
            amicableSet.add(i)
            amicableSet.add(numB)

    return sum(amicableSet)