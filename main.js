const output = document.querySelector("#output");
console.log(output);
let clockBox = document.createElement("section");
console.log(clockBox);
document.clockBox.setAttribute("id", "clock");
let hours = document.createElement("a");
let minutes = document.createElement("a");
let seconds = document.createElement("a");
document.hours.setAttribute("id", "hours");
document.minutes.setAttribute("id", "minutes");
document.seconds.setAttribute("id", "seconds");

let hrs = new Date();
document.getElementById("#hours").innerHTML = hrs.getHours();

let mins = new Date();
document.getElementById("#minutes").innerHTML = hrs.getMinutes();

let secs = new Date();
document.getElementById("#seconds").innerHTML = hrs.getSeconds();

clockBox.appendChild(hours);
clockBox.appendChild(minutes);
clockBox.appendChild(seconds);

