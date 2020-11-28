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

//initially an asynchronous process
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

var landingPage = document.getElementById("landing");
var mlogin = document.getElementById("modal-login");
var loginForm = document.getElementById("login-form");

var homePage = document.getElementById("home");

var prisonPage = document.getElementById("prison");
var lockedPage = document.getElementById("locked");

var signUpPage = document.getElementById("landing2");
var mSignUp = document.getElementById("modal-signup");
var signUpForm = document.getElementById("signup-form");

var signOut = document.getElementById("signOut");

var navbar = document.getElementById("navbarTop");

var landingPageAdmin = document.getElementById("landing-admin");
var mLoginAdmin = document.getElementById("modal-login-admin");
var loginFormAdmin = document.getElementById("login-form-admin");

var loginChance = document.getElementById("login-chance");

var prisonPageChance = document.getElementById("prison-chance");

var adminPage = document.getElementById("admin-page");


homePage.style.display = "none"
prisonPage.style.display = "none"
lockedPage.style.display = "none"
navbar.style.display = "none"
adminPage.style.display = "none"
prisonPageChance.style.display = "none"


var failedAttempts = 0

// function loginFormFunction(e) {


//     e.preventDefault(); //stops the form from reloading the pages
//     email = document.getElementById("login-email").value;
//     password = document.getElementById("login-password").value;

//     result = checkLoginAlt(email, password);
//     console.log(result);

//     //this closes the login form
//     //you can put JQuery code in a JS file
//     $(mlogin).modal("close");

//     if (result === true) {
//         homePage.style.display = "block"
//         landingPage.style.display = "none"
//         signUpPage.style.display = "none"
//         navbar.style.display = "block"
//         landingPageAdmin.style.display = "none"
//         prisonPageChance.style.display = "none"
//         failedAttempts = 0
//     } else {
//         prisonPage.style.display = "block"
//         prisonPageChance.style.display = "none"
//         failedAttempts += 1
//     }

//     if (failedAttempts > 2) {
//         lockedPage.style.display = "block"
//         landingPage.style.display = "none"
//         homePage.style.display = "none"
//         prisonPage.style.display = "none"
//         mSignUp.style.display = "none"
//         landingPageAdmin.style.display = "none"
//         prisonPageChance.style.display = "none"
//     }

// }


// loginForm.addEventListener("submit",loginFormFunction(),);






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
        signUpPage.style.display = "none"
        navbar.style.display = "block"
        landingPageAdmin.style.display = "none"
        prisonPageChance.style.display = "none"
        failedAttempts = 0
    } else {
        prisonPage.style.display = "block"
        prisonPageChance.style.display = "none"
        failedAttempts += 1
    }

    if (failedAttempts > 2) {
        lockedPage.style.display = "block"
        landingPage.style.display = "none"
        homePage.style.display = "none"
        prisonPage.style.display = "none"
        mSignUp.style.display = "none"
        landingPageAdmin.style.display = "none"
        prisonPageChance.style.display = "none"
    }

});

console.log(loginForm);





signOut.addEventListener("click",function(e) {

    homePage.style.display = "none"
    landingPage.style.display = "block"
    signUpPage.style.display = "block"
    navbar.style.display = "none"
    landingPageAdmin.style.display = "block"
    adminPage.style.display = "none"

});





loginFormAdmin.addEventListener("submit",function(e) {



    e.preventDefault(); //stops the form from reloading the pages
    password = document.getElementById("login-password-admin").value;

    //this closes the login form
    //you can put JQuery code in a JS file
    $(mLoginAdmin).modal("close");

    if (password === "password") {
        homePage.style.display = "block"
        landingPage.style.display = "none"
        signUpPage.style.display = "none"
        navbar.style.display = "block"
        landingPageAdmin.style.display = "none"
        adminPage.style.display = "block"
        prisonPageChance.style.display = "none"
        failedAttempts = 0
    } else {
        prisonPage.style.display = "block"
        prisonPageChance.style.display = "none"
        failedAttempts += 1
    }

    if (failedAttempts > 2) {
        lockedPage.style.display = "block"
        landingPage.style.display = "none"
        homePage.style.display = "none"
        prisonPage.style.display = "none"
        mSignUp.style.display = "none"
        landingPageAdmin.style.display = "none"
        prisonPageChance.style.display = "none"
    }
});









signUpForm.addEventListener("submit",function(e) {


    e.preventDefault(); //stops the form from reloading the pages
    email = document.getElementById("signup-email").value;
    password = document.getElementById("signup-password").value;

    // uNames.push(email)
    // pWords.push(password)

    console.log(uNames)

    //this closes the login form
    //you can put JQuery code in a JS file
    $(mSignUp).modal("close");


});





loginChance.addEventListener("click",function(e) {

    e.preventDefault(); //stops the form from reloading the pages
    numberChance = Math.floor(Math.random() * 10)
    console.log(numberChance)

    //this closes the login form
    //you can put JQuery code in a JS file
    $(mLoginAdmin).modal("close");

    if (numberChance > 8) {
        homePage.style.display = "block"
        landingPage.style.display = "none"
        signUpPage.style.display = "none"
        navbar.style.display = "block"
        landingPageAdmin.style.display = "none"
        adminPage.style.display = "block"
        prisonPageChance.style.display = "none"
        failedAttempts = 0
    } else {
        prisonPageChance.style.display = "block"
        failedAttempts += 1
    }
    if (failedAttempts > 2) {
        lockedPage.style.display = "block"
        landingPage.style.display = "none"
        homePage.style.display = "none"
        prisonPage.style.display = "none"
        mSignUp.style.display = "none"
        prisonPageChance.style.display = "none"
        landingPageAdmin.style.display = "none"
    }

});







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