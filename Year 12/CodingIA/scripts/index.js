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




















// defining elements
const logoutBTN = document.getElementById("logoutBTN")
const newUserBTN = document.getElementById("newUserBTN")
const loginBTN = document.getElementById("loginBTN")
const songBTN = document.getElementById("songBTN")
const adminSugBTN = document.getElementById("adminSugBTN")
const createCardBTN = document.getElementById("createCardBTN")

const loginForm = document.getElementById("loginForm")
const signUpForm = document.getElementById("signUpForm")
const songForm = document.getElementById("songForm")
const createCardForm = document.getElementById("createCardForm")

const cardDisplay = document.getElementById("cardDisplay")
const sugDisplay = document.getElementById("sugDisplay")





















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
        "admin": true
    },
    {
        "email": "bad",
        "password": "a",
        "admin": false
    }
]


activeuser = null















// <!-- fake login -->

loginForm.addEventListener("submit", (e) => {

    e.preventDefault()

    attemptEmail = loginForm["user_email"].value
    attemptPword = loginForm["user_password"].value

    for (let i = 0; i < users.length; i++) {
        if (users[i]["email"] == attemptEmail) {
            if (users[i]["password"] == attemptPword) {
                // sidenavTrigger.style.display = "block"
                logoutBTN.style.display = "block"
                songBTN.style.display = "block"
                cardDisplay.style.display = "block"

                newUserBTN.style.display = "none"
                loginBTN.style.display = "none"
                if (users[i]["admin"] == true) {
                    adminSugBTN.style.display = "block"
                    createCardBTN.style.display = "block"
                }
                break
            }
        }
    }



    const modal = document.querySelector("#login-modal")
    M.Modal.getInstance(modal).close();



});
























// <!-- fake sign up -->

signUpForm.addEventListener("submit", (e) => {

e.preventDefault()

newEmail = signUpForm["new_email"].value
newPword = signUpForm["new_password"].value

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
    logoutBTN.style.display = "block"
    songBTN.style.display = "block"
    cardDisplay.style.display = "block"

    newUserBTN.style.display = "none"
    loginBTN.style.display = "none"


    const modal = document.querySelector("#signup-modal")
    M.Modal.getInstance(modal).close();


}
});




















// <!-- fake logout -->
logoutBTN.addEventListener("click", (e) => {


// sidenavTrigger.style.display = "none"
logoutBTN.style.display = "none"
songBTN.style.display = "none"
cardDisplay.style.display = "none"
adminSugBTN.style.display = "none"
sugDisplay.style.display = "none"
createCardBTN.style.display = "none"

newUserBTN.style.display = "block"
loginBTN.style.display = "block"



});





















// list of card info
cardInfo = [
    {"title": "Ape Dos Mil",
    "band": "Glassjaw",
    "genre": "Alternative",
    "approved": true
    },
    {"title": "badsong",
    "band": "a band",
    "genre": "jazz",
    "approved": false
    },
    {"title": "song",
    "band": "band",
    "genre": "genre",
    "approved": true
    },
    {"title": "suggestion",
    "band": "napalm death",
    "genre": "swing",
    "approved": false
    }
]





















// generate cards

//Works the same as previous case, but now a function 
 	//creates a card and returns it with the program can use. 
 	//This is nice because you can now use parameters to modify the
 	//card contents. 
 	//Note: There is a unique format for adding strings using `` 
 	//		notation
 	//Note: You can also use DOM to build the element
 	function createCard(title, band, genre) {
        const card = `

                <div class="container">
                        <h2 class = "col s12 m12 l6 center-align">${genre}</h2>

                        <div class="row">

                            <div class="col s12 l6">
                                <div class="card">

                                    <div class="card-image">
                                        <div class="video-container">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4b8ZfLKxoRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <!-- <a href="#" class="halfway-fab btn-floating pink pulse">
                                            <i class="material-icons">favorite</i>
                                        </a> -->
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title">${band} - ${title}</span>
                                        <p>Ashes of the Wake, Sacrament, As the Palaces Burn, Lamb of God (self-titled)</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="https://en.wikipedia.org/wiki/Lamb_of_God_(band)">More Details</a>
                                        <a href="https://www.youtube.com/watch?v=HL9kaJZw8iw&ab_channel=lambofgodVEVO">Laid to Rest</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
           `;

           return card

    }


    const cd = document.getElementById("cardDisplay")


    console.log(cd)
   
   //creates an extra div in the structure
   //Suggestion: Remove the div for the col in the 
   //const then embed in that.  It will require you set the
   //class name. 
