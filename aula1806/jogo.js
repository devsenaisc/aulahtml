const diviniciar = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")
const titulodapergunta = document.getElementById("titulopergunta")

const perguntas = [
    { pergunta:"Qual é o maior deserto do mundo?", opcoes:["Saara","Antartida","Atacâma"], correta:"Antartida" },
     {pergunta:"Qual é a capital do Brasil?", opcoes:["RJ","SP","Brasíla"], correta:"Brasíla"},
     {pergunta:"Qual é a capital da Austrália?", opcoes:["Palhoça", "Urubici","Canguru"], correta:"Canguru"},
     {pergunta:"Qual é o país com maior população no mundo?", opcoes:["China","Índia","Paraguai"], correta:"Índia"},
     {pergunta:" Qual a linha imaginária que atravessa o Brasil?", opcoes:["Pandorga","Sonho","Equador"], correta:"Equador"},
     {pergunta:"Qual o oceano que banha o Brasil?", opcoes:["Pacífico","Atlântico","Índico"], correta:"Atlântico"},
]



let indiceperguntas = 0

/* Funções  */
function iniciarjogo() {
    fecharbotaoinicio()
    abrirareajogo()
}

function fecharbotaoinicio() {
    //diviniciar.innerHTML = ""
    //diviniciar.remove()
    diviniciar.classList.remove("active")
}

function abrirareajogo() {
    divareajogo.classList.add("active")

    titulodapergunta.textContent = perguntas[indiceperguntas].pergunta
    areaperguntas.innerHTML = ""
    perguntas[indiceperguntas].opcoes.forEach(opcao => {
    let botaodepergunta =  document.createElement("button")
    botaodepergunta.textContent = opcao
    botaodepergunta.classList.add("answer-btn")
    botaodepergunta.addEventListener("click", () => validarrespostacorreta(opcao))
    areaperguntas.appendChild(botaodepergunta)
    })
}

function validarrespostacorreta(btnSelecionado){
    const botoesdaTela = document.querySelectorAll(".answer-btn")
    const respostacorreta = perguntas[indiceperguntas].correta
    botoesdaTela.forEach(botao => {
        if(botao.textContent === respostacorreta) {
            botao.classList.add("correct")
        }
        if(botao.textContent === btnSelecionado && botao.textContent != respostacorreta) {
            botao.classList.add("incorrect")

        }
        //botao.disabled = true
        botao.removeEventListener("click", () => validarrespostacorreta(btnSelecionado))
    })
}

function proximapergunta() {
    indiceperguntas++
    if (indiceperguntas < perguntas.length)
        abrirareajogo()
    else
        alert("Nao existe mais perguntas")

}

/*
botaodepergunta.addEventListener("click", () =>  validarrespostacorreta())
function outracoisa() {
    const botoesResposta = areaperguntas.querySelectorAll(".answer-btn");
    const respostacorreta = perguntas[indiceperguntas].respostacorreta
    botoesResposta.forEach(resp => {
        if (resp.textContent == respostacorreta )
             resp.classList.add("correct");
            else 
             resp.classList.add("incorrect");

    })
}
    */