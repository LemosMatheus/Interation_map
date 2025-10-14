const link1 = document.getElementById("link1_mapa1")
const link2 = document.getElementById("link2_mapa1")
const link3 = document.getElementById("link3_mapa1")
const link4 = document.getElementById("link4_mapa1")
const perso1 = document.getElementById("personagem_mapa1")

const link1_mapa2 = document.getElementById("link1_mapa2")
const link2_mapa2 = document.getElementById("link2_mapa2")
const link3_mapa2 = document.getElementById("link3_mapa2")
const link4_mapa2 = document.getElementById("link4_mapa2")
const perso2 = document.getElementById("personagem_mapa2")

let fases = 0
link1.addEventListener("click", ()=> {perso1.style.animation = "fase1_mapa1 4s ease forwards"; fases++})
link1.addEventListener("dblclick",()=> {window.open("index.html", "_blank")})
// link1.addEventListener("click", ()=> perso.classList.remove("animacao_fase1"))

link2.addEventListener("click", ()=> perso1.style.animation = "fase2_mapa1 4s ease forwards")
link2.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link3.addEventListener("click", () => {perso1.style.animation = "fase3_mapa1 4s ease forwards"})
link3.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link4.addEventListener("click", ()=> {perso1.style.animation = "fase4_mapa1 4s ease forwards"})
link4.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))
// const nome = localStorage.getItem('armazem')
// document.getElementById('is').innerText = nome
link1_mapa2.addEventListener("click", ()=> perso2.style.animation = "fase1_mapa2 4s ease forwards")
link1_mapa2.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link2_mapa2.addEventListener("click", ()=> perso2.style.animation = "fase2_mapa2 4s ease forwards")
link2_mapa2.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link3_mapa2.addEventListener("click", ()=> perso2.style.animation = "fase3_mapa2 4s ease forwards")
link3_mapa2.addEventListener("dblclick", ()=> window.open("inde.html", "_blank"))

link4_mapa2.addEventListener("click", ()=> perso2.style.animation = "fase4_mapa2 4s ease forwards")
link4_mapa2.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))
console.log(fases)