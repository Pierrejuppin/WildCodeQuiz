const menuB = document.querySelector(".menu");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");

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

//ci dessous creation des variables pour display none la page du quiz avant selection du pseudo utilisateur//

const headerDisplay = document.querySelector("header");
const mainDisplay = document.querySelector("main");
headerDisplay.style.display = "none";
mainDisplay.style.display = "none";
const hideHome = document.querySelector(".homeContainer");
// hideHome.style.display = "none";

function openNav() {
  menuB.classList.add("active");
}

function closeNav() {
  menuB.classList.remove("active");
}

const startTimer = 5;
let timer = startTimer * 60;

const timerElement = document.querySelector(".timer");

setInterval(timing, 1000);

function timing() {
  const temps = 300;
  let minutes = parseInt(temps / 60, 10);
  let secondes = parseInt(temps % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  timerElement.innerText = `${minutes}:${secondes}`;
  temps = temps <= 0 ? 0 : temps - 1;

  timerElement.classList.console.log(".timer");
}

// ci dessous le passage de la page d'accueil -> Quizz//
let bodyBackgroundColor = document.getElementById("background");
let homeToQuiz = document.getElementsByClassName("goBtn");
function openQuiz() {
  hideHome.style.display = "none";
  headerDisplay.style.display = "block";
  mainDisplay.style.display = "block";
  bodyBackgroundColor.style.backgroundColor = "#16697aff";
}
//ci dessous le retour à l'accueil avec le bouton "redémarrer"
let quizToHome = document.getElementById("reStart");
function goBackHome() {
  hideHome.style.display = "block";
  headerDisplay.style.display = "none";
  mainDisplay.style.display = "none";
  bodyBackgroundColor.style.backgroundColor = "#82c0ccff";
}

let quizData= {
    quiz1 : {
        question : "la question1 ???????",
        reponse : "la reponse",
        option : ["q2?","q1?", "q3?"],
        },
    quiz2 : {
        question : "la question2 ???????",
        reponse : "la reponse",
        option : ["q2?","q1?", "q3?"],
        },
    quiz3 : {
        question : "la question3 ???????",
        reponse : "la reponse",
        option : ["q2?","q1?", "q3?"],
        },
    quiz4 : {
        question : "la question4 ???????",
        reponse : "la reponse",
        option : ["q2?","q1?", "q3?"],
        },
    quiz5 : {
        question : "la question5 ???????",
        reponse : "la reponse",
        option : ["q2?","q1?", "q3?"],
        },
    quiz6 : {
        question : "la question6 ???????",
        reponse : "la reponse",
        option : ["q2?","q1?", "q3?"],
        },
    quiz7 : {
        question : "la question7 ???????",
        reponse : "la reponse",
        option : ["q2?","q1?", "q3?"],
        },
    quiz8 : {
        question : "la question8 ???????",
        reponse : "la reponse",
        option : ["q2?","q1?", "q3?"],
        },
    quiz9 : {
        question : "la question9 ???????",
        reponse : "la reponse",
        option : ["q2?","q1?", "q3?"],
        },
    quiz10 : {
        question : "la question10 ???????",
        reponse : "la reponse",
        option : ["q2?","q1?", "q3?"],
        },
}


let question = document.querySelector(".question");
let quiz = document.createElement("div");
quiz.textContent = quizData.quiz6.question;
question.appendChild(quiz);

let answer6answer = document.querySelector(".reponseQA");
let answerA = document.createElement("div");
answerA.textContent = quizData.quiz6.reponse;
answer6answer.appendChild(answerA);