//    newDiv = document.createElement("div")
//    newDiv.innerHTML = createCard("AAAA","AA");
//    cd.innerHTML = createCard("BBBB","BB") + createCard("CCCC","CC");
//    cd.appendChild(newDiv)

   //We can use a loop to add a large amount of 
    for (i = 0; i < cardInfo.length; i = i + 1) {
        if (cardInfo[i]["approved"] == true) {
            newDiv = document.createElement("div")
            newDiv.innerHTML = createCard(cardInfo[i]["title"],cardInfo[i]["band"],cardInfo[i]["genre"])
            cd.appendChild(newDiv)
        }
    }





















// numbers for suggestions
sugNums = []



// generate suggestion cards

 	function createSugCard(title, band, genre, number) {
        const card = `

                <div class="container">
                        <h2 class = "col s12 m12 l6 center-align">${genre}</h2>

                        <div class="row">

                            <div class="col s12 l6">
                                <div class="card">

                                    <div class="card-image">
                                        <div class="video-container">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4b8ZfLKxoRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <!-- <a href="#" class="halfway-fab btn-floating pink pulse">
                                            <i class="material-icons">favorite</i>
                                        </a> -->
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title">${band} - ${title}</span>
                                        <p>Ashes of the Wake, Sacrament, As the Palaces Burn, Lamb of God (self-titled)</p>
                                    </div>
                                    <div class="card-action">
                                        <div class = "row">
                                            <a href="#" id="acceptBTN${number}" class="modal-trigger green btn">Accept Suggestion</a>
                                        </div>
                                        <div class = "row">
                                            <a href="#" id="rejectBTN${number}" class="modal-trigger red darken-1 btn">Reject Suggestion</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
           `;

           return card

    }


    const sd = document.getElementById("sugDisplay")


    for (i = 0; i < cardInfo.length; i = i + 1) {
        if (cardInfo[i]["approved"] == false) {
            newSugDiv = document.createElement("div")
            newSugDiv.innerHTML = createSugCard(cardInfo[i]["title"],cardInfo[i]["band"],cardInfo[i]["genre"],i.toString())
            sd.appendChild(newSugDiv)
            sugNums.push(i.toString())
            // var numAcceptBTN = "acceptBTN" + i.toString()
            // var numRejectBTN = "rejectBTN" + i.toString()
            // const numAcceptBTN = document.getElementById("numAcceptBTN")
        }
    }









    










   // <!-- song submission - create card -->

songForm.addEventListener("submit", (e) => {

    e.preventDefault()

    suggestedSong = songForm["song_title"].value
    suggestedBand = songForm["band_name"].value
    suggestedGenre = songForm["genre"].value

    suggestion = {
        "title": suggestedSong,
        "band": suggestedBand,
        "genre": suggestedGenre,
        "approved": false
    }

    cardInfo.push(suggestion)

    console.log(cardInfo)

    // newDiv = document.createElement("div")
    // newDiv.innerHTML = createCard(suggestedSong,suggestedBand,suggestedGenre)
    // cd.appendChild(newDiv)

    const modal = document.querySelector("#song-modal")
    M.Modal.getInstance(modal).close();



});




















// <!-- button to let admins view suggested songs -->
adminSugBTN.addEventListener("click", (e) => {


    sugDisplay.style.display = "block"
    
    
    
    });




















// <!-- accept suggestion button -->
adminSugBTN.addEventListener("click", (e) => {


    sugDisplay.style.display = "block"
    
    
    
    });




















    // <!-- song submission - admin create card -->
    // HOPEFULLY TEMPORARY FIX

    createCardForm.addEventListener("submit", (e) => {

    e.preventDefault()

    createSong = createCardForm["create_song_title"].value
    createBand = createCardForm["create_band_name"].value
    createGenre = createCardForm["create_genre"].value

    creation = {
        "title": createSong,
        "band": createBand,
        "genre": createGenre,
        "approved": true
    }

    cardInfo.push(creation)

    newDiv = document.createElement("div")
    newDiv.innerHTML = createCard(createSong,createBand,createGenre)
    cd.appendChild(newDiv)

    // newDiv = document.createElement("div")
    // newDiv.innerHTML = createCard(suggestedSong,suggestedBand,suggestedGenre)
    // cd.appendChild(newDiv)

    const modal = document.querySelector("#create-card-modal")
    M.Modal.getInstance(modal).close();



});