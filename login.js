function armazenar() {
    let nome = document.getElementById("texto").value;
    localStorage.setItem("armazem", nome)
}

const btn = document.getElementById("btn")

btn.addEventListener("click",()=> {window.location.href = "principal.html"})