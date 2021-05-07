def ThousandDigitFibonacci():
    fibonacci = [1]
    i = 1
    index = 0
    while len(str(i)) < 1000:
        fibonacci.append(int(i))
        i = i + fibonacci[index]
        index = index + 1

    return index + 2

print(ThousandDigitFibonacci())