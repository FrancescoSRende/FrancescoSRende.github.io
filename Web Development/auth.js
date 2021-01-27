const login_form = document.querySelector("#login-form")
const login_nav = document.getElementById("login-nav")
const logout_nav = document.getElementById("logout-nav")
const elements_nav = document.getElementById("elements-nav")
const elements_game_nav = document.getElementById("elements-game-nav")

login_form.addEventListener("submit", (e) => {

    console.log(e)
    e.preventDefault()

    uname = login_form["username"].value
    pword = login_form["user_password"].value

    //option 1 - verify against a predefined list - for learning (not secure)
    logout_nav.style.display = "block"
    elements_nav.style.display = "block"
    elements_game_nav.style.display = "block"
    login_nav.style.display = "none"
    
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
    elements_nav.style.display = "none"
    elements_game_nav.style.display = "none"
    login_nav.style.display = "block"

});