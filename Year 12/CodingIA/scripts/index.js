document.addEventListener('DOMContentLoaded', function() {
    options = {dismissible: true}
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
    optionsSidenav = {}
    var elemsSidenav = document.querySelectorAll('.sidenav');
    var instancesSidenav = M.Sidenav.init(elemsSidenav, optionsSidenav);

    optionsDropdown = {}
    var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
    var instancesDropdown = M.Dropdown.init(elemsDropdown, optionsDropdown);
    
    optionsSelect = {}
    var elemsSelect = document.querySelectorAll('select');
    var instancesSelect = M.FormSelect.init(elemsSelect, optionsSelect);
});





// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);








// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	// Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCg3JN8dalbWuzXgadDYPEF82ff9s2fK3Q",
        authDomain: "demoproject-10ac8.firebaseapp.com",
        databaseURL: "https://demoproject-10ac8-default-rtdb.firebaseio.com",
        projectId: "demoproject-10ac8",
        storageBucket: "demoproject-10ac8.appspot.com",
        messagingSenderId: "734975493795",
        appId: "1:734975493795:web:970887186e181c26c86116",
        measurementId: "G-GT5LE219G4"
    };
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

    const database = firebase.database();






















// defining the various elements on the website that I will need to access
const logoutBTN = document.getElementById("logoutBTN")
const newUserBTN = document.getElementById("newUserBTN")
const loginBTN = document.getElementById("loginBTN")
const songBTN = document.getElementById("songBTN")
const adminSugBTN = document.getElementById("adminSugBTN")
const createCardBTN = document.getElementById("createCardBTN")
const resetBTN = document.getElementById("resetBTN")
const changeBTN = document.getElementById("changeBTN")

const alternativeBTN = document.getElementById("alternativeBTN")
const metalBTN = document.getElementById("metalBTN")
const hardcoreBTN = document.getElementById("hardcoreBTN")

const chromaticBTN = document.getElementById("chromaticBTN")
const noiseBTN = document.getElementById("noiseBTN")
const twoFiveBTN = document.getElementById("twoFiveBTN")
const modalInterchangeBTN = document.getElementById("modalInterchangeBTN")

const fiveFourTimeBTN = document.getElementById("fiveFourTimeBTN")

const loginForm = document.getElementById("loginForm")
const signUpForm = document.getElementById("signUpForm")
const songForm = document.getElementById("songForm")
const createCardForm = document.getElementById("createCardForm")
const resetForm = document.getElementById("resetForm")
const changeForm = document.getElementById("changeForm")

const cardDisplay = document.getElementById("cardDisplay")
const sugDisplay = document.getElementById("sugDisplay")
const genreDisplay = document.getElementById("genreDisplay")

const sidenavBTN = document.getElementById("sidenavBTN")

// const CHANGETHISBUTGENRE = document.getElementById("CHANGETHISBUTGENRE")





















// <!-- script that contains sample user info -->
// possible extension by using either firebase database or firebase authentication

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

// description: pulls all user info from Firebase and adds each key to a list called
// userNums. Then it takes the email and password the user inputted into the login
// form and checks it against the list of userInfo from Firebase. If there is an
// account in userInfo with the inputted email and password, the page displays some
// of the content. If the user is also an admin, then extra content is displayed.
// It also generates appropriate alerts if the password is invalid or if the email
// does not appear in userInfo.
// parameters: string, generalized function with e as argument
// parameter is string, argument is 'submit'
// pre-conditions
// post-conditions: the page cannot reload (e.preventDefault)

var accounts = firebase.database().ref('accounts/');

accounts.on('value', (snapshot) => {
    userInfo = snapshot.val();
    // console.log(userInfo)
    userNums = []
    for (var key in userInfo) {
        userNums.push(key)
    }
});



loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log(e)

    attemptEmail = loginForm["user_email"].value
    attemptPword = loginForm["user_password"].value
    emailCheck = false

    for (var key in userInfo) {
    
        if (userInfo[key]["email"] == attemptEmail) {
            emailCheck = true
            if (userInfo[key]["password"] == attemptPword) {
                // sidenavTrigger.style.display = "block"
                songBTN.style.display = "inline-block"
                cardDisplay.style.display = "block"
                sidenavBTN.style.display = "inline-block"
                changeBTN.style.display = "inline-block"
                newUserBTN.style.display = "none"
                loginBTN.style.display = "none"
                activeuser = attemptEmail

                const modal = document.querySelector("#login-modal")
                M.Modal.getInstance(modal).close();
                document.getElementById("loginForm").reset();
    
                if (userInfo[key]["admin"] == true) {
                    adminSugBTN.style.display = "inline-block"
                    createCardBTN.style.display = "inline-block"
                    resetBTN.style.display = "inline-block"
                }
                break
            } else {
                alert("Invalid password.")
            }
            break
        }
    
    }

    if (emailCheck == false) {
        alert("That email is not already registered. Enter a registered email or sign up.")
    }
    
        


    

    // for (let i = 0; i < users.length; i++) {
    //     if (users[i]["email"] == attemptEmail) {
    //         if (users[i]["password"] == attemptPword) {
    //             // sidenavTrigger.style.display = "block"
    //             songBTN.style.display = "inline-block"
    //             cardDisplay.style.display = "block"
    //             sidenavBTN.style.display = "inline-block"
    //             newUserBTN.style.display = "none"
    //             loginBTN.style.display = "none"

    //             if (users[i]["admin"] == true) {
    //                 adminSugBTN.style.display = "inline-block"
    //                 createCardBTN.style.display = "inline-block"
    //             }
    //             break
    //         }
    //     }
    // }



});























// <!-- fake sign up -->

// description: allows new user to input an email and a password, then checks if the
// email is a valid UCC email. Then, it checks if the submitted email already has an
// account attached to it by checking for the email in userInfo. If there is no such
// account in the users list, a new account is pushed to userInfo, and then the
// Firebase database of user info is updated.
// Then, the content for a non-admin is displayed.
// parameters: string, generalized function with e as argument
// pre-conditions
// post-conditions: the page cannot reload (e.preventDefault)

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
            // console.log("not a UCC email")
            alert("Please enter a UCC email.")
        }
    } else {
        // console.log("too short")
        alert("Please enter a UCC email.")
    }


    if (UCCcheck === true) {
        var check = 0
        var passwordCheck = false

        for (var key in userInfo) {
            if (userInfo[key]["email"] === newEmail) {
                check = check + 1
            }
        }

        if (newPword.length < 6) {
            alert("Your password is too short. Please enter a password that is 6 characters or longer.")
        } else {
            passwordCheck = true
        }


        if (check == 0 && passwordCheck == true) {
            newUser = {
                "email": newEmail,
                "password": newPword,
                "admin": false
            }

            newUserNum = parseInt(userNums.length) + 1
            newUserNum = newUserNum.toString()

            database.ref('accounts/' + newUserNum + '/').set(newUser)

            // sidenavTrigger.style.display = "block"
            songBTN.style.display = "inline-block"
            cardDisplay.style.display = "block"
            sidenavBTN.style.display = "inline-block"
            changeBTN.style.display = "inline-block"

            newUserBTN.style.display = "none"
            loginBTN.style.display = "none"

            activeuser = newEmail

            const modal = document.querySelector("#signup-modal")
            M.Modal.getInstance(modal).close();

            document.getElementById("signUpForm").reset();

        } else if (check != 0) {
            alert("Pre-existing email. Please enter a new email or log in.")
        }


    }
});




















// <!-- admin password reset -->

// description: grabs the email and new password of the user. Then, it checks the list
// of emails, grabs the key of the user's email and then uses the key to update the
// corresponding Firebase child (with the same key) with the new password. If no email
// exists, an alert message is given.
// parameters: string, generalized function with e as argument
// pre-conditions
// post-conditions: the page cannot reload (e.preventDefault)

