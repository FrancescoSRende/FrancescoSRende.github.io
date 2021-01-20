import math

def convertTime():

    # time_24 = input()

    # # contest strategy 1: just set up variable values and take inputs after

    # if int(time_24[0:2]) == 00:
    #     print("12" + time_24[2:5] + " AM")

    # elif 0 < int(time_24[0:2]) < 12:
    #     if time_24[0] == '0':
    #         print(time_24[1:5] + " AM")
    #     else:
    #         print(time_24 + " AM")

    # elif int(time_24[0:2]) == 12:
    #     print(time_24 + " PM")

    # else:
    #     print(str(int(time_24[0:2]) - 12) + time_24[2:5] + " PM")



    time = input()

    h = int(time[0:2])
    m = time[3:5]
    x = "AM"

    if (h == 0):
        x = "AM"
        h = 12

    elif (1 <= h <= 11):
        x = "AM"

    elif (h == 12):
        x = "PM"


    elif (13 <= h <= 23):
        x = "PM"
        h = h - 12
    
    print(str(h) + ":" + str(m) + x)

# contest strategy 2: write the problem as a function
convertTime()