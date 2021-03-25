def isPrime(n):
    for i in range(2, n // 2 + 1, 1):
        if n % i == 0:
            return "not prime"
    
    return "prime"



def primesLessThan(k):
    primes = []
    for n in range(2, k, 1):
        check = 0
        for i in range(2, n // 2 + 1, 1):
            if n % i == 0:
                check = check + 1
    
        if check == 0:
            primes.append(n)

    return primes


print(isPrime(36))
print(isPrime(37))
print(primesLessThan(36))
print(primesLessThan(25))