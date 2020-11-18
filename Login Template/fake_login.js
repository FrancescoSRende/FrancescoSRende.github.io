//var makes variables global, while let makes variables limited in scope
//when neither var or let is written, the variable is assumed to not be global

var uNames = []
var pWords = []

//populate uNames and pWords with the JSON file
//this requires that I use something called a fetch
//a fetch is used to tell the webpage to go out and get something
//this takes time and the code keeps running
//BIG IDEA: asynchronous processing and the funny things that happen
//Keep in mind promises - a fetch returns a promise

//a link to the JSON file
var url = "https://raw.githubusercontent.com/FrancescoSRende/FrancescoSRende.github.io/master/Login%20Template/logindata.json";

fetch(url, {})
    .then(response => response.json()) //arrow function
    //the first 'response' is the parameter of the function (ie. function(parameter))
    //and the second 'response' is saying to put that into the json function (instance method)
    .then(result => {
        console.log(result)

        for (i = 0; i < result.length; i = i + 1) {
            uNames.push(result[i]["id"])
            pWords.push(result[i]["password"])
        }

        console.log(uNames)
        console.log(pWords)
    });

//the 'then' makes the functions synchronous... it says 'first, fetch the url, then 
//do '.then(response => response.json())', then do the line after that, then you can move
//to the code beneath all of this


//How do I check the login?
//Step 1: Grab the form (the element which controls the inputs)

var mlogin = document.getElementById("modal-login");
var loginForm = document.getElementById("login-form");

var homePage = document.getElementById("home");

var landingPage = document.getElementById("landing");

homePage.style.display = "none"

//the first input tells the event listener what action to look for (here, submit means when the button is clicked)
//the second input tells it what to do once the first inout happens

//Step 2: bind an event listener
//Notice: JQuery can also be used to do this, but it is placed in a different location
loginForm.addEventListener("submit",function(e) {

    //since loginForm is calling the event listener, which is using the function which is being passed 'e',
    //e and loginForm are the same, therefore e.preventDefault(); stops the loginForm from closing/reloading the page

    e.preventDefault(); //stops the form from reloading the pages
    email = document.getElementById("login-email").value;
    password = document.getElementById("login-password").value;

    result = checkLoginAlt(email, password);
    console.log(result);

    //this closes the login form
    //you can put JQuery code in a JS file
    $(mlogin).modal("close");

    if (result === true) {
        homePage.style.display = "block"
        landingPage.style.display = "none"
    }

});

console.log(loginForm);




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
    return false;
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

    return false;
}






// x = checkLoginAlt("user1", "pword1")
// console.log(x)

// x = checkLoginAlt("user2", "pword1")
// console.log(x)

// x = checkLoginAlt("user1", "pword3")
// console.log(x)

// x = checkLoginAlt("usr1", "pword1")
// console.log(x)