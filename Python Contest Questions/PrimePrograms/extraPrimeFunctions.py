def isSemiPrime(n):
    check = 0
    for i in range(2, n // 2 + 1, 1):
        if n % i == 0:
            check = check + 1
    
    if check == 2:
        return True
    return False


print(isSemiPrime(1829))




def isSuperPrime(n):

    for i in range(2, n // 2 + 1, 1):
        if n % i == 0:
            return "not super prime, not even prime"

    primes = []
    for j in range(2, n+1, 1):
        check = 0
        for i in range(2, j // 2 + 1, 1):
            if j % i == 0:
                check = check + 1
    
        if check == 0:
            primes.append(j)

    nIndex = primes.index(n) + 1

    if nIndex in primes:
        return True
    
    return False


print(isSuperPrime(16))
print(isSuperPrime(2))
print(isSuperPrime(3))
print(isSuperPrime(5))
print(isSuperPrime(7))



def primeFactors(n):

    primes = []
    for k in range(2, n + 1, 1):
        check = 0
        for i in range(2, k // 2 + 1, 1):
            if k % i == 0:
                check = check + 1
    
        if check == 0:
            primes.append(k)

    primeFactors = []

    for i in range(0, len(primes), 1):
        if n % primes[i] == 0:
            primeFactors.append(primes[i])
    
    return primeFactors

print(primeFactors(3))
print(primeFactors(4))
print(primeFactors(11))
print(primeFactors(60))






def primeFactorization(n):

    primes = []
    for k in range(2, n + 1, 1):
        check = 0
        for i in range(2, k // 2 + 1, 1):
            if k % i == 0:
                check = check + 1
    
        if check == 0:
            primes.append(k)

    primeFactors = []

    for i in range(0, len(primes), 1):
        test = n
        while test % primes[i] == 0:
            primeFactors.append(primes[i])
            test = test / primes[i]
    
    return primeFactors

print(primeFactorization(3))
print(primeFactorization(4))
print(primeFactorization(11))
print(primeFactorization(60))