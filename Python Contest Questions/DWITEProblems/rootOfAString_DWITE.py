def findRoot(str1):

    # file = open("DATA1.txt", "r")

    #AND are short circuited
    #If the first condition fails, the rst is ignored. This allows us to do length
    #checks and have possible index out of bonds isseues by always doing the length
    #check first

    #WORD = <some word, length unknown>
    #check if first three letters are 'bob'

    #This is all predicated on the precondition that len(word) > 2
    #if (word[0:3] == "bob")
        #print("the first three letters are 'bob'")

    #OR

    #WORKS BECAUSE OF SHORT-CIRCUITING
    #if (len(word) > 2 and word[0:3] == "bob")
        #print("the first three letters are 'bob'")

    #FAILS BECAUSE OF INDEX OUT OF BOUNDS
    #if (word[0:3] == "bob" and len(word) > 2)
        #print("the first three letters are 'bob'")

    for i in range(1, len(str1), 1):
        temp = str1[0:i]
        modulo = len(str1) % len(temp)
        division = len(str1) // len(temp)
        if modulo == 0:
            if temp * division == str1:
                return temp
    

    #ALTERNATIVELY

    #end = 1
    #for i in range(0,len(str1),1):
        #result = len(str1) % len(str1[0:end]) == 0 and str1.count(str1[0:end]) == len(str1)/len(str1[0:end])
        #if (result == True):
            #print(str1[0:end])
            #return
            ##You can just return to exit a function
        #end = end + 1
    #print(str1)

str1 = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
str2 = "assasaassasaassasa"
str3 = "ddddddddddddddddddddddddddddsssssssssssssssssssssddddddddddddddddddddddddddddsssssssssssssssssssss"
str4 = "ccasdsfwefsvfwedasccasdsfwefsvfwedas"

print(findRoot(str4))