const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")
const link4 = document.getElementById("link4")

link1.addEventListener("click", () => window.open("index.html", "_blank"))
link2.addEventListener("click", ()=> window.open("index.html", "_blank"))
link3.addEventListener("click", ()=> window.open("index.html", "_blank"))
link4.addEventListener("click", ()=> window.open("index.html", "_blank"))

const nome = localStorage.getItem('armazem')

document.getElementById('is').innerText = nome
