time = input()

minutes = int(time[0:2]) * 60 + int(time[3:5])
arrival = ''
minutesArrival = 0

if minutes <= 300 or minutes >= 1140 or minutes >= 600 and minutes <= 780:
    arrival = str(int(time[0:2]) + 2) + time[2:5]
    if arrival[1] == ":":
        print("0" + arrival)
    else:
        print(arrival)
elif minutes >= 420 and minutes < 480 or minutes >= 900 and minutes < 1020:
    arrival = str(int(time[0:2]) + 4) + time[2:5]
    if arrival[1] == ":":
        print("0" + arrival)
    else:
        print(arrival)
elif minutes > 300 and minutes < 420:
    fastMin = 420 - minutes
    minutesArrival = minutes + (120 - fastMin) * 2 + fastMin
    arrival = str(minutesArrival // 60) + ":" + str(minutesArrival % 60)
    if arrival[1] == ":":
        print("0" + arrival)
    else:
        print(arrival)
elif minutes > 480 and minutes < 600:
    slowMin = 600 - minutes
    minutesArrival = minutes + (120 - slowMin) + slowMin * 2
    arrival = str(minutesArrival // 60) + ":" + str(minutesArrival % 60)
    if arrival[1] == ":":
        print("0" + arrival)
    else:
        print(arrival)
elif minutes > 780 and minutes < 900:
    fastMin = 900 - minutes
    minutesArrival = minutes + (120 - fastMin) * 2 + fastMin
    arrival = str(minutesArrival // 60) + ":" + str(minutesArrival % 60)
    if arrival[1] == ":":
        print("0" + arrival)
    else:
        print(arrival)
elif minutes > 1020 and minutess < 1140:
    slowMin = 1140 - minutes
    minutesArrival = minutes + (120 - slowMin) + slowMin * 2
    arrival = str(minutesArrival // 60) + ":" + str(minutesArrival % 60)
    if arrival[1] == ":":
        print("0" + arrival)
    else:
        print(arrival)