const login_nav = document.getElementById("login-nav")
const logout_nav = document.getElementById("logout-nav")


const photos_nav = document.getElementById("photos-nav")
const services_nav = document.getElementById("services-nav")
const contact_nav = document.getElementById("contact-nav")
const photos = document.getElementById("photos")
const songs = document.getElementById("songs")
const parallax = document.getElementById("parallax")
const parallax2 = document.getElementById("parallax2")
const services = document.getElementById("services")
const contact = document.getElementById("contact")
const footer = document.getElementById("footer")






logout_nav.addEventListener("click", (e) => {

    console.log(e)
    e.preventDefault()

    logout_nav.style.display = "none"
    photos_nav.style.display = "none"
    services_nav.style.display = "none"
    contact_nav.style.display = "none"
    photos.style.display = "none"
    songs.style.display = "none"
    parallax.style.display = "none"
    parallax2.style.display = "none"
    services.style.display = "none"
    contact.style.display = "none"
    footer.style.display = "none"

    login_nav.style.display = "block"

});