def findThree():

    file = open("May2019SL_10.txt", "r")
    Three = []

    for lines in file:
        tempList = lines.replace("\n","").split(" ")
        temp = tempList[0]
        if len(temp) == 3:
            temp = int(temp)
            hun = temp // 100
            ten = (temp % 100) // 10
            one = temp % 10
            if hun < ten and ten < one:
                Three.append(temp)
    
    return Three



#Step 1: read file collection and populate Three
#Step 2: return Three

result = findThree()
print(result)
#print(findThree())




def findThreeMiskew():

    file = open("May2019SL_10.txt", "r")
    Three = []

    for line in file:
        temp = line.replace("\n","")
        temp = int(temp)
        if temp > 99 and temp < 1000:
            f = temp // 100
            s = (temp % 100) // 10
            t = temp % 10
            if f < s < t:
                Three.append(temp)
    
    return Three


result = findThreeMiskew()
print(result)