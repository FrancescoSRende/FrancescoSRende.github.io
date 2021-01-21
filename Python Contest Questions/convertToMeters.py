def convertToMeters(a,b):

    if (a < 0):
        return -1
    if (b == "m"):
        return a
    elif (b == "dm"):
        return a/10
    elif (b == "cm"):
        return a/100
    elif (b == "mm"):
        return a/1000
    return -1

print(convertToMeters(2,'mm'))



# *args allows us to take in more than the three passed parameters while allowing the
# function to run normally

def convertBetweenUnits(val, u1, u2, *args):

    factor = ["mm", "cm", "dm", "m", "dam", "hm", "km"]

    try:
        v1 = factor.index(u1)
        v2 = factor.index(u2)
    except:
        # return -1
        return "error"

    conv = v2 - v1

    return val/(10**conv)

try:
    print(convertBetweenUnits(10, 'hm', 'dm'))
except:
    print('ERROR')