# def secretInstructions():
while True:
    instructions = []
    temp = int(input())
    if temp != 99999:
        directionNum = temp // 10000 + temp // 1000
        if directionNum % 2 == 1:
            direction = 'left'
        elif directionNum % 2 == 0 and directionNum > 0:
            direction = 'right'
        else:
            direction = direction
        steps = temp % 1000
            # command = str(direction) + " " + str(steps)
            # instructions.append(command)
        print(direction, steps)
    else:
        break

#     for i in range(0, len(instructions), 1):
#         print(instructions[i])

# print(secretInstructions())