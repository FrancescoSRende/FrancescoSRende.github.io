f = open("DATA11.txt", "r")
words = []
for x in f:
    t = x
    t = t.replace("\n","")
    words.append(t)
f.close()

for j in range(0, len(words), 1):
    word = words[j]
    leng = len(word)
    result = ""
    line1 = (" " * (leng - 1)) + word[0]
    result = result + line1 + "\n"

    lines = []
    for i in range(1, leng, 1):
        line2 = (" " * (leng - 1 - i)) + word[i] + (" " * ((2 * i) - 1)) + word[i] + "\n"
        lines.append(line2)

    for i in range(0, len(lines), 1):
        result = result + lines[i]

    leng2 = len(lines) - 1

    for i in range(0, len(lines) - 1, 1):
        result = result + lines[leng2 - i - 1]

    result = result + line1
    print(result)