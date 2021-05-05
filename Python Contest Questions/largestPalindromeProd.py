def productsADigitNums(a):
    products = []
    for i in range((10**a)-1, 10**(a-1), -1):
        for j in range((10**a)-1, i, -1):
            products.append(i*j)
    products.sort()

    return products



def palindromeCheck(a):
    a = str(a)
    for i in range(0, len(a)//2, 1):
        if a[i] != a[len(a)-1-i]:
            return False
    return True

x = productsADigitNums(2)
for i in range(len(x)-1, -1, -1):
    if palindromeCheck(x[i]) == True:
        print(x[i])
        break


def largestPalindromeProdB(a):


    half = int("9"*a)**2
    print(half)
    # for i in range(int("9"*a)**2, 0, -1)

print(largestPalindromeProdB(3))