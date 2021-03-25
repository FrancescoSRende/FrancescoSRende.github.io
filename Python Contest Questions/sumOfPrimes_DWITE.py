def sumOfPrimes(k):
    primes = []
    for n in range(2, k, 1):
        check = 0
        for i in range(2, n // 2 + 1, 1):
            if n % i == 0:
                check = check + 1
    
        if check == 0:
            primes.append(n)

    sum = 0
    for i in range(0, len(primes), 1):
        sum = sum + primes[i]
    
    return sum


print(sumOfPrimes(10))
print(sumOfPrimes(1000))