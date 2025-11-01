const btn1 = document.getElementById('questao1');
const btn2 = document.getElementById('questao2');
const btn3 = document.getElementById('questao3');
const btn4 = document.getElementById('questao4');

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
