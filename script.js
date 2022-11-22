"use strict";
let countSand = +prompt('Введите количество "песка" (в секундах):');
let t;
let time = document.getElementById("time");
function start() {
  time.innerHTML = countSand;
  countSand--;
  if (countSand <= 0) {
    clearInterval(t);
    alert("Ваше время истекло.");
  }
}
t = setInterval(start, 1000);

start();
