let informacoes = JSON.parse(localStorage.getItem('conteudo'));

document.getElementById('titulo').innerText = informacoes.titulo; 
document.getElementById('resumo').innerText = informacoes.conteudo;
