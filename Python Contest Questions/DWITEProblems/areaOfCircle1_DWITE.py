import math

def findArea():

    x1 = float(input())
    y1 = float(input())
    x2 = float(input())
    y2 = float(input())


    # contest strategy 1: just set up variable values and take inputs after
    # x1 = 2
    # y1 = 4
    # x2 = 4
    # y2 = 8

    # r = ( ( (y2-y1)**2) + ( (x2-x1)**2) ) ** (1/2)
    r = math.sqrt( ( (y2-y1)**2) + ( (x2-x1)**2) )

    a = 3.14159*r*r

    a = round(a,3)

    print(a)

# contest strategy 2: write the problem as a function
findArea()