let dates=[new Date("Oct 17, 2020 12:13:00").getTime(),new Date("Dec 19, 2020 12:13:00").getTime(),new Date("Feb 13, 2021 12:13:00").getTime(),new Date("Apr 17, 2021 12:13:00").getTime(),new Date("Jul 6, 2021 12:13:00").getTime()];
let endDAtes=[new Date("Nov 2, 2020 00:00:00").getTime(),new Date("Jan 4, 2021 00:00:00").getTime(),new Date("Mar 1, 2021 00:00:00").getTime(),new Date("May 3, 2021 00:00:00").getTime(),new Date("Sep 1, 2021 00:00:00").getTime()];
var i = 0;
var j = 0;

var x = setInterval(function() {
var vacation = dates[i];
var endVacation = endDAtes[j];
var now = new Date().getTime();
var distance = vacation - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("clock").innerHTML = days + " jours, " + hours + " heures, " + minutes + " minutes, " + seconds + " secondes ";
if (distance <= 0 && endVacation-now >= 0) {
	i++;
	document.getElementById("vacation").innerHTML = "🎉C'est les vacances🎉"
}
if (distance <= 0 && endVacation-now <= 0){
	j++;
	document.getElementById("vacation").innerHTML = "";
}
})
