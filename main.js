let nome = localStorage.getItem("armazem")
document.getElementById("texto").innerHTML = `Bem vindo, ${nome}`

const link1 = document.getElementById("link1_mapa1")
const link2 = document.getElementById("link2_mapa1")
const link3 = document.getElementById("link3_mapa1")
const link4 = document.getElementById("link4_mapa1")
const perso1 = document.getElementById("personagem_mapa1")


const bmap2 = document.getElementById("Bmap2")
const mapa2 = document.getElementById("mapa2");
const link1_mapa2 = document.getElementById("link1_mapa2")
const link2_mapa2 = document.getElementById("link2_mapa2")
const link3_mapa2 = document.getElementById("link3_mapa2")
const link4_mapa2 = document.getElementById("link4_mapa2")
const perso2 = document.getElementById("personagem_mapa2")

const bmap3 = document.getElementById("Bmap3")
const mapa3 = document.getElementById("mapa3");
const link1_mapa3 = document.getElementById("link1_mapa3")
const link2_mapa3 = document.getElementById("link2_mapa3")
const link3_mapa3 = document.getElementById("link3_mapa3")
const link4_mapa3 = document.getElementById("link4_mapa3")
const perso3 = document.getElementById("personagem_mapa3")


const bmap4 = document.getElementById("Bmap4")
const mapa4 = document.getElementById("mapa4");
const link1_mapa4 = document.getElementById("link1_mapa4")
const link2_mapa4 = document.getElementById("link2_mapa4")
const link3_mapa4 = document.getElementById("link3_mapa4")
const perso4 = document.getElementById("personagem_mapa4")


let fases = 0
//MAPA 1
link1.addEventListener("click", ()=> {perso1.style.animation = "fase1_mapa1 4s ease forwards"; fases++; link1.style.filter = "brightness(75%)";})
link1.addEventListener("dblclick",()=> {
    window.open("generic.html", "_blank");
    const conteudo = {
        titulo: "O que é Deadshot.io?",
        conteudo: "Deadshot.io é um jogo de tiro em primeira pessoa (FPS) online, jogado diretamente pelo navegador. O jogador entra em arenas multijogador para competir com outros, usando reflexos rápidos, mira precisa e estratégias de movimento. O objetivo é eliminar o maior número de oponentes e se manter vivo o máximo de tempo possível."
    }
    localStorage.setItem('conteudo', JSON.stringify(conteudo));
    link3.classList.remove('oculto');
    link2.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)";
    link2.style.top = "30px"
    })
// link1.addEventListener("click", ()=> perso.classList.remove("animacao_fase1"))