resetForm.addEventListener("submit", (e) => {

    e.preventDefault()

    resetEmail = resetForm["reset_email"].value
    resetPword = resetForm["reset_password"].value

    resetCheck = false

    for (key in userInfo) {
        if (resetEmail == userInfo[key]["email"]) {
            resetUser = {
                "email": resetEmail,
                "password": resetPword,
                "admin": false
            }
            database.ref('accounts/' + key + '/').set(resetUser)
            resetCheck = true
            const modal = document.querySelector("#reset-modal")
            M.Modal.getInstance(modal).close();
            document.getElementById("resetForm").reset();
            break
        }
    }

    if (resetCheck == false) {
        alert("Not an email with an account.")
    }


    
});




















// <!-- non-admin password reset -->

// description: grabs the email and new password of the user. Then, it checks the list
// of emails, grabs the key of the user's email and then uses the key to update the
// corresponding Firebase child (with the same key) with the new password. If no email
// exists, an alert message is given.
// parameters: string, generalized function with e as argument
// pre-conditions
// post-conditions: the page cannot reload (e.preventDefault)

// changeForm.addEventListener("submit", (e) => {

//     e.preventDefault()

//     changeEmail = changeForm["change_email"].value
//     changeOldPassword = changeForm["change_old_password"].value
//     changeNewPassword = changeForm["change_new_password"].value

//     changeCheck = false

//     for (key in userInfo) {
//         if (changeEmail == userInfo[key]["email"] && changeOldPassword == userInfo[key]["password"]) {
//             changeUser = {
//                 "email": changeEmail,
//                 "password": changeNewPassword,
//                 "admin": false
//             }
//             database.ref('accounts/' + key + '/').set(changeUser)
//             changeCheck = true
//             const modal = document.querySelector("#change-modal")
//             M.Modal.getInstance(modal).close();
//             break
//         } else if (changeEmail == userInfo[key]["email"] && changeOldPassword != userInfo[key]["password"]) {
//             alert("Incorrect password. If you have forgotten your password, ask an admin to reset it for you.")
//         } else if (changeEmail != userInfo[key]["email"]) {
//             alert("Not an email with an account.")
//         }
//     }

//     if (changeCheck == false) {
//         alert("Not an email with an account.")
//     }


    
// });




















// <!-- fake logout -->

// description: logs the user out by hiding all the content and displaying only the
// buttons for logging in/signing up
// parameters: string, generalized function with e as argument
// pre-conditions
// post-conditions

logoutBTN.addEventListener("click", (e) => {


    // sidenavTrigger.style.display = "none"
    songBTN.style.display = "none"
    cardDisplay.style.display = "none"
    adminSugBTN.style.display = "none"
    sugDisplay.style.display = "none"
    createCardBTN.style.display = "none"
    sidenavBTN.style.display = "none"
    resetBTN.style.display = "none"
    changeBTN.style.display = "none"

    newUserBTN.style.display = "inline-block"
    loginBTN.style.display = "inline-block"



});






















// // list of card info
// cardInfo = [
//     {"title": "Ape Dos Mil",
//     "band": "Glassjaw",
//     "genre": "Alternative",
//     "approved": true,
//     "description": "music"
//     },
//     {"title": "badsong",
//     "band": "a band",
//     "genre": "jazz",
//     "approved": false,
//     "description": "this song is not approved"
//     },
//     {"title": "song",
//     "band": "band",
//     "genre": "genre",
//     "approved": true,
//     "description": "description"
//     },
//     {"title": "suggestion",
//     "band": "napalm death",
//     "genre": "swing revival",
//     "approved": false,
//     "description": "pioneering swing revival act Napalm Death back at it again with their spicy tunage"
//     }
// ]




















// list of IDs
idList = []
conceptsList = []




accNums = []

// generate cards

//Works the same as previous case, but now a function 
 	//creates a card and returns it with the program can use. 
 	//This is nice because you can now use parameters to modify the
 	//card contents. 
 	//Note: There is a unique format for adding strings using `` 
 	//		notation
    //Note: You can also use DOM to build the element
     
