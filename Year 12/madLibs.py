name1Raw = input("Input a name: \n")

counter = int(input("Input a number under 10: \n"))

if counter > 10:
	counter = int(input("Input a number under 10: \n"))

name2A = input("Input an animal: \n")

name2B = input("Input a food (one word): \n")

vehicle = input("Input a noun: \n")

name3 = input("Input a noun: \n")

weapon = input("Input a mechanical noun: \n")

numberRaw = float(input("Input a number: \n"))

animal = input("Input an animal (plural): \n")

emotion = input("Input an adjective: \n")

bodyPart = input("Input a body part: \n")

reaction = input("Input a verb ending in 'ing': \n")

adverb = input("Input an adverb: \n")



name1Fin = ""

for i in range(0, counter, 1):
	name1Fin = name1Fin + name1Raw

name2Fin = name2A + "-" + name2B

numberFin = str(2.1 * numberRaw)


result = "Dear " + name1Fin + ", My name is Mr. " + name2Fin + ", and I am in grave danger. My " + vehicle + " has gone down over the " + name3 + " Ocean, and the enemy is near. My " + weapon + " is jammed, so me and my " + numberFin + " crewmates are essentially sitting " + animal + "s. I'm so " + emotion + " right now. My " + bodyPart + " are " + reaction + "ing as we speak. If you can come save me, I'll be " + adverb + " grateful. Sincerely, Mr. " + name2Fin + "."

print(result)


'''

Dear ____,

My name is Mr. _____, and I am in grave danger. My ____ has gone down over the _____ Ocean, and the enemy is near.
My ____ is jammed, so me and my ___ crewmates are essentially sitting ____s. I'm so _____ right now. My _____ are _____ing as we speak.
If you can come save me, I'll be _____ grateful.

Sincerely,
Mr. _____

'''