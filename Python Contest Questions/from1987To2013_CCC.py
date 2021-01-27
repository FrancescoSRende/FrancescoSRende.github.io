def findYear():

    # I'm astounded and delightfully pleased that this worked

    y = input()

    testYear = int(y)
    digits = []

    while True:
    # while 1 == 1:

        testYear = str(int(testYear) + 1)
        digits = []
        for i in testYear:
            digits.append(i)

        contains_duplicates = any(digits.count(element) > 1 for element in digits)

        if contains_duplicates == False:
            print(testYear)
            return

findYear()