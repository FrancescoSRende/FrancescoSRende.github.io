m = int(input("Lower limit: "))
n = int(input("Upper limit: "))

harshad = []
streak = 0
maxStreak = 0
runs = []

for i in range(m, n+1, 1):
    dig = 0
    x = i
    while x > 0:
        dig = dig + (x % 10)
        x = x // 10
    if i % dig == 0:
        harshad.append(i)
        streak = streak + 1

    else:
        if streak >= maxStreak:
            maxStreak = streak
        streak = 0

print(maxStreak)