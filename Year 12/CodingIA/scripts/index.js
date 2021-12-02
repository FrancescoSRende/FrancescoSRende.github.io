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




document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
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






















// defining elements
const logoutBTN = document.getElementById("logoutBTN")
const newUserBTN = document.getElementById("newUserBTN")
const loginBTN = document.getElementById("loginBTN")
const songBTN = document.getElementById("songBTN")
const adminSugBTN = document.getElementById("adminSugBTN")
const createCardBTN = document.getElementById("createCardBTN")

const alternativeBTN = document.getElementById("alternativeBTN")

const loginForm = document.getElementById("loginForm")
const signUpForm = document.getElementById("signUpForm")
const songForm = document.getElementById("songForm")
const createCardForm = document.getElementById("createCardForm")

const cardDisplay = document.getElementById("cardDisplay")
const sugDisplay = document.getElementById("sugDisplay")

const sidenavBTN = document.getElementById("sidenavBTN")





















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
                songBTN.style.display = "inline-block"
                cardDisplay.style.display = "block"
                sidenavBTN.style.display = "inline-block"

                newUserBTN.style.display = "none"
                loginBTN.style.display = "none"
                if (users[i]["admin"] == true) {
                    adminSugBTN.style.display = "inline-block"
                    createCardBTN.style.display = "inline-block"
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
    songBTN.style.display = "inline-block"
    cardDisplay.style.display = "block"
    sidenavBTN.style.display = "inline-block"

    newUserBTN.style.display = "none"
    loginBTN.style.display = "none"


    const modal = document.querySelector("#signup-modal")
    M.Modal.getInstance(modal).close();


}
});




















// <!-- fake logout -->
logoutBTN.addEventListener("click", (e) => {


// sidenavTrigger.style.display = "none"
songBTN.style.display = "none"
cardDisplay.style.display = "none"
adminSugBTN.style.display = "none"
sugDisplay.style.display = "none"
createCardBTN.style.display = "none"
sidenavBTN.style.display = "none"

newUserBTN.style.display = "inline-block"
loginBTN.style.display = "inline-block"



});




















// <!-- alternative button -->
alternativeBTN.addEventListener("click", (e) => {


    // MAKES ONLY ALTERNATIVE SONGS VISIBLE
    
    
    
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





















// generate cards

//Works the same as previous case, but now a function 
 	//creates a card and returns it with the program can use. 
 	//This is nice because you can now use parameters to modify the
 	//card contents. 
 	//Note: There is a unique format for adding strings using `` 
 	//		notation
 	//Note: You can also use DOM to build the element
 	function createCard(title, band, genre, description) {
        const card = `

                <div class = "container" style="display: none">
                        <h2 class = "center-align">${genre}</h2>

                                <div class="card" style = "height: 530px">

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
                                        <p>${description}</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="https://en.wikipedia.org/wiki/Lamb_of_God_(band)">More Details</a>
                                        <a href="https://www.youtube.com/watch?v=HL9kaJZw8iw&ab_channel=lambofgodVEVO">Laid to Rest</a>
                                    </div>
                                </div>

                    </div>
           `;

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

 	function createSugCard(title, band, genre, description, number) {
        const card = `

                <div class="container">
                        <h2 class = "center-align">${genre}</h2>
                                <div class="card" style = "height: 530px">

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



        // for (i = 0; i < cardInfo.length; i = i + 1) {
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
	var songs = firebase.database().ref('songs/');

	songs.on('value', (snapshot) => {
		data = snapshot.val();
        console.log(data)
        
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
		for (var key in data) {

            if (data[key]["approved"] == true) {

                //console.log(data)
                newDivFB = document.createElement("div")
                newDivFB.innerHTML = createCard(data[key]["title"],data[key]["band"],data[key]["genre"],data[key]["description"])

                cardDisplay.appendChild(newDivFB)
            }


            if (data[key]["approved"] == false) {

                newDivSugFB = document.createElement("div")
                newDivSugFB.innerHTML = createSugCard(data[key]["title"],data[key]["band"],data[key]["genre"],data[key]["description"],key.toString())

                sugDisplay.appendChild(newDivSugFB)
                sugNums.push(key.toString())
                console.log(newDivSugFB)
            }
        }
        console.log(sugNums)



        for (i = 0; i < sugNums.length; i = i + 1) {

            var x = document.getElementById('acceptBTN' + sugNums[i])
    
            x.addEventListener("click", (e) => {
                e.preventDefault()
                console.log("click")
                data[i]["approved"] = true
                console.log(data[i])
                // PUSH DATA TO FIREBASE TO IT CAN UPDATE THE PAGE IN REAL TIME



                
                var postData = {
                    'title': data[i]['title'],
                    'band': data[i]['band'],
                    'genre': data[i]['genre'],
                    'description': data[i]['description'],
                    'approved': true
                };
              


                // WHAT DOES ALL OF THIS DO???????

                // Get a key for a new Post.
                var newPostKey = firebase.database().ref().child('posts').push().key;
                  
                // Write the new post's data simultaneously in the posts list and the user's post list.
                var updates = {};
                updates['/posts/' + newPostKey] = postData;
                updates['/user-posts/' + uid + '/' + newPostKey] = postData;
              
                return firebase.database().ref().update(updates);

            });



            var y = document.getElementById('rejectBTN' + sugNums[i])
    
            y.addEventListener("click", (e) => {
                e.preventDefault()
                
                // PUSH DATA TO FIREBASE TO IT CAN UPDATE THE PAGE IN REAL TIME
            });
    
        }

        console.log(data)



    });












    










   // <!-- song submission - create card -->

songForm.addEventListener("submit", (e) => {

    e.preventDefault()

    suggestedSong = songForm["song_title"].value
    suggestedBand = songForm["band_name"].value
    suggestedGenre = songForm["genre"].value
    suggestedDesc = songForm["desc"].value

    suggestion = {
        "title": suggestedSong,
        "band": suggestedBand,
        "genre": suggestedGenre,
        "approved": false,
        "description": suggestedDesc
    }



    // FIX THIS SO YOU CAN GET THE LAST KEY IN DATABASE + 1
    database.ref('songs/' + '5').set(suggestion)

    // cardInfo.push(suggestion)

    // console.log(cardInfo)

    // newDiv = document.createElement("div")
    // newDiv.innerHTML = createCard(suggestedSong,suggestedBand,suggestedGenre)
    // cardDisplay.appendChild(newDiv)

    const modal = document.querySelector("#song-modal")
    M.Modal.getInstance(modal).close();



});




















// <!-- button to let admins view suggested songs -->
adminSugBTN.addEventListener("click", (e) => {

    e.preventDefault()
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
    createDesc = createCardForm["create_desc"].value

    creation = {
        "title": createSong,
        "band": createBand,
        "genre": createGenre,
        "approved": true,
        "description": createDesc
    }

    cardInfo.push(creation)

    newDiv = document.createElement("div")
    newDiv.innerHTML = createCard(createSong,createBand,createGenre)
    cardDisplay.appendChild(newDiv)

    // newDiv = document.createElement("div")
    // newDiv.innerHTML = createCard(suggestedSong,suggestedBand,suggestedGenre)
    // cardDisplay.appendChild(newDiv)

    const modal = document.querySelector("#create-card-modal")
    M.Modal.getInstance(modal).close();



});