// description: creates an 'approved' song card using data pulled from firebase.
// the id of the card, genre + 'CardFor' + title, is then pushed to a list of ids and
// the concept of the card is pushed to a list of concepts
// parameters: strings
// pre-conditions: inputs must be strings
// post-conditions

 	function createCard(title, band, genre, description, link, concepts) {
        const card = `

                <div id = "${genre}CardFor${title}" class = "container" style="display: none; margin-bottom: 50px">
                        <h2 class = "center-align">${genre}</h2>

                                <div class="card hoverable" style = "height: 520px">

                                    <div class="card-image">
                                        <div class="video-container">
                                            <iframe width="560" height="315" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <!-- <a href="#" class="halfway-fab btn-floating pink pulse">
                                            <i class="material-icons">favorite</i>
                                        </a> -->
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title">${band} - ${title}</span>
                                        <p>Concept: ${concepts}</p>
                                        <p>${description}</p>
                                        <p class='card-text hide' id='${title}Hidden' style='display: none'>AAAAAAAAAAA</p>
                                    </div>
                                    <div class="card-action">
                                        <a id='${title}HiddenBTN' href="#">See More</a>
                                        <a href="https://www.youtube.com/watch?v=HL9kaJZw8iw&ab_channel=lambofgodVEVO">Laid to Rest</a>
                                    </div>
                                </div>

                    </div>
            `;

            idList.push(genre + "CardFor" + title)
            conceptsList.push(concepts)

            return card

    }

   
   //creates an extra div in the structure
   //Suggestion: Remove the div for the col in the 
   //const then embed in that.  It will require you set the
   //class name. 
//    newDiv = document.createElement("div")
//    newDiv.innerHTML = createCard("AAAA","AA");
//    cardDisplay.innerHTML = createCard("BBBB","BB") + createCard("CCCC","CC");
//    cardDisplay.appendChild(newDiv)

   //We can use a loop to add a large amount of 
    // for (i = 0; i < cardInfo.length; i = i + 1) {
    //     if (cardInfo[i]["approved"] == true) {
    //         newDiv = document.createElement("div")
    //         newDiv.innerHTML = createCard(cardInfo[i]["title"],cardInfo[i]["band"],cardInfo[i]["genre"],cardInfo[i]["description"])
    //         cardDisplay.appendChild(newDiv)
    //     }
    // }
    






















// numbers for suggestions
sugNums = []






// generate suggestion cards

// description: creates a 'non-approved' song card using data pulled from firebase.
// parameters: strings
// pre-conditions: inputs must be strings
// post-conditions

 	function createSugCard(title, band, genre, description, link, concepts, number) {
        const card = `

                <div class="container">
                        <h2 class = "center-align">${genre}</h2>
                                <div class="card hoverable" style = "height: 520px; margin-bottom: 50px">

                                    <div class="card-image">
                                        <div class="video-container">
                                            <iframe width="560" height="315" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <!-- <a href="#" class="halfway-fab btn-floating pink pulse">
                                            <i class="material-icons">favorite</i>
                                        </a> -->
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title">${band} - ${title}</span>
                                        <p>Concept: ${concepts}</p>
                                        <p>${description}</p>
                                    </div>
                                    <div class="card-action">
                                        <div class = "row">
                                            <a href="#" id="acceptBTN${number}" class="green btn">Accept Suggestion</a>
                                        </div>
                                        <div class = "row">
                                            <a href="#" id="rejectBTN${number}" class="red darken-1 btn">Reject Suggestion</a>
                                        </div>
                                    </div>
                                </div>
                    </div>
            `;


            return card

    }



    //     for (i = 0; i < cardInfo.length; i = i + 1) {
    //     if (cardInfo[i]["approved"] == false) {
    //         newSugDiv = document.createElement("div")
    //         newSugDiv.innerHTML = createSugCard(cardInfo[i]["title"],cardInfo[i]["band"],cardInfo[i]["genre"],cardInfo[i]["description"],i.toString())
    //         sugDisplay.appendChild(newSugDiv)
    //         sugNums.push(i.toString())

    //         // var numAcceptBTN = "acceptBTN" + i.toString()
    //         // var numRejectBTN = "rejectBTN" + i.toString()
    //         // const numAcceptBTN = document.getElementById("numAcceptBTN")
    //     }
    // }














    





    //a reference to my database pointing the Question section