link2.addEventListener("click", ()=> {perso1.style.animation = "fase2_mapa1 4s ease forwards"; link2.style.filter = "brightness(75%)"; link3.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"; link3.style.top = "50px"})
link2.addEventListener("dblclick", ()=> {
    window.open("genericQ.html", "_blank")
    const conteudo = {
        titulo: "Qual é o gênero principal de Deadshot.io?",
        alt1: "a) Corrida",
        alt2: "b) Tiro em primeira pessoa (FPS)",
        alt3: "c) Estratégia por turnos",
        alt4: "d) RPG de ação",
        certa: "alt2" 
    }
    localStorage.setItem('info', JSON.stringify(conteudo))
    link4.classList.remove('oculto')
})

link3.addEventListener("click", () => {perso1.style.animation = "fase3_mapa1 4s ease forwards"; link3.style.filter = "brightness(75%)"; link4.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"; link4.style.top = "70px"})
link3.addEventListener("dblclick", ()=>  {
    window.open("genericQ.html", "_blank")
    const conteudo = {
        titulo: "O que o jogador deve fazer para vencer em Deadshot.io?",
        alt1: "a) Resolver enigmas",
        alt2: "b) Coletar moedas",
        alt3: "c) Eliminar inimigos e sobreviver mais tempo",
        alt4: "d) Construir defesas",
        certa: "alt3" 
    }
    localStorage.setItem('info', JSON.stringify(conteudo))
})

link4.addEventListener("click", ()=> {perso1.style.animation = "fase4_mapa1 4s ease forwards"; link4.style.filter = "brightness(75%)"})
link4.addEventListener("dblclick", ()=> {
    window.open("genericQ.html", "_blank");
    Bmap2.style.display = "none"
    mapa2.style.visibility = "visible"
    const conteudo = {
        titulo: "Em que plataforma Deadshot.io pode ser jogado?",
        alt1: "a) Somente em consoles",
        alt2: "b) Apenas por aplicativo móvel",
        alt3: "c) Diretamente pelo navegador",
        alt4: "d) Requer instalação pesada",
        certa: "alt3" 
    }
    localStorage.setItem('info', JSON.stringify(conteudo))
})
// const nome = localStorage.getItem('armazem')
// document.getElementById('is').innerText = nome

//MAPA2
link1_mapa2.addEventListener("click", ()=> {perso2.style.animation = "fase1_mapa2 4s ease forwards"; link1_mapa2.style.filter = "brightness(75%)"; })
link1_mapa2.addEventListener("dblclick", ()=> {
    window.open("generic.html", "_blank")
    const conteudo = {
        titulo: "Equipamentos do jogador",
        conteudo: "No jogo, há diversas armas: rifles, metralhadoras e pistolas. Cada uma tem velocidade, precisão e dano diferentes. Saber escolher e dominar a arma ideal para o seu estilo é essencial para vencer."
    }
    localStorage.setItem('conteudo', JSON.stringify(conteudo))
    link3_mapa2.classList.remove('oculto');
    link2_mapa2.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)";
})

link2_mapa2.addEventListener("click", ()=> {perso2.style.animation = "fase2_mapa2 4s ease forwards"; link2_mapa2.style.filter = "brightness(75%)"; link3_mapa2.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"})
link2_mapa2.addEventListener("dblclick", ()=> {
    window.open("genericQ.html", "_blank")
    const conteudo = {
        titulo: "Qual fator diferencia as armas em Deadshot.io?",
        alt1: "a) Cor e tamanho",
        alt2: "b) Precisão, dano e velocidade",
        alt3: "c) Preço e peso",
        alt4: "d) Som dos disparos",
        certa: "alt2" 
    }
    localStorage.setItem('info', JSON.stringify(conteudo))
    link4_mapa2.classList.remove('oculto');
})

link3_mapa2.addEventListener("click", ()=> {perso2.style.animation = "fase3_mapa2 4s ease forwards"; link3_mapa2.style.filter = "brightness(75%)"; link4_mapa2.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"})
link3_mapa2.addEventListener("dblclick", ()=> {
    window.open("genericQ.html", "_blank")
    const conteudo = {
        titulo: "Por que é importante mudar de arma durante o jogo?",
        alt1: "a) Para adaptar-se a diferentes situações",
        alt2: "b) Para testar os sons",
        alt3: "c) Porque a munição é infinita",
        alt4: "d) Apenas por estética",
        certa: "alt1" 
    }
    localStorage.setItem('info', JSON.stringify(conteudo))
})

link4_mapa2.addEventListener("click", ()=> {perso2.style.animation = "fase4_mapa2 4s ease forwards"; link4_mapa2.style.filter = "brightness(75%)"})
link4_mapa2.addEventListener("dblclick", ()=> {window.open("genericQ.html", "_blank"); bmap3.style.display = "none";
    mapa3.style.visibility = "visible"

    const conteudo = {
        titulo: "Qual dessas opções é uma boa estratégia?",
        alt1: "a) Ficar parado atirando",
        alt2: "b) Atirar sem mirar",
        alt3: "c) Correr em linha reta",
        alt4: "d) Mover-se constantemente e mirar na cabeça",
        certa: "alt4" 
    }
    localStorage.setItem('info', JSON.stringify(conteudo))
});

//MAPA3
link1_mapa3.addEventListener("click", ()=> {perso3.style.animation = "fase1_mapa3 4s ease forwards"; link1_mapa3.style.filter = "brightness(75%)"; link2_mapa3.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"; link2_mapa3.style.top = '20vh'})
link1_mapa3.addEventListener("dblclick", ()=> {
    window.open("generic.html", "_blank");
    const conteudo = {
        titulo: "Ambientes e modos de jogo",
        conteudo: "Deadshot.io oferece mapas variados, com obstáculos e áreas abertas. Existem modos como Deathmatch (todos contra todos) e Team Match (equipes). Cada mapa exige estratégias específicas."
    }
    localStorage.setItem('conteudo', JSON.stringify(conteudo));
    link3_mapa3.classList.remove('oculto');
})

link2_mapa3.addEventListener("click", ()=> {perso3.style.animation = "fase2_mapa3 4s ease forwards"; link2_mapa3.style.filter = "brightness(75%)"; link3_mapa3.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"})
link2_mapa3.addEventListener("dblclick", ()=> {
    window.open("genericQ.html", "_blank")
    const conteudo = {
        titulo: "Perguntas de Conhecimentos Gerais",
        alt1: "Qual a capital do Brasil?",
        alt2: "Qual o animal que late?",
        alt3: "Em que ano a Lua foi pisada pela primeira vez?",
        alt4: "Quem pintou a 'Mona Lisa'?",
        certa: "alt1" 
    }
    localStorage.setItem('info', JSON.stringify(conteudo))
    link4_mapa3.classList.remove('oculto');
})

link3_mapa3.addEventListener("click", ()=> {perso3.style.animation = "fase3_mapa3 4s ease forwards"; link3_mapa3.style.filter = "brightness(75%)"; link4_mapa3.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"})
link3_mapa3.addEventListener("dblclick", ()=> {
    window.open("genericQ.html", "_blank")
    const conteudo = {
        titulo: "Perguntas de Conhecimentos Gerais",
        alt1: "Qual a capital do Brasil?",
        alt2: "Qual o animal que late?",
        alt3: "Em que ano a Lua foi pisada pela primeira vez?",
        alt4: "Quem pintou a 'Mona Lisa'?",
        certa: "alt1" 
    }
    localStorage.setItem('info', JSON.stringify(conteudo))
})

link4_mapa3.addEventListener("click", ()=> {perso3.style.animation = "fase4_mapa3 4s ease forwards"; link4_mapa3.style.filter = "brightness(75%)"})
link4_mapa3.addEventListener("dblclick", ()=> {
    window.open("genericQ.html", "_blank")
    const conteudo = {
        titulo: "Perguntas de Conhecimentos Gerais",
        alt1: "Qual a capital do Brasil?",
        alt2: "Qual o animal que late?",
        alt3: "Em que ano a Lua foi pisada pela primeira vez?",
        alt4: "Quem pintou a 'Mona Lisa'?",
        certa: "alt1" 
    }
    localStorage.setItem('info', JSON.stringify(conteudo));
     Bmap4.style.display = "none";mapa4.style.visibility = "visible"})

//MAPA4
link1_mapa4.addEventListener("click", ()=> {perso4.style.animation = "fase1_mapa4 4s ease forwards"; link1_mapa4.style.filter = "brightness(75%)"; link2_mapa4.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"; link2_mapa4.style.left = "90vh"})
link1_mapa4.addEventListener("dblclick", ()=> {
    window.open("generic.html", "_blank");
    const conteudo = {
        titulo: "Como melhorar no jogo",
        conteudo: "Para evoluir em Deadshot.io, o jogador deve treinar mira, movimentação e tempo de reação. Jogar com frequência e observar outros jogadores também ajuda a entender as melhores estratégias."
    }
    localStorage.setItem('conteudo', JSON.stringify(conteudo));
    link3_mapa4.classList.remove('oculto');
})

link2_mapa4.addEventListener("click", ()=> {perso4.style.animation = "fase2_mapa4 4s ease forwards"; link2_mapa4.style.filter = "brightness(75%)"; link3_mapa4.style.backgroundImage = "url(/midia/upscalemedia-transformed.png)"})
link2_mapa4.addEventListener("dblclick", ()=> {
    window.open("genericQ.html", "_blank")
    const conteudo = {
        titulo: "Perguntas de Conhecimentos Gerais",
        alt1: "Qual a capital do Brasil?",
        alt2: "Qual o animal que late?",
        alt3: "Em que ano a Lua foi pisada pela primeira vez?",
        alt4: "Quem pintou a 'Mona Lisa'?",
        certa: "alt1" 
    }
    localStorage.setItem('info', JSON.stringify(conteudo))
})

link3_mapa4.addEventListener("click", ()=> {perso4.style.animation = "fase3_mapa4 4s ease forwards"; link3_mapa4.style.filter = "brightness(75%)"})
link3_mapa4.addEventListener("dblclick", ()=> {
    window.open("genericQ.html", "_blank")
    const conteudo = {
        titulo: "Perguntas de Conhecimentos Gerais",
        alt1: "Qual a capital do Brasil?",
        alt2: "Qual o animal que late?",
        alt3: "Em que ano a Lua foi pisada pela primeira vez?",
        alt4: "Quem pintou a 'Mona Lisa'?",
        certa: "alt1" 
    }
    localStorage.setItem('info', JSON.stringify(conteudo))
})