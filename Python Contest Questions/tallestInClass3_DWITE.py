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









def approach3():


    data = [
            ["Jim", "1.45", "m"],
            ["Sally", "187", "cm"],
            ...
            ["Marnie", "17.9", "dm"]
            ]

    data1 = []


    for i in range(0,len(data),1):
        val = data[i]
        

        while True:

            temp = []


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
                temp.append(val[0:loc])
                val = val[loc+1:]
            except:
                # this gets evaluated when the program crashes
                temp.append(val)
                break
        
    print(data1)















approach1()