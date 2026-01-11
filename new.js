let number = document.getElementById("number");
let circle = document.querySelector("circle");

let counter = 0;
let target = 65; 

let radius = 70;
let circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

let interval = setInterval(() => {
  if (counter === target) {
    clearInterval(interval);
  } else {
    counter++;
    number.innerHTML = counter + "%";

    let offset = circumference - (circumference * counter) / 100;
    circle.style.strokeDashoffset = offset;
  }
}, 20);
