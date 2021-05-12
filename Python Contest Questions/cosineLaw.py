import math

path = input("Are you solving for a side or an angle? Put S for side and A for angle:\n")
path = path.upper()

if path == "S":
    x = int(input("Input the degree measure of angle x. Ensure that x is the angle opposite the side you are solving for:\n"))
    a = int(input("Input the length of side a:\n"))
    b = int(input("Input the length of side b:\n"))
    x = x / 180 * math.pi
    arg = (a**2 + b**2 - 2*a*b*math.cos(x))
    print("Side c has a length of "+str(arg**(1/2)))




if path == "A":
    c = int(input("Input the length of side c. Ensure that c is the side opposite the angle you are solving for:\n"))
    a = int(input("Input the length of side a:\n"))
    b = int(input("Input the length of side b:\n"))
    arg = (a**2 + b**2 - c**2) / (2 * a * b)
    print("Angle x has a degree measure of "+str(math.acos(arg)*180/math.pi))