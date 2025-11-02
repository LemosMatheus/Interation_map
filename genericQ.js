const btn1 = document.getElementById('questao1');
const btn2 = document.getElementById('questao2');
const btn3 = document.getElementById('questao3');
const btn4 = document.getElementById('questao4');
const btn = document.getElementById('conferir')
const informacoes = JSON.parse(localStorage.getItem('info'));

document.getElementById('placa').innerText = informacoes.titulo;
document.getElementById('questao1').innerText = informacoes.alt1;
document.getElementById('questao2').innerText = informacoes.alt2;
document.getElementById('questao3').innerText = informacoes.alt3;
document.getElementById('questao4').innerText = informacoes.alt4;



btn1.addEventListener('click', () => {
    btn1.classList.add('ativo');
    btn2.classList.remove('ativo');
    btn3.classList.remove('ativo');
    btn4.classList.remove('ativo');
});

btn2.addEventListener('click', () => {
    btn1.classList.remove('ativo');
    btn2.classList.add('ativo');
    btn3.classList.remove('ativo');
    btn4.classList.remove('ativo');
});

btn3.addEventListener('click', () => {
    btn1.classList.remove('ativo');
    btn2.classList.remove('ativo');
    btn3.classList.add('ativo');
    btn4.classList.remove('ativo');
});

btn4.addEventListener('click', () => {
    btn1.classList.remove('ativo');
    btn2.classList.remove('ativo');
    btn3.classList.remove('ativo');
    btn4.classList.add('ativo');
});

btn.addEventListener('click', () => {
    if (informacoes.certa === "alt1"){
        btn2.classList.add('errada');
        btn3.classList.add('errada');
        btn4.classList.add('errada');
    }else if (informacoes.certa === "alt2"){
        btn1.classList.add('errada');
        btn3.classList.add('errada');
        btn4.classList.add('errada');
    }else if (informacoes.certa === "alt3"){
        btn1.classList.add('errada');
        btn2.classList.add('errada');
        btn4.classList.add('errada');
    }else if (informacoes.certa === "alt4"){
        btn1.classList.add('errada');
        btn3.classList.add('errada');
        btn2.classList.add('errada');
    }
})