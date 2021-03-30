import math
import numbers












def approach0():


    data = ["Jim 1.45 m",
            "Sally 187 cm",
            "Joey 1064 mm",
            "Roel 15.23 dm",
            "Karl 134 cm",
            "Melanie 18.9 dm",
            "Jill 1.54 m",
            "Sam 133 cm",
            "Joel 1877 mm",
            "Roger 17.83 dm",
            "Karen 178 cm",
            "Marnie 17.9 dm"]

    name = []
    height = []
    units = []

    # using 'split', the list 'temp' is created to store the 3 components from each line of info

    for i in range(0, len(data), 1):
        temp = data[i].split(" ")
        name.append(temp[0])
        height.append(temp[1])
        units.append(temp[2])







def convertToMeters (units, height):
    allInMeters = []
    for k in range(0,len(units),1):
        if units[k] == "m":
            allInMeters.append(float(height[k]))
        elif units[k] == "dm":
            allInMeters.append(float(height[k]) / 10)
        elif units[k] == "cm":
            allInMeters.append(float(height[k]) / 100)
        elif units[k] == "mm":
            allInMeters.append(float(height[k]) / 1000)
        return allInMeters


















def approach1():

    '''
Recommendation:
This problem can be daunting, however, if you break it apart to some components and tackle those
it falls apart nicely. 
1. 	Start by managing the input. Assuming you store the data as a list of strings, create three 
	new lists and copy in the data.  The first two elements in this parallel list structure look
	as follows
				name = ["Jim","Sally",. . .]
				height = [1.45, 187, . . . ]
				units = ["m", "cm", . . .]
	HL - You could copy it into a 2D list 
	data2D = [	["Jim","Sally",. . .],
				[1.45, 187, . . . ],
				["m", "cm", . . .],
			]
]
2. 	Start off by simplifying the problem by assuming
		a) All measurements are in the same unit
		b) You only want to find the single tallest. 
2.  Create a function that coverts any unit to meters.  What it converts it to doesn't matter, but
	this allows you to send any meansurment through it and get a standard measurement that can be 
	compared. 
'''

    data = ["Jim 1.45 m",
            "Sally 187 cm",
            "Joey 1064 mm",
            "Roel 15.23 dm",
            "Karl 134 cm",
            "Melanie 18.9 dm",
            "Jill 1.54 m",
            "Sam 133 cm",
            "Joel 1877 mm",
            "Roger 17.83 dm",
            "Karen 178 cm",
            "Marnie 17.9 dm"]

    name = []
    height = []
    units = []

    for i in range(0,len(data),1):

        # index returns the first instance of a passed string

        loc = data[i].index(' ')
        n = data[i][0:loc]
        name.append(n)

# looks similar but index now takes 2 parameters
# index is an OVERLOADED method, meaning it is defined by the number of parameters it takes
# this version of index looks for ' ', but STARTING at index loc + 1

        loc1 = data[i].index(' ',loc+1)
        
        h = data[i][loc + 1:loc1]
        height.append(float(h))

        u = data[i][loc1+1:]
        units.append(u)


    allInMeters = convertToMeters(units, height)

    for i in range(0,len(units),1):

        if units[i] == "m":
            height[i] = round(height[i] * 1000)
        elif units[i] == "dm":
            height[i] = round(height[i] * 100)
        elif units[i] == "cm":
            height[i] = round(height[i] * 10)

    


    max1 = height[0]
    index1 = 0

    max2 = height[0]
    index2 = 0

    max3 = height[0]
    index3 = 0

    max4 = height[0]
    index4 = 0

    max5 = height[0]
    index5 = 0


    indexes = []

    for i in range(0,len(height),1):
        if height[i] > max1:
            max1 = height[i]
            index1 = i
    
    indexes.append(index1)





    for i in range(0,len(height),1):
        if height[i] > max2 and i != index1:
            max2 = height[i]
            index2 = i
    
    indexes.append(index2)




    
    for i in range(0,len(height),1):
        if height[i] > max3 and i != index1 and i != index2:
            max3 = height[i]
            index3 = i
        
    indexes.append(index3)
    




    for i in range(0,len(height),1):
        if height[i] > max4 and i != index1 and i != index2 and i != index3:
            max4 = height[i]
            index4 = i
    
    indexes.append(index4)
    


    for i in range(0,len(height),1):
        if height[i] > max5 and i != index1 and i != index2 and i != index3 and i != index4:
            max5 = height[i]
            index5 = i
    
    indexes.append(index5)


    

    for i in range(0,len(indexes),1):
        print(name[indexes[i]])

    


















