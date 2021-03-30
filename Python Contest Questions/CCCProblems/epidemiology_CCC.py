def disease():
    p_with_disease = int(input())
    starters = int(input())
    infected = int(input())

    total = 0
    day = 0
    infected_today = starters

    while True:
        total = total + infected_today
        if total >= p_with_disease:
            print(day)
            return
        else:
            day = day + 1
            infected_today = infected_today * infected

disease()