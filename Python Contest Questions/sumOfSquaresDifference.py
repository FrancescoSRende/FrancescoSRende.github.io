def sumSquares(a):
    sum1 = 0
    sum2 = 0
    for i in range(1, a+1, 1):
        sum1 = sum1 + i ** 2
        sum2 = sum2 + i
    sum2 = sum2 ** 2
    return sum2 - sum1
print(sumSquares(1000))




def sumSquaresB(n):
    sum1 = (n*(n+1)*(2*n+1))//6
    sum2 = (n * (n+1) // 2) ** 2
    return sum2 - sum1
print(sumSquaresB(1000))