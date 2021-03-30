def sieve(n):
    A = [True] * (n-1)
    rangeVar = int((n ** (1/2)) // 1 + 1)
    
    for i in range(2, rangeVar, 1):
        if A[i - 2] == True:
            testVar = i ** 2
            while testVar <= n:
                A[testVar - 2] = False
                testVar = testVar + i
        
    for i in range(0, len(A), 1):
        if A[i] == True:
            print(i + 2)
    
    return

print(sieve(100))



# while True:
#     try:
#         num = int("Primes less than what: ")
#         break
#     except:
#         print("Please input an integer")

# numbers = []
# prime = []

# for i in range(0,num,1):
#     numbers.append(i)
#     prime.append("T")

# for i in range(2,int((num)**0.5)+1,1):
#     if prime[i - 2] == "T":
#         for j in range(i-2, len(numbers),i):




# def sieveEli(n):

#     primeList = [True for i in range(n+1)]

#     p = 2
#     while (p * p <= n):
#         if (primeList[p] == True):
#             for i in range(p*p, n+1, p):
#                 primeList[i] = False

#         p += 1

#     for p in range(2, n+1):
#         if primeList[p] == True:
#             print(p)

# print(sieveEli(100))