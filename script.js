const menu = document.getElementById("menu");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav(){
    menu.classList.add("active");
}

function closeNav(){
    menu.classList.remove("active")
}

const startTimer = 5
let timer = startTimer * 60

const timerElement = document.querySelector(".timer")

setInterval(timing, 1000);

function timing () {
const temps = 0;
  let minutes = parseInt(temps / 60, 10);
  let secondes = parseInt(temps % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1

  timerElement.classList.

  console.log(".timer")

}

