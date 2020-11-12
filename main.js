let dates=[new Date("Oct 17, 2020 12:13:00").getTime(),new Date("Dec 19, 2020 12:13:00").getTime(),new Date("Feb 13, 2021 12:13:00").getTime(),new Date("Apr 17, 2021 12:13:00").getTime(),new Date("Jul 6, 2021 12:13:00").getTime()];
let endDAtes=[new Date("Nov 2, 2020 00:00:00").getTime(),new Date("Jan 4, 2021 00:00:00").getTime(),new Date("Mar 1, 2021 00:00:00").getTime(),new Date("May 3, 2021 00:00:00").getTime(),new Date("Sep 1, 2021 00:00:00").getTime()];
var i = 0;
var j = 0;


var x = setInterval(function() {
var vacation = dates[i];
var endVacation = endDAtes[j];
var now = new Date().getTime();
var distance = vacation - now;
var unit = document.getElementById("unit").value;
if (unit=="week"){
	var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
	var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 7)/(1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	if (weeks==0){
		document.getElementById("week").disabled=true;
		document.getElementById("unit").value="day";
	}else {
		document.getElementById("week").disabled=false;
		document.getElementById("day").disabled=false;
		document.getElementById("hour").disabled=false;
		document.getElementById("minute").disabled=false;
	}
	document.getElementById("clock").innerHTML = weeks + " semaines, " + days + " jours, " + hours + " heures, " + minutes + " minutes, " + seconds + " secondes ";
}else if (unit=="day"){
	var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
	var days = Math.floor(distance /(1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	if (weeks==0 && days==0){
		document.getElementById("week").disabled=true;
		document.getElementById("day").disabled=true;
		document.getElementById("unit").value="hour";
	}else {
		document.getElementById("day").disabled=false;
		document.getElementById("hour").disabled=false;
		document.getElementById("minute").disabled=false;
	}
	document.getElementById("clock").innerHTML = days + " jours, " + hours + " heures, " + minutes + " minutes, " + seconds + " secondes ";
}else if (unit=="hour"){
	var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
	var days = Math.floor(distance /(1000 * 60 * 60 * 24));
	var hours = Math.floor(distance / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	if (weeks==0 && days==0 && hours==0){
		document.getElementById("week").disabled=true;
		document.getElementById("day").disabled=true;
		document.getElementById("hour").disabled=true;
		document.getElementById("unit").value="minute";
	}else {
		document.getElementById("hour").disabled=false;
		document.getElementById("minute").disabled=false;
	}
	document.getElementById("clock").innerHTML = hours + " heures, " + minutes + " minutes, " + seconds + " secondes ";
}else if (unit=="minute"){
	var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
	var days = Math.floor(distance /(1000 * 60 * 60 * 24));
	var hours = Math.floor(distance / (1000 * 60 * 60));
	var minutes = Math.floor(distance / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	if (weeks==0 && days==0 && hours==0 && minutes==0){
		document.getElementById("week").disabled=true;
		document.getElementById("day").disabled=true;
		document.getElementById("hour").disabled=true;
		document.getElementById("minute").disabled=true;
		document.getElementById("unit").value="second";
	}else {
		document.getElementById("minute").disabled=false;
	}
	document.getElementById("clock").innerHTML = minutes + " minutes, " + seconds + " secondes ";
}else {
	var seconds = Math.floor(distance / 1000);
	document.getElementById("clock").innerHTML = seconds + " secondes ";
}
	
	
if (distance <= 0 && endVacation-now >= 0) {
	i++;
	document.getElementById("vacation").innerHTML = "🎉C'est les vacances🎉"
}
if (distance >= 0 && endVacation-now <= 0){
	j++;
	document.getElementById("vacation").innerHTML = "";
}
if (distance <= 0 && endVacation-now <= 0){
	j++;
	i++;
}
	
if (j==0){
	document.body.style.backgroundImage = "url(halloween.jpg)";
	document.body.style.color="white";
	document.getElementById("unitLabel").style.color="white";
}
	
if (j==1){
	document.body.style.backgroundImage = "url(noel.jpg)";
	document.body.style.color="white";
	document.getElementById("unitLabel").style.color="white";
}

if (j==2){
	document.body.style.backgroundImage = "url(ski.jpg)";
	document.body.style.color="yellow";
	document.getElementById("unitLabel").style.color="yellow";
}
	
if (j==3){
	document.body.style.backgroundImage = "url(paques.jpg)";
	document.body.style.color="yellow";
	document.getElementById("unitLabel").style.color="yellow";
}
	
if (j==4){
	document.body.style.backgroundImage = "url(vacances.jpg)";
	document.body.style.color="black";
	document.getElementById("unitLabel").style.color="white";
}

})
