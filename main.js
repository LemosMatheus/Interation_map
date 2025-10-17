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

const link1_mapa3 = document.getElementById("link1_mapa3")
const link2_mapa3 = document.getElementById("link2_mapa3")
const link3_mapa3 = document.getElementById("link3_mapa3")
const link4_mapa3 = document.getElementById("link4_mapa3")
const perso3 = document.getElementById("personagem_mapa3")

const link1_mapa4 = document.getElementById("link1_mapa4")
const link2_mapa4 = document.getElementById("link2_mapa4")
const link3_mapa4 = document.getElementById("link3_mapa4")
const perso4 = document.getElementById("personagem_mapa4")


let fases = 0
//MAPA 1
link1.addEventListener("click", ()=> {perso1.style.animation = "fase1_mapa1 4s ease forwards"; fases++; link1.style.filter = "brightness(75%)"; link2.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"; link2.style.top = "100px"})
link1.addEventListener("dblclick",()=> {window.open("index.html", "_blank")})
// link1.addEventListener("click", ()=> perso.classList.remove("animacao_fase1"))

link2.addEventListener("click", ()=> {perso1.style.animation = "fase2_mapa1 4s ease forwards"; link2.style.filter = "brightness(75%)"; link3.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"; link3.style.top = "145px"})
link2.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link3.addEventListener("click", () => {perso1.style.animation = "fase3_mapa1 4s ease forwards"; link3.style.filter = "brightness(75%)"; link4.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"; link4.style.top = "180px"})
link3.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link4.addEventListener("click", ()=> {perso1.style.animation = "fase4_mapa1 4s ease forwards"; link4.style.filter = "brightness(75%)"})
link4.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))
// const nome = localStorage.getItem('armazem')
// document.getElementById('is').innerText = nome

//MAPA2
link1_mapa2.addEventListener("click", ()=> {perso2.style.animation = "fase1_mapa2 4s ease forwards"; link1_mapa2.style.filter = "brightness(75%)"; link2_mapa2.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"})
link1_mapa2.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link2_mapa2.addEventListener("click", ()=> {perso2.style.animation = "fase2_mapa2 4s ease forwards"; link2_mapa2.style.filter = "brightness(75%)"; link3_mapa2.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"})
link2_mapa2.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link3_mapa2.addEventListener("click", ()=> {perso2.style.animation = "fase3_mapa2 4s ease forwards"; link3_mapa2.style.filter = "brightness(75%)"; link4_mapa2.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"})
link3_mapa2.addEventListener("dblclick", ()=> window.open("inde.html", "_blank"))

link4_mapa2.addEventListener("click", ()=> {perso2.style.animation = "fase4_mapa2 4s ease forwards"; link4_mapa2.style.filter = "brightness(75%)"})
link4_mapa2.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

//MAPA3
link1_mapa3.addEventListener("click", ()=> {perso3.style.animation = "fase1_mapa3 4s ease forwards"; link1_mapa3.style.filter = "brightness(75%)"; link2_mapa3.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"; link2_mapa3.style.top = "33vh"})
link1_mapa3.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link2_mapa3.addEventListener("click", ()=> {perso3.style.animation = "fase2_mapa3 4s ease forwards"; link2_mapa3.style.filter = "brightness(75%)"; link3_mapa3.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"})
link2_mapa3.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link3_mapa3.addEventListener("click", ()=> {perso3.style.animation = "fase3_mapa3 4s ease forwards"; link3_mapa3.style.filter = "brightness(75%)"; link4_mapa3.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"})
link3_mapa3.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link4_mapa3.addEventListener("click", ()=> {perso3.style.animation = "fase4_mapa3 4s ease forwards"; link4_mapa3.style.filter = "brightness(75%)"})
link4_mapa3.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

//MAPA4
link1_mapa4.addEventListener("click", ()=> {perso4.style.animation = "fase1_mapa4 4s ease forwards"; link1_mapa4.style.filter = "brightness(75%)"; link2_mapa4.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"})
link1_mapa4.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link2_mapa4.addEventListener("click", ()=> {perso4.style.animation = "fase2_mapa4 4s ease forwards"; link2_mapa4.style.filter = "brightness(75%)"; link3_mapa4.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"})
link2_mapa4.addEventListener("dblclick", ()=> window.open("index.html", "_blank"))

link3_mapa4.addEventListener("click", ()=> {perso4.style.animation = "fase3_mapa4 4s ease forwards"; link3_mapa4.style.filter = "brightness(75%)"})
link3_mapa4.addEventListener("dblclick", ()=> window.open("inxe.html", "_blank"))
console.log(fases)