// description: this code pulls the 'songs' data from firebase when the page is loaded
// or when the firebase data is changed. It then clears the areas with cards in them
// (cardDisplay and sugDisplay).
// Description continued below
// parameters: string, generalized function
// pre-conditions: firebase data is accessible (read/write is enabled) and is only
// composed of strings
// post-conditions: firebase data is not changed at all

	var songs = firebase.database().ref('songs/');

	songs.on('value', (snapshot) => {
		data = snapshot.val();
        // console.log(data)
        
        cardDisplay.innerHTML = ""
        sugDisplay.innerHTML = ""

		//console.log(data["q1"]["question"]);
		//This will loop through the database
		//You could modify this however you want. 
		
		//"Faking" it for the IA -
		// You might run into technical challenges and don't be 
		// afraid to create work arounds which might not be 
		// technically ideal, but will allow you to show your
		// skills. 

		//For example:
		//
		// Trouble with database - preload elements in a list in
		// your program
		// Image Access - You can house them in Firebase, but if you
		// are having problems put them on a git repo

		// When you create and showcase your product be deliberate 
		// how you set things up to showcase what works.  

        //This is special loop to go through a collection

// description: loops through each dictionary in the pulled data (by looping through
// the keys). If the song/dictionary is approved, a new div is created, and is given
// the value of a card, generated using the createCard function. createCard is given
// the data from the song/dictionary, and then the new div (the card) is appended to
// cardDisplay. The key is pushed to a list of ids of approved cards (accNums)
// description continued below

		for (var key in data) {

            // console.log("**&")
            if (data[key]["approved"] == true) {

                //console.log(data)
                newDivFB = document.createElement("div")
                newDivFB.innerHTML = createCard(data[key]["title"],data[key]["band"],data[key]["genre"],data[key]["description"],data[key]["link"],data[key]["concepts"])

                cardDisplay.appendChild(newDivFB)
                accNums.push(key.toString())

            }

// description: if the song/dictionary is not approved, a new div is created, and is
// given the value of a card, using the createsugCard function. createsugCard is given
// the data from the song/dictionary, and then the new div (the card) is appended to
// sugDisplay. The key is pushed to a list of ids of non-approved cards (sugNums)
// description continued below

            if (data[key]["approved"] == false) {

                newDivSugFB = document.createElement("div")
                newDivSugFB.innerHTML = createSugCard(data[key]["title"],data[key]["band"],data[key]["genre"],data[key]["description"],data[key]["link"],data[key]["concepts"],key.toString())

                sugDisplay.appendChild(newDivSugFB)
                sugNums.push(key.toString())
                // console.log(newDivSugFB)
            }
        }
        // console.log(sugNums)


// description: this loops through sugNums (the list of ids of all non-approved cards)
// so that the suggested cards can be approved or rejected

        for (i = 0; i < sugNums.length; i = i + 1) {
            
            indS = sugNums[i]
            indI = parseInt(indS)

            // NOTE THAT THIS ERROR HAS BEEN FIXED
            // here's the issue
            // this loop automatically goes to the final suggestion
            // in this case, sugNums[i] is always '5'
            // so i'm always updating the final suggestion

            var x = document.getElementById('acceptBTN' + indS)


// description: grabs the id of the card whose 'approve' button was clicked. The data
// from the card is grabbed, with 'approved' being set to 'true'. The firebase entry
// with the same id as the card will be updated so that 'approved' is 'true'. Then the
// page will update so that the card no longer appears as a suggestion, but will
// appear as an approved card under a genre/concept heading.
// parameters: string, generalized function
// pre-conditions
// post-conditions: page is not reloaded
    
            x.addEventListener("click", (e) => {
                e.preventDefault()

                buttonID = e.target.id.replace("acceptBTN","")

                // console.log(buttonID)




                // PUSH DATA TO FIREBASE TO IT CAN UPDATE THE PAGE IN REAL TIME



                firebase.database().ref('songs/' + buttonID + '/').set({
                    "title": data[buttonID]["title"],
                    "band": data[buttonID]["band"],
                    "genre": data[buttonID]["genre"],
                    "description": data[buttonID]["description"],
                    "link": data[buttonID]["link"],
                    "concepts": data[buttonID]["concepts"],
                    "approved": true
                });
              
                // WHAT DOES ALL OF THIS DO???????

                // Write the new post's data simultaneously in the posts list and the user's post list.
                
                // var updates = {};
                // updates['/songs/' + postKey] = postData;
              
                // return firebase.database().ref().update(updates);

            });



            var y = document.getElementById('rejectBTN' + indS)

// description: grabs the id of the card whose 'reject' button was clicked. The
// firebase entry with the same id will be deleted, so the card will no longer be
// displayed on the page.
// parameters: string, generalized function
// pre-conditions
// post-conditions: page is not reloaded
    
            y.addEventListener("click", (e) => {
                e.preventDefault()

                buttonID = e.target.id.replace("rejectBTN","")

                firebase.database().ref('songs/' + buttonID + '/').remove()
                
                // PUSH DATA TO FIREBASE TO IT CAN UPDATE THE PAGE IN REAL TIME
            });
    
        }

        // console.log(data)



    });




















