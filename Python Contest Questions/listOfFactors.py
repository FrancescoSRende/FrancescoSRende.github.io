def listOfFactors(n):
    factors = []
    for i in range(1, int((n**(1/2)) // 1 + 1), 1):
        if n % i == 0:
            factors.append(i)
            factors.append(int(n/i))
    
    return factors

print(listOfFactors(474))