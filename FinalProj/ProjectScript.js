document.getElementById("defaultOpen").click();
window.onscroll = function() {scrollFunction()};

function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementsByClassName("sidenav")[0].style.top = "0px";
	}
	else {
		document.getElementsByClassName("sidenav")[0].style.top = "55px";
	}
}