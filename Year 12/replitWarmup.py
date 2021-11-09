length = int(input("Please input a whole number greater than 0: \n"))
# while isnumeric(length) == False or int(length) < 1:
#     length = input("Please input a whole number greater than 0: \n")

length = int(length)

count = 0
i = 2
primes = []

while count < length:
  ceil = int(((i ** 0.5) // 1) + 1)
  prime = True
  for j in range(1, ceil, 1):
    if i % j == 0 and j != 1:
      prime = False
  if prime == True:
    count += 1
    primes.append(i)
  i += 1

print(primes)

lenFactors = []

for i in range(1, int(((length ** 0.5) // 1) + 1), 1):
  if length % i == 0:
    lenFactors.append(i)
    if length / i != i:
      lenFactors.append(int(length / i))

lenFactors.sort()

print(lenFactors)

twoD = []

index = (len(lenFactors) // 2) - 1

row = index
col = len(lenFactors) - index - 1

for r in range(0, row, 1):
    temp = []
    for c in range(0, col, 1):
        temp.append(input("Input a value: \n"))
    twoD.append(temp)

print(twoD)