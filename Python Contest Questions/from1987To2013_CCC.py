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

# -------------------------------------------------------- #

# def findYear2():

#     y = input()

#     distinct = False
    
#     while True:

#         nums = [0,0,0,0,0,0,0,0,0,0]
        
#         y = int(y)
#         while (y != 0):
#             i = y%10
#             nums[i] = nums[i] + 1
#             y = y//10
        
#         for i in range(0,len(nums),1):
#             if (nums[i] > 1):
#                 distinct = False
            
#         if distinct == True:
#             print("distinct")
#             return
#         else:
#             y = str(int(y) + 1)
            

findYear()
# findYear2()