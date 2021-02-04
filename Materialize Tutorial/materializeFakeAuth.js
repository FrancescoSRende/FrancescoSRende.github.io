<!DOCTYPE html>
<html>
<head>
	<title></title>

	   <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

</head>
<body>



	<div>

		



</body>
</html>
<!-- The core Firebase JS SDK is always required and must be listed first -->
	<script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js"></script>
	<script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-database.js"></script>

<script>

        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyAawOyWvGEFjDqmtWIHxcGrJqjlhFpqq3U",
            authDomain: "materializedatabase.firebaseapp.com",
            projectId: "materializedatabase",
            storageBucket: "materializedatabase.appspot.com",
            messagingSenderId: "187728368929",
            appId: "1:187728368929:web:4a454eba197fced2d09a60"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        database = firebase.database();



	var bands =  [
					{ 
						"name": "Faith No More",
						"genre": "Alternative Metal, Funk Metal", 
						"good album": "The Real Thing", 
						"good song 1": "Epic",
                        "good song 2": "Midlife Crisis", 
						"link 1": "https://www.youtube.com/watch?v=ZG_k5CSYKhg&ab_channel=UPROXXIndieMixtape",
                        "link 2": "https://www.youtube.com/watch?v=U8b88US-6ts&ab_channel=UPROXXIndieMixtape"
					},
					{
						"name": "Between the Buried and Me",
						"genre": "Progressive Death Metal, Progressive Metalcore", 
						"good album": "Colors", 
						"good song 1": "Ants of the Sky", 
                        "good song 2": "White Walls",
						"link 1": "https://www.youtube.com/watch?v=7CcOcR-u6Kk&ab_channel=BetweentheBuriedandMe",
                        "link 2": "https://www.youtube.com/watch?v=OgBJOG8mLMw&ab_channel=BetweentheBuriedandMe"
					},
					{
						"name": "Black Dahlia Murder",
						"genre": "Melodic Death Metal, Deathcore", 
						"good album": "Nocturnal", 
						"good song 1": "Sunless Empire", 
                        "good song 2": "Everything Went Black",
						"link 1": "",
                        "link 2": ""
					}
				]
			

	//This generates a Promise - Process in web-development which is generated when a task is
	//being done that takes time

    //you can store the promise in a variable (x) and then access it later on
    x = database.ref().set({
   		bands
  	})

    //the above '.then' runs right after the initial promise is set, but as a result
    //it prints 'result' before result has a value (before it is defined)

    // x = database.ref().set({
   	// 	users
  	// })


    //this code accesses the database, then the instance function 'once' accesses the
    //database and accesses its values, *then* returns those values in the variable
    //'snapshot'
    //snapshot is then logged to the console

    //'once' will pull the data once and only once
    //'on' pulls the data when the page is loaded and then listens for changes in the
    //database

    //this x is a variable containing a promise from above
  	console.log(x)

    //this '.then', since it is being used in a separate block of code from the initial
    //use of the promise variable x, only runs once the promise has been fulfilled
    //(only once the database has been set and can return something)
  	x.then((val) => {
  		console.log("Database updated!")

  		
  		firebase.database().ref().once('value').then((snapshot) => {
  			console.log(snapshot.val())

  		});
  	});

</script>