def approach2():


    data = ["Jim 1.45 m",
            "Sally 187 cm",
            "Joey 1064 mm",
            "Roel 15.23 dm",
            "Karl 134 cm",
            "Melanie 18.9 dm",
            "Jill 1.54 m",
            "Sam 133 cm",
            "Joel 1877 mm",
            "Roger 17.83 dm",
            "Karen 178 cm",
            "Marnie 17.9 dm"]

    data1 = []

    for i in range(0,len(data),1):
        val = data[i]


        # this creates an infinite loop
        # however, we avoid the infinite loop by crashing the program and using an 'except' line
        while True:


    # val = "Jim 1.45 m"
    # loc = 3
    # val = "1.45 m"
    # loc = 4
    # val = "m"
    # loc = THIS CAUSES AN ERROR, PROGRAM CRASHES

    # try-except structures allow you to override the default crash process

    # "try these three lines of code, and if something crashes/goes wrong, execute the
    # code in the 'execute' section"

            try:
                loc = val.index("")
                data1.append(val[0:loc])
                val = val[loc+1:]
            except:
                # this gets evaluated when the program crashes
                data1.append(val)
                break
        
    print(data1)


















# def approach3():


#     # data = [
#     #         ["Jim", "1.45", "m"],
#     #         ["Sally", "187", "cm"],
#     #         ...
#     #         ["Marnie", "17.9", "dm"]
#     #         ]

#     data1 = []


#     for i in range(0,len(data),1):
#         val = data[i]
        

#         while True:

#             temp = []


#     # val = "Jim 1.45 m"
#     # loc = 3
#     # val = "1.45 m"
#     # loc = 4
#     # val = "m"
#     # loc = THIS CAUSES AN ERROR, PROGRAM CRASHES

#     # try-except structures allow you to override the default crash process

#     # "try these three lines of code, and if something crashes/goes wrong, execute the
#     # code in the 'execute' section"

#             try:
#                 loc = val.index("")
#                 temp.append(val[0:loc])
#                 val = val[loc+1:]
#             except:
#                 # this gets evaluated when the program crashes
#                 temp.append(val)
#                 break
        
#     print(data1)




# approach3()





















def oliversApproach():

    myfile = open("TALLEST.txt","r")
    # item is a string that contains the entire file
    item = myfile.read().split("\n")
    # now, item, after having been split, becomes a list of strings, each separated by
    # the '\n' (the paragraph break)
    # item is a list of ['name 102 cm', 'name1 344.1 mm', etc.]
    myfile.close()

    n = int(item[0])
    people = []

    for i in range(1, n+1):
        # starting at 1 because item[0] is the number of people in the list
        # irrelevant info
        people.append(item[i].split())
        # the above function now creates a two-dimensional list
        # people is a list, item[i] is an item in the list 'item'
        # item[i].split() creates a new list from item[i]
        # ['name 103 cm'] --> ['name', '103', 'cm']
    
    cons = {"m":1, "dm":0.1, "cm":0.01, "mm":0.001}

    # converting everything to meters

    for i in range(n):
        people[i][1] = float(people[i][1]) * cons[people[i][2]]
    
    # sorts 'people' by the second item (people[i][1])
    # multiplies by the corresponding constant (0.1 for dm, 0.01 for cm, etc.)
    # to convert everything to meters

    people.sort(key = lambda x:x[1])

    for i in range(n-1, n-6, -1):
        print(people[i][0])



oliversApproach()
















# # basar's approach



# def convertMeters(h,u):
#     for i in range(len(u)):
#         if u[i] == "m":
#             h[i] = float(h[i])

#         elif u[i] == ""












# def basarsApproach():

#     file = open("TALLEST.txt", "r")
#     height = list()
#     names = list()
#     metric = list()


#     newlst = list()

#     for line in file

