text = input()

happy = text.count(":-)")
sad = text.count(":-(")

if happy > sad:
    print("happy")
elif happy == sad:
    if happy == 0:
        print("none")
    else:
        print("unsure")
else:
    print("sad")