f = open("DATA1.txt", "r")
lst = []
for x in f:
    t = x
    t = int(t.replace("\n",""))
    lst.append(t)
f.close()

f2 = open("OUT1.txt", "w")


for i in range(0, len(lst), 1):
    n = lst[i]
    factors = []
    q = int((n**0.5)//1)+1
    for j in range(1, q, 1):
        if n % j == 0:
            factors.append(j)
            factors.append(n / j)
    if len(factors) == 4:
        f2 = open("OUT1.txt", "a")
        f2.write("semiprime\n")
    else:
        f2 = open("OUT1.txt", "a")
        f2.write("not\n")