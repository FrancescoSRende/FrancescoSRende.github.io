const login_form = document.querySelector("#login-form")
const login_nav = document.getElementById("login-nav")
const logout_nav = document.getElementById("logout-nav")


const photos_nav = document.getElementById("photos-nav")
const services_nav = document.getElementById("services-nav")
const contact_nav = document.getElementById("contact-nav")


unames = ["user1","user2","user3"]
pwords = ["pword1","pword2","pword3"]

login_form.addEventListener("submit", (e) => {

    console.log(e)
    console.log(e.cancelBubble)
    e.preventDefault()

    uname = login_form["username"].value
    pword = login_form["user_password"].value

    //option 1 - verify against a predefined list - for learning (not secure)

    // var hasUname = unames.includes(uname);

    // if (hasUname = true) {
    //     var indexUname = unames.indexOf(uname);
    // }

    // if (pwords.indexOf[indexUname] = pword) {
    //     logout_nav.style.display = "block"
    //     elements_nav.style.display = "block"
    //     elements_game_nav.style.display = "block"
    //     login_nav.style.display = "none"
    // }


    for (i = 0; i < unames.length; i = i + 1) {
        if (unames[i] == uname) {
            if (pwords[i] == pword) {
                logout_nav.style.display = "block"
                photos_nav.style.display = "block"
                services_nav.style.display = "block"
                contact_nav.style.display = "block"

                login_nav.style.display = "none"
            }
            else {
                alert("Invalid user!")
                break;
            }
        }
    }
    
    //add an event listener to logout nav
    //the swap the display settings of each nav element


    //option 2 - send to firebase for authorization - for real

    const modal = document.querySelector("#login-modal")
    M.Modal.getInstance(modal).close();


});





logout_nav.addEventListener("click", (e) => {

    console.log(e)
    e.preventDefault()

    logout_nav.style.display = "none"
    photos_nav.style.display = "none"
    services_nav.style.display = "none"
    contact_nav.style.display = "none"

    login_nav.style.display = "block"

});