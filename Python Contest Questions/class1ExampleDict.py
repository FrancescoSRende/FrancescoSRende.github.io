#Approach 1
def findSumDictA(dict):

    sum = 0

    for key in dict:
        if type(dict[key]) == int or type(dict[key]) == float:
            sum = sum + dict[key]

    return sum






#Approach 2

def findSumDictB(dict):

    sum = 0

    for key in dict:
        try:
            sum = sum + dict[key]
        except:
            sum = sum
    
    return sum

d = {'name': 'Jack', 'age': 1, 'num': '2.0', 'number': 3}

print(findSumDictA(d))
print(findSumDictB(d))