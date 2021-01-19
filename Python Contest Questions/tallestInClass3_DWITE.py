import math
import numbers

def findTallest():

    data = [12, "Jim 1.45 m", "Sally 187 cm", "Joey 1064 mm", "Roel 15.23 dm",
    "Karl 134 cm", "Melanie 18.9 dm", "Jill 1.54 m", "Sam 133 cm", "Joel 1877 mm",
    "Roger 17.83 dm", "Karen 178 cm", "Marnie 17.9 dm"]

    heights = []

    for i in range(1,13):
        height = ""

        var = data[i]
        for n in range(0,len(var)):

            if var[n].isdigit() == True or var[n] == '.':
                height = height + var[n]
        
        heights.append(height)

    for i in range(1,13):
        var = data[i]

        if var[-3:-1] == " m":
            heights[i] = heights[i] * 1000
        elif var[-3:-1] == "dm":
            heights[i] = heights[i] * 100
        elif var[-3:-1] == "cm":
            heights[i] = heights[i] * 10

    
    print(heights)





findTallest()