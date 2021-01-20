def convertToMeters(a,b):

    if (b == "m"):
        print(str(a))
    elif (b == "dm"):
        print(str(a / 10))
    elif (b == "cm"):
        print(str(a / 100))
    elif (b == "mm"):
        print(str(a / 1000))

convertToMeters(39485,'mm')