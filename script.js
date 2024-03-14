const menu = document.getElementById("menu");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  menu.classList.add("active");
}

function closeNav() {
  menu.classList.remove("active");
}

//ci dessous la couleur de la page à l'arrivé de l'utilisateur sur le site//
const homeBody = document.getElementById("background");
const backgroundColorDoc = `#82c0ccff`;
homeBody.style.backgroundColor = backgroundColorDoc;
// ci dessous creation des variables pour display none la page du quiz avant selection du pseudo utilisateur//
const headerDisplay = document.querySelector("header");
const mainDisplay = document.querySelector("main");
headerDisplay.style.display = "none";
mainDisplay.style.display = "none";
