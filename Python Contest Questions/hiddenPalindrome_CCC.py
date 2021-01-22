word = input()

length = 1
maxLength = 1

for i in range(1, len(word), 1):
    if word[i-1] == word[i+1]:
        length = length + 2
    if word[i-1] = word[i]:
        length = length + 1