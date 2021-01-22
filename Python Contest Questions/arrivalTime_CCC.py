time = input()

minutes = int(time[0:2]) * 60 + int(time[3:5])
arrival = 00:00
minutesArrival = 0

if minutes <= 300 or minutes >= 1140 or minutes >= 600 and minutes <= 780:
    arrival = str(int(time[0:2]) + 2) + time[2:5]
    print(arrival)
elif minutes >= 420 and minutes < 480 or minutes >= 900 and minutes < 1020:
    arrival = str(int(time[0:2]) + 4) + time[2:5]
    print(arrival)
elif minutes > 300 and < 420:
    slowMin = 420 - minutes
    minutesArrival = minutes + (120 - slowMin) + slowMin * 2
    arrival = str()