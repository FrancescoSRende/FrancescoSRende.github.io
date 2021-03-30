a = int(input())
b = int(input())
c = int(input())
d = int(input())
s = int(input())

nikCycle = a + b
byrCycle = c + d

nikProf = a - b
byrProf = c - d

nikTotal = 0
byrTotal = 0

nikNumCyc = s // nikCycle
byrNumCyc = s // byrCycle

nikTotal = nikNumCyc * nikProf
byrTotal = byrNumCyc * byrProf

nikRem = s - (nikCycle * nikNumCyc)
byrRem = s - (byrCycle * byrNumCyc)

if nikRem >= a:
    nikTotal = nikTotal + a - (nikRem - a)
else:
    nikTotal = nikTotal + nikRem

if byrRem >= a:
    byrTotal = byrTotal + a - (byrRem - a)
else:
    byrTotal = byrTotal + byrRem

if nikTotal > byrTotal:
    print("Nikki")
elif byrTotal > nikTotal:
    print("Byron")
else:
    print("Tied")