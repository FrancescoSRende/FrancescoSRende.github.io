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
    
    # lst = []
    sum = 0
    for x in dict:
        if type(dict[x]) == int or type(dict[x]) == float:
            # lst.append(dict[x])
            sum = sum + dict[x]

    # if int(sum) == sum:
    #     return int(sum)

    if sum // 1 == sum:
        return int(sum)


    # for i in range(len(lst)):
    #     sum = sum + lst[i]
    
    return sum

d = {'name': 'Jack', 'age': 1, 'num': 2.0, 'number': 3}

# print(d["name"])

print(printNumbers(d))



def dictionaryFunction(dict):

    newVar = input("What is your favourite number?\n")
    newVar = int(newVar)

    dict['favNum'] = newVar


    # for x in dict:
    #     if type(dict[x]) == str:
    #         dict.pop(x)

    # When writing 'for x in dict', Python pre-establishes the size of the dictionary
    # As a result, popping a value changes the pre-established size of the dictionary
    # Which creates an error
    # This could potentially be accomplished by using a 'while' loop


    tKeys = []

    for x in dict:
        if type(dict[x]) == str:
            tKeys.append(x)

    for i in range(0, len(tKeys), 1):
        dict.pop(tKeys[i])


    # Python reads a line and instantly executes it
    # Java reads a section of code before executing it
         
    for x in dict:
        if type(dict[x]) == int:
            if dict[x] % 2 == 0:
                print(str(dict[x]) + " is even.")
            else:
                print(str(dict[x]) + " is odd.")

    return dict
    

d = {'name': 'Jack', 'age': 1, 'num': '2', 'number': 3}

# print(d["name"])

print(dictionaryFunction(d))