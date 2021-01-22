time = input()

minutes = int(time[0:2]) * 60 + int(time[3:5])
arrival = 0
minutesArrival = 0

if minutes <= 300 or minutes >= 600 and minutes <= 780 or minutes >= 1140:
    arrival = str(int(time[0:2]+2)) + time[2:5]
    if int(arrival[0:2]) >= 24:
        print(str(int(arrival[0:2] - 24)) + time[2:5])
    else:
        print(arrival)

if (420 - minutes) > 0:
    timeSlow = 420 - minutes
    timeFast = 120 - timeSlow
    minutesArrival = minutes + timeFast + timeSlow * 2
    arrival = str()
    print()