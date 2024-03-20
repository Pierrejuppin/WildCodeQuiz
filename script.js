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

const quizData = [
  {
    question: "1. Qui a Racheté Ghithub l'an dernier ?",
    options: ["Apple", "Microsoft", "IBM", "Google"],
    answer: "Microsoft"
  },
  {
    question: "2. Que signifie W.W.W  ?",
    options: ["Wide World Web", "Web World Wide","World Wide Web", "Web Wide World"],
    answer: "World Wide Web"
  },
  {
    question: "3. Que signifie I.P ?",
    options: ["Internet Protocol", "Yip Kai-man", "Informatique Protocol", "International Protocol"],
    answer: "Internet Protocol"
  },
  {
    question: "4. Quand est née officielement Internet?",
    options: ["1988","1989","1982","1990"],
    answer: "1989",
  },
  {
    question: "5. Que veut dire l'acronyme du site MDN?",
    options: ["Médiathèque Départementale du Nord","Mozilla Div Nav","Mozilla Dossier Neuf","Mozilla Developer Network"],
    answer: "Mozilla Developer Network" ,
  },
  {
    question: "6. Laquelle de ces propositions n'est pas un navigateur?",
    options: ["WaterFox","MagellaNet","Vivaldi","Brave"],
    answer: "MagellaNet" ,
  },
  {
    question: "7. Qui est le créateur de JavaScript?",
    options: ["Brendan Peich","Brendan Eich","Jordan Eich","Jordan Peich"],
    answer: "Brendan Eich",
  },
  {
    question: "8. En quelle année est sortie la première version JavaScript?",
    options: ["1995","1997","1998","1996"],
    answer: "1996" ,
  },
  {
    question: "9. Qui est le créateur de PHP?",
    options: ["Rasmus Lerdorf","Rasmus Lesdorf","Rasmus Php","Peter Heins-Pazultek"],
    answer: "Rasmus Lerdorf" ,
  },
  {
    question: "10. En quelle année PHP a Officiellement été rendu publique?",
    options: ["1994","1995","1996","1994"],
    answer: "1995",
  },

];


const questionQuiz = document.querySelector('.question');
const responseQuiz = document.querySelectorAll('.reponse button');
const scoreQuiz = document.querySelector('.boxScore');
const imageQuiz = document.getElementById("questionImage");

let nowQuestionIndex = 0;
let score = 0;


function displayNowQuestion() {
  const nowQuestion = quizData[nowQuestionIndex];
    questionQuiz.textContent = nowQuestion.question;
    imageQuiz.src = nowQuestion.image;
    nowQuestion.options.forEach((option, index) => {
    responseQuiz[index].textContent = option;
  });
}

function updateScore() {
  scoreQuiz.textContent = `${score}/10`;
}

function checkAnswer(selectedAnswer) {
  const nowQuestion = quizData[nowQuestionIndex];
  if (selectedAnswer === nowQuestion.answer) {
    score++;

    updateScore();
  }  
  else {
    updateScore();
  
  } 
  
  nowQuestionIndex++;
  if (nowQuestionIndex < quizData.length) {
    displayNowQuestion();
  } 
  //else {}

}

window.onload = displayNowQuestion; 

responseQuiz.forEach(button => {
  button.addEventListener('click', function() {
    checkAnswer(this.textContent);
  });
});