// <!-- genre/concept buttons -->

// description: the following buttons are all designed to do the same thing: generate
// the corresponding song cards when the appropriate button is clicked.
// ie. if 'Alternative' is clicked, all 'alternative genre' songs are displayed.
// Furthermore, the button also hides any cards from different genres/concepts.
// Thus, if 'Alternative' is clicked, then 'Hardcore/Metalcore', the alternative songs
// will be displayed first, then the hardcore songs will be displayed and the
// alternative songs hidden.
// parameters: string, generalized function
// pre-conditions
// post-conditions: page is not reloaded


alternativeBTN.addEventListener("click", (e) => {

    e.preventDefault()

    for (i = 0; i < idList.length; i = i + 1) {

        if (idList[i].substring(0,11) == "Alternative") {

            document.getElementById(idList[i]).style.display = "block";
        } else {
            document.getElementById(idList[i]).style.display = "none";
        }
    }
    
    
    
});










metalBTN.addEventListener("click", (e) => {
    e.preventDefault()
    for (i = 0; i < idList.length; i = i + 1) {
        if (idList[i].substring(0,5) == "Metal") {
            document.getElementById(idList[i]).style.display = "block";
        } else {
            document.getElementById(idList[i]).style.display = "none";
        }
    } 
});










hardcoreBTN.addEventListener("click", (e) => {

    e.preventDefault()

    for (i = 0; i < idList.length; i = i + 1) {

        if (idList[i].substring(0,18) == "Hardcore/Metalcore") {

            document.getElementById(idList[i]).style.display = "block";
        } else {
            document.getElementById(idList[i]).style.display = "none";
        }
    }
    
    
    
});










chromaticBTN.addEventListener("click", (e) => {

    e.preventDefault()

    for (i = 0; i < idList.length; i = i + 1) {

        if (conceptsList[i] == "chromaticism") {

            document.getElementById(idList[i]).style.display = "block";
        } else {
            document.getElementById(idList[i]).style.display = "none";
        }
    }
    
    
    
});










noiseBTN.addEventListener("click", (e) => {

    e.preventDefault()

    for (i = 0; i < idList.length; i = i + 1) {

        if (conceptsList[i] == "noise") {

            document.getElementById(idList[i]).style.display = "block";
            
        } else {
            document.getElementById(idList[i]).style.display = "none";
        }
    }

    
    
});










twoFiveBTN.addEventListener("click", (e) => {

    e.preventDefault()

    for (i = 0; i < idList.length; i = i + 1) {

        if (conceptsList[i] == "two-five progression") {

            document.getElementById(idList[i]).style.display = "block";
        } else {
            document.getElementById(idList[i]).style.display = "none";
        }
    }
    
    
    
});











modalInterchangeBTN.addEventListener("click", (e) => {

    e.preventDefault()

    for (i = 0; i < idList.length; i = i + 1) {

        if (conceptsList[i] == "modal interchange") {

            document.getElementById(idList[i]).style.display = "block";
        } else {
            document.getElementById(idList[i]).style.display = "none";
        }
    }
    
    
    
});










