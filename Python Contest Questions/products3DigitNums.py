def products3DigitNums():
    products = []
    for i in range(100, 1000, 1):
        for j in range(i, 1000, 1):
            products.append(i * j)
    return products

# print(products3DigitNums())


def products2DigitNums():
    products = []
    for i in range(10, 100, 1):
        for j in range(i, 100, 1):
            products.append(i * j)
    return products

# print(products2DigitNums())



def products1DigitNums():
    products = []
    for i in range(1, 10, 1):
        for j in range(i, 10, 1):
            products.append(i * j)
    # for item in products:
    #     print(item)
    return products

print(products1DigitNums())