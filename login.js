function armazenar() {
    let nome = document.getElementById("texto").value;
    localStorage.setItem("armazem", nome)
}