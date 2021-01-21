def approach1():

    file = open("TALLEST.txt", "r")
    data = []

    # essentially "while.hasNext()"
    # this is a FOR EACH loop
    # "for each line in the file, do this"
    for lines in file:
        temp = lines.replace("\n","").split(" ")
        data.append(temp)

    print(data)

approach1()




def approach2():

    file = open("TALLEST.txt", "r")

    # this reads the first line ('12') and removes
    lines = int(file.readline())

    data = []

    for i in range(0, 12, 1):
        temp = file.readline().replace("\n","").split(" ")
        data.append(temp)

    print(data)

approach2()


def approach3():

    file = open("TALLEST.txt", "r")

    # this reads the first line ('12') and removes
    lines = int(file.readline())

    name = []
    height = []
    units = []

    for i in range(0, lines, 1):
        temp = file.readline().replace("\n","").split(" ")
        name.append(temp[0])
        height.append(temp[1])
        units.append(temp[2])

    print(name)
    print(height)
    print(units)

approach3()