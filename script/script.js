
const botaoJogar = document.getElementById("botaoJogar");
const diviniciojogo = document.getElementById("iniciojogo");
//const nomeNivelAtualSpan = document.getElementById("nomeNivelAtual");
const caixaUniQuizDiv = document.getElementById("caixaUniQuiz");

let indicePerguntas = 0

const botao = document.createElement("button");

// Arrays
const perguntasQuiz = [ 
    // posição zero
     {pergunta: "Qual é o maior deserto do mundo?",  opcoes: ["Saara", "Atacama", "Antártida", "Deserto de Gobi"],
     },
     {pergunta: "Qual é a capital do Brasil?"},
     "Qual é a capital da Austrália?",
     "Qual é o país com maior população no mundo?",
     " Qual a linha imaginária que atravessa o Brasil?",
     "Qual o oceano que banha o Brasil?",
]


function iniciarjogo() {

    
    //diviniciojogo.remove();
    diviniciojogo.innerHTML = ""
    carregarQuestao(indicePerguntas);
    
}

function carregarQuestao(indice) {

    // tornando a DIV das questões visível
    caixaUniQuizDiv.classList.add("active");
    pergunta =  perguntasQuiz[indice];

    pergunta.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("answer-btn");
        botao.addEventListener("click", () => opcao);
        opcoesRespostas.appendChild(botao);
    });
}

function carregarProximaQuestao() {
    indicePerguntas++;
    if(indicePerguntas < perguntasQuiz.length) {
        carregarQuestao(perguntasQuiz[indicePerguntas]);
    }
}

