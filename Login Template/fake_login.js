//var makes variables global, while let makes variables limited in scope
//when neither var or let is written, the variable is assumed to not be global

var uNames = ["user1","user2","user3"]
var pWords = ["pword1","pword2","pword3"]

function checkLogin(u, p) {

    //assuming invalid values u and p
    uvalid = false;
    pvalid = false;
    index = 0;

    //the below loop is a linear search, and we are just checking if u exists in the list
    for (i = 0; i < uNames.length; i = i + 1) {
        
        //JS: == verses ===
        //== compares only the value ("1" == 1 is true)
        ///=== compares value and type ("1" === 1 is false, but "1" === "1" is true)
        if (uNames[i] === u) {
            uvalid = true;
            index = i;
        }

    }

    if (pWords[index] === p) {
        pvalid = true;
    }

    if (uvalid === true && pvalid === true) {
        return true;
    }
    return false
}






function checkLoginAlt(u, p) {

    //assuming invalid values u and p
    uvalid = false;
    index = -1;

    //the below loop is a linear search, and we are just checking if u exists in the list
    for (i = 0; i < uNames.length; i = i + 1) {
        
        //JS: == verses ===
        //== compares only the value ("1" == 1 is true)
        ///=== compares value and type ("1" === 1 is false, but "1" === "1" is true)
        if (uNames[i] === u) {

            if (pWords[i] == p) {
                return true;
            }

        }

    }

    return false
}






x = checkLoginAlt("user1", "pword1")
console.log(x)

x = checkLoginAlt("user2", "pword1")
console.log(x)

x = checkLoginAlt("user1", "pword3")
console.log(x)

x = checkLoginAlt("usr1", "pword1")
console.log(x)