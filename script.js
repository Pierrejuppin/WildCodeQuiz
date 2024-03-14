const menuB = document.querySelector(".menu");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav(){
    menuB.classList.add("active");
}

function closeNav(){
    menuB.classList.remove("active")
}