fiveFourTimeBTN.addEventListener("click", (e) => {

    e.preventDefault()

    for (i = 0; i < idList.length; i = i + 1) {

        if (conceptsList[i] == "5/4 time signature") {

            document.getElementById(idList[i]).style.display = "block";
        } else {
            document.getElementById(idList[i]).style.display = "none";
        }
    }
    
    
    
});









    










   // <!-- song submission - create card -->

// description: grabs the data from the song suggestion form (ie. the data suggested
// by a user) and creates a dictionary called 'suggestion' (where 'approved' is
// 'false'). Then, the function searches through accNums and sugNums (the lists of ids
// of approved and non-approved cards) to find the highest id/key. A new entry is
// created on firebase, with a key equal to one higher than that of the previous
// highest id/key. The 'suggestion' dictionary is pushed to this new entry, and thus
// the page will update in real time and display the new suggestion
// parameters: string, generalized function
// pre-conditions
// post-conditions: page is not reloaded

genreList = ["Alternative", "Metal", "Hardcore/Metalcore"]

songForm.addEventListener("submit", (e) => {

    e.preventDefault()

    suggestedSong = songForm["song_title"].value
    suggestedBand = songForm["band_name"].value
    suggestedGenre = songForm["genre"].value
    suggestedDesc = songForm["desc"].value
    suggestedLink = songForm["song_link"].value
    suggestedConcepts = songForm["song_concepts"].value

    suggestion = {
        "title": suggestedSong,
        "band": suggestedBand,
        "genre": suggestedGenre,
        "approved": false,
        "description": suggestedDesc,
        "link": suggestedLink,
        "concepts": suggestedConcepts
    }


    sugID = ""
    accLast = accNums.length - 1
    sugLast = sugNums.length - 1




    if (sugNums.length == 0) {
        sugID = parseInt(accNums[accLast]) + 1
    } else if (accNums.length == 0) {
        sugID = parseInt(sugNums[accLast]) + 1
    } else {
        if (parseInt(accNums[accLast]) > parseInt(sugNums[sugLast])) {
            sugID = parseInt(accNums[accLast]) + 1
        } else {
            sugID = parseInt(sugNums[sugLast]) + 1
        }
    }

    sugID = sugID.toString()

    // console.log(sugID)
    // console.log(accNums)
    // console.log(sugNums)
    // console.log("accLast " + accNums[accLast])
    // console.log("sugLast " + sugNums[sugLast])



    // FIX THIS SO YOU CAN GET THE LAST KEY IN DATABASE + 1
    database.ref('songs/' + sugID + '/').set(suggestion)

    // cardInfo.push(suggestion)

    // console.log(cardInfo)

    // newDiv = document.createElement("div")
    // newDiv.innerHTML = createCard(suggestedSong,suggestedBand,suggestedGenre)
    // cardDisplay.appendChild(newDiv)

    const modal = document.querySelector("#song-modal")
    M.Modal.getInstance(modal).close();
    document.getElementById("songForm").reset();


});




















// description: displays the suggestion cards for the admin
// parameters: string, generalized function
// pre-conditions
// post-conditions

adminSugBTN.addEventListener("click", (e) => {

    sugDisplay.style.display = "block"

});























// description: grabs the data from the song creation form (ie. the data suggested
// by an admin) and creates a dictionary called 'creation' (where 'approved' is
// 'true'). Then, the function searches through accNums and sugNums (the lists of ids
// of approved and non-approved cards) to find the highest id/key. A new entry is
// created on firebase, with a key equal to one higher than that of the previous
// highest id/key. The 'creation' dictionary is pushed to this new entry, and thus
// the page will update in real time and display the new creation whenever an
// appropriate genre/concept button is clicked
// parameters: string, generalized function
// pre-conditions
// post-conditions: page is not reloaded

