const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")
const link4 = document.getElementById("link4")
const perso = document.getElementById("personagem")
let fases = 0

// link1.addEventListener("click", () => window.open("index.html", "_blank"))
link1.addEventListener("mouseover", () => perso.classList.add('animacao_fase1'))
link1.addEventListener("click", ()=> perso.classList.remove("animacao_fase1"))
link1.addEventListener("animationend", ()=> perso.style.left = "900px")
link2.addEventListener("click", ()=> window.open("index.html", "_blank"))
link3.addEventListener("click", ()=> window.open("index.html", "_blank"))
link4.addEventListener("click", ()=> window.open("index.html", "_blank"))

// const nome = localStorage.getItem('armazem')

// document.getElementById('is').innerText = nome
console.log(fases)
function fase1() {
    perso.classList.remove("animacao_fase1")
}

