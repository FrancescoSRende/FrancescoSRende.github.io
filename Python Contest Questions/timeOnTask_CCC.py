def time():
    # Taking both variables as inputs
    timeLimit = int(input())
    numChores = int(input())

    # Defining a list to hold all the chores
    chores = []

    # Appending each chore time to the list of chores
    for i in range(0, numChores, 1):
        chores.append(int(input()))


    # Sorting the chores, since in order to do the maximum amount of chores, we need
    # to do the shortest/smallest ones first
    chores.sort()

    # We set the total time spent doing the chores to 0
    total = 0
    # We set i to zero since we need some way of counting the number of chores done
    i = 0


    # Method 1: While Loop

    # This will only run while the total time spent is less than the time limit
    while total < timeLimit:
        if i < len(chores):
            # We add the 'smallest' chore to the total
            total = total + chores[i]
            # and then we add one to i (the number of chores completed)
            i = i + 1

            # If we have now spent more time than the time limit has allowed, we have gone
            # over the time limit and thus need to remove the last chore
            # Thus, we subtract 1 from i and print that
            if total > timeLimit:
                print(str(i - 1))
                return

            # Otherwise, if the total time spent is exactly equal to the time limit, we
            # can print i as is, since the number of chores taken into account thus far
            # is just right
            elif total == timeLimit:
                print(i)
                return
        else:
            print(len(chores))
            return
        
    # A failsafe if we go through the entire program without total ever reaching
    # timeLimit (ie. if all of the chores combined add up to less than the time
    # limit, we just print out the number of chores, since we can do all of them)
    # print(i)
    # return





    # Method 2: For Loop

    # Establish new variables (total2 and j, instead of total and i)
    total2 = 0

    # We begin looping through every chore in the sorted chore list
    for j in range(0,len(chores),1):

        # Same idea as above, add the chore to the total then add one to j (the
        # number of chores completed)
        total2 = total2 + chores[j]
        j = j + 1

        # print("round " + str(j) + ": " + str(total2) + ", " + str(j))

        # If, after adding the chore to the total, the total time now exceeds the
        # time limit, we again subtract 1 from the total number of chores (since
        # we cannot complete the most recently added chore in the given time limit)
        if total2 > timeLimit:
            print(str(j - 1))
            return

        # Otherwise, if the total is exactly equal to the time limit, we can print
        # j as is, since the number of chores thus far is just right to be completed
        # within the time limit
        elif total2 == timeLimit:
            print(j)
            return

    # A failsafe if we go through the entire program without total ever reaching
    # timeLimit (ie. if all of the chores combined add up to less than the time
    # limit, we just print out the number of chores, since we can do all of them)
        
    if total2 < timeLimit:
        print(str(len(chores)))
        return
    
# Since we have returns inside the above code, we need to define it as a function
# and then call it down below
# Why do we need the returns?
time()