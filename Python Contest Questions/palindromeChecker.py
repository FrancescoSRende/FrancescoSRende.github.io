def palindromeCheck():
    a = input("Give number: ")
    a = str(a)

    if len(a) % 2 == 0:
        front = str(a[:len(a)//2])
        back = str(a[len(a)//2:])
        backReverse = ''
        i = len(a) - 1
        while i >= len(a)//2:
            backReverse = backReverse + a[i]
            i = i - 1


        if front == backReverse:
            return True
        return False


    front = str(a[:len(a)//2])
    back = str(a[len(a)//2+1:])
    backReverse = ''
    i = len(a) - 1
    while i >= len(a)//2+1:
        backReverse = backReverse + a[i]
        i = i - 1

    if front == backReverse:
        return True
    return False

print(palindromeCheck())



def palindromeCheckB():
    a = input('input number: ')
    s = str(a)
    for i in range(0, len(s)//2, 1):
        if s[i] != s[len(s)-1-i]:
            return False
    return True

print(palindromeCheckB())