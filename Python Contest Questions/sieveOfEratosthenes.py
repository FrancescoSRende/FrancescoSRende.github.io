def sieve(n):
    A = [True] * (n-1)
    rangeVar = int((n ** (1/2)) // 1)
    print("range var = ", rangeVar)
    
    for i in range(2, rangeVar, 1):
        if A[i - 2] == True:
            testVar = i ** 2
            while testVar < n:
                A[testVar - 2] = False
                testVar = testVar + i
        
    for i in range(0, len(A), 1):
        if A[i] == True:
            print(i + 2)
    
    return

print(sieve(30))
