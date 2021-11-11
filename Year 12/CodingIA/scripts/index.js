document.addEventListener('DOMContentLoaded', function() {
    options = {dismissible: false}
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});



document.addEventListener('DOMContentLoaded', function() {
options = {}
var elems = document.querySelectorAll('.sidenav');
var instances = M.Sidenav.init(elems, options);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);










// <!-- script that contains sample user info -->

users = [
    {
        "email": "francesco.rende@ucc.on.ca",
        "password": "farnesco",
        "admin": true
    },
    {
        "email": "psmith@ucc.on.ca",
        "password": "comrade",
        "admin": true
    },
    {
        "email": "stephen.stack@ucc.on.ca",
        "password": "stephen",
        "admin": false
    },
    {
        "email": "test",
        "password": "f",
        "admin": false
    }
]


activeuser = null















// <!-- fake login -->


const login_form = document.getElementById("login-form")

login_form.addEventListener("submit", (e) => {

    e.preventDefault()

    attemptEmail = login_form["user_email"].value
    attemptPword = login_form["user_password"].value

    for (let i = 0; i < users.length; i++) {
        if (users[i]["email"] == attemptEmail) {
            if (users[i]["password"] == attemptPword) {
                // sidenavTrigger.style.display = "block"
                logout_btn.style.display = "block"
                newUserBTN.style.display = "none"
                loginBTN.style.display = "none"
                break
            }
        }
    }



    const modal = document.querySelector("#login-modal")
    M.Modal.getInstance(modal).close();



});
























// <!-- fake sign up -->


const sign_up_form = document.getElementById("signup-form")

sign_up_form.addEventListener("submit", (e) => {

e.preventDefault()

newEmail = sign_up_form["new_email"].value
newPword = sign_up_form["new_password"].value

var UCCcheck = false

if (newEmail.length > 10) {
    for (let i = 1; i < newEmail.length - 9; i++) {
        if (newEmail.substring(i,i+10) === "@ucc.on.ca") {
            UCCcheck = true
        }
    }
    if (UCCcheck === false) {
        console.log("not a UCC email")
        alert("Please enter a UCC email.")
    }
} else {
    console.log("too short")
    alert("Please enter a UCC email.")
}


if (UCCcheck === true) {
    var check = 0

    for (let i = 0; i < users.length; i++) {
        if (users[i]["email"] === newEmail) {
            check = check + 1
        }
    }


    if (check = 0) {
        newUser = {
            "email": newEmail,
            "password": newPword,
            "admin": false
        }

        users.push(newUser)
    }

    // console.log(users)


    // sidenavTrigger.style.display = "block"
    logout_btn.style.display = "block"
    newUserBTN.style.display = "none"
    loginBTN.style.display = "none"


    const modal = document.querySelector("#signup-modal")
    M.Modal.getInstance(modal).close();


}
});




















// <!-- fake logout -->


const logout_btn = document.getElementById("logout_btn")

logout_btn.addEventListener("click", (e) => {


// sidenavTrigger.style.display = "none"
logout_btn.style.display = "none"
newUserBTN.style.display = "block"
loginBTN.style.display = "block"



});