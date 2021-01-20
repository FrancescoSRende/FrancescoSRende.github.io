def convertToMeters(a,b):

    if (b == "m"):
        print(str(a) + " " + b)
    elif (b == "dm"):
        print(str(a / 10) + " m")
    elif (b == "cm"):
        print(str(a / 100) + " m")
    elif (b == "mm"):
        print(str(a / 1000) + " m")

convertToMeters(39485,'mm')