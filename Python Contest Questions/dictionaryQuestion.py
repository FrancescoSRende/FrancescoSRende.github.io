def printNumbers(dict):

    # for x in dict:
    #     print(dict[x])
    # # ^ Prints out all the values

    # for x in dict.values():
    #     print(x)
    # # ^ Prints out all the values


    # for x in dict:
    #     print(x)
    # # ^ Prints out all the key names

    # for x, y in dict.items():
    #     print(x, y)
    # # ^ Prints out all the key names and values
    
    lst = []
    for x in dict:
        if type(dict[x]) == int:
            lst.append(dict[x])
    

    sum = 0
    for i in range(len(lst)):
        sum = sum + lst[i]
    
    return sum

d = {'name': 'Jack', 'age': 1, 'num': 2, 'number': 3}

# print(d["name"])

print(printNumbers(d))



def dictionaryFunction(dict):

    newVar = input("What is your favourite number?\n")
    newVar = int(newVar)

    dict['favNum'] = newVar

    # for x in dict:
    #     if type(dict[x]) == str:
    #         print(dict.pop(x))
         
    for x in dict:
        if type(dict[x]) == int:
            if dict[x] % 2 == 0:
                print(str(dict[x]) + " is even.")
            else:
                print(str(dict[x]) + " is odd.")
    

d = {'name': 'Jack', 'age': 1, 'num': 2, 'number': 3}

# print(d["name"])

print(dictionaryFunction(d))