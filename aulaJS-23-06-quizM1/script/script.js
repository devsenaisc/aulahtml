
const botaoJogar = document.getElementById("botaoJogar");
const diviniciojogo = document.getElementById("iniciojogo");
const caixaUniQuizDiv = document.getElementById("caixaUniQuiz");
const divtextopergunta = document.getElementById("textoperguntas");
let indicePerguntas = 0


// Arrays
const perguntasQuiz = [ 
     {pergunta:"Qual é o maior deserto do mundo?", opcoes:["Saara","Antartida","praia de torres"], resposta:"Antartida" },
     {pergunta:"Qual é a capital do Brasil?", opcoes:["RJ","SP","Brasília"], resposta:"Brasília"},
     {pergunta:"Qual é a capital da Austrália?", opcoes:["Palhoça","Urubici","Canguru"], resposta:"Canguru"},
     {pergunta:"Qual é o país com maior população no mundo?", opcoes:["China","India","Japão"], resposta:"India"},
     {pergunta:" Qual a linha imaginária que atravessa o Brasil?", opcoes:["Sonho","Equador","Capricórnio"], resposta:"Equador"},
     {pergunta:"Qual o oceano que banha o Brasil?", opcoes:["Atlântico","Índico","Pacífico"], resposta:"Atlântico"}
]


function iniciarjogo() {  
    diviniciojogo.innerHTML = ""
    carregarQuestao(perguntasQuiz[indicePerguntas]);
}

function carregarQuestao(questao) {

    // tornando a DIV das questões visível
    caixaUniQuizDiv.classList.add("active");

    divtextopergunta.textContent = questao.pergunta
    opcoesRespostas.innerHTML = ""
    questao.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("answer-btn");
        botao.addEventListener("click", () => validarresposta());
        opcoesRespostas.appendChild(botao);
    });
}
function validarresposta(){
    // mostrar a resposta correta em cor destacada
    const botoesopcoes = document.querySelectorAll(".answer-btn")
    botoesopcoes.forEach(botao2  => {
        if(botao2.textContent === perguntasQuiz[indicePerguntas].resposta)
        {
            botao2.classList.add("correct")
        }
    })
}

function carregarProximaQuestao(){
    indicePerguntas++;
    
    if(indicePerguntas < perguntasQuiz.length)
        carregarQuestao(perguntasQuiz[indicePerguntas]);
    else
        alert("Não existe mais perguntas...")
    
}
/*
 botoesResposta.forEach(botao => {
        if (botao.textContent === questaoAtual.respostaCorreta) {
            botao.classList.add("correct");
        }
        if (botao.textContent === respostaSelecionada && respostaSelecionada !== questaoAtual.respostaCorreta) {
            botao.classList.add("incorrect");
        }
        botao.disabled = true;
    });
    */
