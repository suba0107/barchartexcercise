"use strict";
document.addEventListener("DOMContentLoaded", start);
const bars = [];
console.log(bars);
let queueSize = 1;
let bar;

function start() {
  randomize();
}

function heightHandler() {
  for (let counter = 0; counter < 40; counter++) {
    bar = document.querySelector(`.bar:nth-child(${counter + 1})`);
    console.log("Height");
    //set the height of the bar
    bar.style.setProperty("--height", bars[counter]);
    bar.style.setProperty("--saturate", counter);
  }
}

function randomize() {
  queueSize = Math.floor(Math.random() * 32);
  console.log(queueSize);
  counting();
}

function counting() {
  bars.push(queueSize);
  if (bars.length < 41) {
    randomize();
    heightHandler();
  } else if ((bars.length = 41)) {
    bars.shift();
    setTimeout(randomize, 1000);
    heightHandler();
  }
  console.log(bars);
}
