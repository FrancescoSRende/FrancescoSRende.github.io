def namesScore():

    file = open("p022_names.txt", "r")

    for lines in file:
        names = lines.replace("\"","").split(",")

    # names = file.read()
    # names = names.replace('"',"")
    # names = names.split(",")
        names.sort()

    # letterValues = {
    #     'A': 1,
    #     'B': 2,
    #     'C': 3,
    #     'D': 4,
    #     'E': 5,
    #     'F': 6,
    #     'G': 7,
    #     'H': 8,
    #     'I': 9,
    #     'J': 10,
    #     'K': 11,
    #     'L': 12,
    #     'M': 13,
    #     'N': 14,
    #     'O': 15,
    #     'P': 16,
    #     'Q': 17,
    #     'R': 18,
    #     'S': 19,
    #     'T': 20,
    #     'U': 21,
    #     'V': 22,
    #     'W': 23,
    #     'X': 24,
    #     'Y': 25,
    #     'Z': 26
    # }

    letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    # names = sorted(names, key=str.lower)

    sumFinal = 0

    for i in range(0, len(names), 1):
        temp = names[i]
        tempSum = 0
        for x in temp:
            tempSum = tempSum + (letters.index(x) + 1)
        sumFinal = sumFinal + tempSum * (i + 1)


    return sumFinal



print(namesScore())