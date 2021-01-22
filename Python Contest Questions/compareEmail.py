def compareEmail(email1, email2):

    email1 = email1.lower()
    email2 = email2.lower()


    loc1 = email1.index('@')
    email1Editable = email1[0:loc1]

    

    loc2 = email2.index('@')
    email2Editable = email2[0:loc2]

    email1Editable = email1Editable.replace(".","")
    email2Editable = email2Editable.replace(".","")
    

    try:
        index1 = email1Editable.index("+")
        email1Editable = email1Editable[0:index1]
    except:
        email1Editable = email1Editable

    try:
        index2 = email2Editable.index("+")
        email2Editable = email2Editable[0:index2]
    except:
        email2Editable = email2Editable

    email1Final = email1Editable + email1[loc1:]
    email2Final = email2Editable + email2[loc2:]

    print(email1)
    print(email2)
    print(email1Final)
    print(email2Final)

    if email1Final == email2Final:
        return True
    return False


print(compareEmail("foo@bar.com", "fO.o+baz123@bAR.com"))