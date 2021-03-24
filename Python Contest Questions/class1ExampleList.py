#Approach 1

def findSumListA(lst):

    sum = 0
    for i in range(0, len(lst), 1):
        if type(lst[i]) == int or type(lst[i]) == float:
            sum = sum + lst[i]
    
    return sum


#Approach 2

def findSumListB(lst):
    sum = 0
    for i in range(0, len(lst), 1):

        try:
            sum = sum + float(lst[i])
        except:
            # You can write whatever code you want here
            sum = sum

            pass
            # Pass functions as a null block of code, if you don't want the code to
            # do anything in the case of an 'except'.
            # May not always work properly

            # 'Break' does the same thing for a loop (ie. loop through lst until
            # you find an integer, then 'break' --> this exits that loop without
            # doing anything else)

    return sum

sampleList = [1, 2, "car", "3.9", 4.1]

print(findSumListA(sampleList))
print(findSumListB(sampleList))