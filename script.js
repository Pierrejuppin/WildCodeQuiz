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

//ci dessous creation des const pour display none la page du quiz avant selection du pseudo utilisateur//
const headerDisplay = document.querySelector("header");
const mainDisplay = document.querySelector("main");
const hideHome = document.querySelector(".homeContainer");
headerDisplay.style.display = "none";
mainDisplay.style.display = "none";

function openNav() {
  menuB.classList.add("active");
}

function closeNav() {
  menuB.classList.remove("active");
}

let bodyBackgroundColor = document.getElementById("background");
let homeToQuiz = document.querySelectorAll(".buttonOpenQuizz");
for (let i = 0; i < homeToQuiz.length; i++) {
  homeToQuiz[i].addEventListener("click", function () {
    hideHome.style.display = "none";
    headerDisplay.style.display = "block";
    mainDisplay.style.display = "block";
    bodyBackgroundColor.style.backgroundColor = "#16697aff";
    if (mainDisplay.style.display === "block") {
      const fiveMinutes = 60 * 5,
        display = document.querySelector(".timer");
      startTimer(fiveMinutes, display);
    }
  });
}

function startTimer(duration, display) {
  let theTimer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(theTimer / 60, 10);
    seconds = parseInt(theTimer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--theTimer < 0) {
      theTimer = duration;
    }
  }, 1000);
}

window.onload = function () {
  displayNowQuestion();
};

const quizData = [
  {
    question: "1. Qui a Racheté Ghithub l'an dernier ?",
    options: ["Apple", "Microsoft", "IBM", "Google"],
    answer: "Microsoft",
    image: (src = "assets/GIT.jpg"),
  },
  {
    question: "2. Que signifie W.W.W  ?",
    options: [
      "Wide World Web",
      "Web World Wide",
      "World Wide Web",
      "Web Wide World",
    ],
    answer: "World Wide Web",
    image: (src = "assets/www.jpg"),
  },
  {
    question: "3. Que signifie I.P ?",
    options: [
      "Internet Protocol",
      "Yip Kai-man",
      "Informatique Protocol",
      "International Protocol",
    ],
    answer: "Internet Protocol",
    image: (src = "assets/IP.jpg"),
  },
  {
    question: "4. Quand est née officielement Internet?",
    options: ["1988", "1989", "1982", "1990"],
    answer: "1989",
    image: (src = "assets/naissanceWeb.jpg"),
  },
  {
    question: "5. Que veut dire l'acronyme du site MDN?",
    options: [
      "Médiathèque Départementale du Nord",
      "Mozilla Div Nav",
      "Mozilla Dossier Neuf",
      "Mozilla Developer Network",
    ],
    answer: "Mozilla Developer Network",
    image: (src = "assets/mdn.jpg"),
  },
  {
    question: "6. Laquelle de ces propositions n'est pas un navigateur?",
    options: ["WaterFox", "MagellaNet", "Vivaldi", "Brave"],
    answer: "MagellaNet",
    image: (src = "assets/navigateur.jpg"),
  },
  {
    question: "7. Qui est le créateur de JavaScript?",
    options: ["Brendan Peich", "Brendan Eich", "Jordan Eich", "Jordan Peich"],
    answer: "Brendan Eich",
    image: (src = "assets/createur javascript.jpg"),
  },
  {
    question: "8. En quelle année est sortie la première version JavaScript?",
    options: ["1995", "1997", "1998", "1996"],
    answer: "1996",
    image: (src = "assets/javascript.jpg"),
  },
  {
    question: "9. Qui est le créateur de PHP?",
    options: [
      "Rasmus Lerdorf",
      "Rasmus Lesdorf",
      "Rasmus Php",
      "Peter Heins-Pazultek",
    ],
    answer: "Rasmus Lerdorf",
    image: (src = "assets/php.jpg"),
  },
  {
    question: "10. En quelle année PHP a Officiellement été rendu publique?",
    options: ["1994", "1995", "1996", "1994"],
    answer: "1995",
    image: (src = "assets/lastphp.jpg"),
  },
];

const questionQuiz = document.querySelector(".question");
const responseQuiz = document.querySelectorAll(".reponse button");
const scoreQuiz = document.querySelector(".boxScore");
const imageQuiz = documents.getElementById("questionImage");
/* const form = document.querySelector("#formQuiz"); */

let nowQuestionIndex = 0;
let score = 0;

/* form.addEventListener("submit", (event) => {
      event.preventDefault();
}
); */


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
  else {
          alert(`Bravo ! ${form} ${score}/10`);
       }

}

window.onload = displayNowQuestion;
 

responseQuiz.forEach(button => {
  button.addEventListener("click", function() {
    checkAnswer(this.textContent);
  });
});
