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


