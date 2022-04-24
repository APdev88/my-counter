let secDisplay = document.getElementById("sec-el");
let msDisplay = document.getElementById("ms-el");

const startEl = document.getElementById("start-el");
const stopEl = document.getElementById("stop-el");
const resetEl = document.getElementById("reset-el");

let ms = 00;
let sec = 00;

let interval;

startEl.addEventListener("click", function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

stopEl.addEventListener("click", function () {
  clearInterval(interval);
});

resetEl.addEventListener("click", function () {
  ms = 00;
  sec = 00;
  msDisplay.innerHTML = "00";
  secDisplay.innerHTML = "00";
});

function startTimer() {
  ms++;
  if (ms <= 9) {
    msDisplay.innerHTML = "0" + ms;
  } else {
    msDisplay.innerHTML = ms;
  }

  if (ms >= 99) {
    ms = 00;
    sec++;
    secDisplay.innerHTML = "0" + sec;
  }

  if (sec > 9) {
    secDisplay.innerHTML = sec;
  }
}
