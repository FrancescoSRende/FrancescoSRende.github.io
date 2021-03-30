def calcBMI(weight, height):
    try:
        BMI = weight / (height * height)
        return BMI
    except:
        return "invalid input"



def BMIcheck(names, weights, heights):
    BMIlist = []
    total = 0
    indices = []

    if len(names) != len(weights) or len(weights) != len(heights):
        return

    for i in range(0, len(names), 1):
        currentBMI = calcBMI(weights[i], heights[i])
        BMIlist.append(currentBMI)
        total = total + currentBMI

    average = total / len(BMIlist)

    for i in range(0, len(BMIlist), 1):
        if BMIlist[i] > average:
            indices.append(i)
    
    for i in range(0, len(indices), 1):
        print(names[indices[i]])

names = ["Alex", "Bob", "Carl", "Dave"]
weights = [100, 104, 98.5, 167]
heights = [1.5, 2, 1.8, 1.76]

BMIcheck(names, weights, heights)