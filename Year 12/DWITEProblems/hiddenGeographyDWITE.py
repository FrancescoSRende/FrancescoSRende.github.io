puzzle = "For the best value in food and amusements, ask at Chew and View."
forbidden = [" ", ",", ".", "!", "?"]
puzzle = puzzle.lower()
for i in range(0, len(forbidden), 1):
    temp = forbidden[i]
    puzzle = puzzle.replace(temp,"")


alb = puzzle.find("alberta")

if alb >= 0:
    print("Alberta")


bri = puzzle.find("britishcolumbia")

if bri >= 0:
    print("British Columbia")


man = puzzle.find("manitoba")

if man >= 0:
    print("Manitoba")


newb = puzzle.find("newbrunswick")

if newb >= 0:
    print("New Brunswick")


newf = puzzle.find("newfoundland")

if newf >= 0:
    print("Newfoundland")


nov = puzzle.find("novascotia")

if nov >= 0:
    print("Nova Scotia")


ont = puzzle.find("ontario")

if ont >= 0:
    print("Ontario")


pri = puzzle.find("princeedwardisland")

if pri >= 0:
    print("Prince Edward Island")


que = puzzle.find("quebec")

if que >= 0:
    print("Quebec")

    
sas = puzzle.find("saskatchewan")

if sas >= 0:
    print("Saskatchewan")