createCardForm.addEventListener("submit", (e) => {

    e.preventDefault()
    sugDisplay.style.display = "block"
    

    createdSong = createCardForm["create_song_title"].value
    createdBand = createCardForm["create_band_name"].value
    createdGenre = createCardForm["create_genre"].value
    createdDesc = createCardForm["create_desc"].value
    createdLink = createCardForm["create_link"].value
    createdConcepts = createCardForm["create_concepts"].value

    creation = {
        "title": createdSong,
        "band": createdBand,
        "genre": createdGenre,
        "approved": true,
        "description": createdDesc,
        "link": createdLink,
        "concepts": createdConcepts
    }


    createID = ""
    accLast = accNums.length - 1
    sugLast = sugNums.length - 1



    if (parseInt(accNums[accLast]) > parseInt(sugNums[sugLast])) {
        createID = parseInt(accNums[accLast]) + 1
    } else {
        createID = parseInt(sugNums[sugLast]) + 1
    }

    createID = createID.toString()

    // console.log(createID)



    // FIX THIS SO YOU CAN GET THE LAST KEY IN DATABASE + 1
    database.ref('songs/' + createID + '/').set(creation)

    // cardInfo.push(suggestion)

    // console.log(cardInfo)

    // newDiv = document.createElement("div")
    // newDiv.innerHTML = createCard(suggestedSong,suggestedBand,suggestedGenre)
    // cardDisplay.appendChild(newDiv)

    const modal = document.querySelector("#create-card-modal")
    M.Modal.getInstance(modal).close();
    document.getElementById("createCardForm").reset();



});





















// <!-- creation of genre dropdowns -->

// description: fffff
// parameters: string, generalized function with e as argument
// parameter is string, argument is 'submit'
// pre-conditions
// post-conditions: the page cannot reload (e.preventDefault)

// var genreListPull = firebase.database().ref('genres/');

// genreListPull.on('value', (snapshot) => {
//     genreListFB = snapshot.val();
//     console.log(genreListFB)

//     // // CHANGETHISBUTGENRE


//     // for (var key in genreListFB) {
//     //     // CHANGETHISBUTGENRE
//     //     var newOptionHeader = document.createElement("option")

//     //     for (key2 in genreListFB[key]) {
//     //         var newOption = document.createElement("li")
//     //         var newOptionA = document.createElement("a")
//     //         newOptionA.innerHTML = genreListFB[key][key2]
//     //         newOption = newOption.appendChild(newOptionA)
//     //         console.log(genreListFB[key][key2])
//     //         CHANGETHISBUTGENRE.appendChild(newOption)

//     //     }

//     // }


//     for (key in genreListFB) {

//         var newli = document.createElement("li");
//         var newa = document.createElement("a")
//         newa.innerHTML = key;
//         newli.appendChild(newa);
//         CHANGETHISBUTGENRE.appendChild(newli);


//         for (key2 in genreListFB[key]) {

//             var newli = document.createElement("li");
//             var newa = document.createElement("a")
//             newa.innerHTML = genreListFB[key][key2];
//             newli.appendChild(newa);
//             CHANGETHISBUTGENRE.appendChild(newli);

//         }
//     }

    
//     const nonSelect = `

//             <option value="" disabled>genre</option>
//         `;


//     const select = `

//             <option value="genre">genre</option>
//         `;

// });


















// var genreListPull = firebase.database().ref('genres/');




// document.addEventListener('DOMContentLoaded', function() {
//     genreListPull.on('value', (snapshot) => {
//         genreListFB = snapshot.val();
//         console.log(genreListFB)

//         genDropDown();

//     })
// });
  

//   function genDropDown() {
//     console.log("TEST")
 
//     // const dropdown = document.getElementById("dropdown1")

//     for (key in genreListFB) {

//         var newli = document.createElement("li");
//         var newa = document.createElement("a")
//         newa.innerHTML = key;
//         newli.appendChild(newa);
//         CHANGETHISBUTGENRE.appendChild(newli);


//       for (key2 in genreListFB[key]) {

//         var newli = document.createElement("li");
//         var newa = document.createElement("a")
//         newa.innerHTML = genreListFB[key][key2];
//         newli.appendChild(newa);
//         CHANGETHISBUTGENRE.appendChild(newli);

//       }
//     }

//   }