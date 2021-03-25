def findRoot(str1):

    # file = open("DATA1.txt", "r")

    for i in range(1, len(str1), 1):
        temp = str1[0:i]
        modulo = len(str1) % len(temp)
        division = len(str1) // len(temp)
        if modulo == 0:
            if temp * division == str1:
                return temp

str1 = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
str2 = "assasaassasaassasa"
str3 = "ddddddddddddddddddddddddddddsssssssssssssssssssssddddddddddddddddddddddddddddsssssssssssssssssssss"
str4 = "ccasdsfwefsvfwedasccasdsfwefsvfwedas"

print(findRoot(str4))