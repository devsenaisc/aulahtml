const cidades = ["Palhoça","SJ","Itajaí"]
console.log(cidades)


function buscarPorPosicao() {
posicao = prompt("Escolha elemento do array")
alert(cidades[posicao])
    
}

function tamanhoArray() {
    alert(cidades.length)
}



function adicionarFinal() {
    //Guarda uma nova cidade na variável
    novaCidade = prompt("Digite uma cidade:")
    //PUSH adiciona elemento ao final do Array 
    cidades.push(novaCidade)
    //cidades[cidades.length] = novaCidade
    console.log(cidades)
}

function removerFinal() {
    //Remove do final 
    cidades.pop()
    console.log(cidades)
}


function varrer() {
    elementohtml = document.getElementById("elementosdoarray")
    var estruturaHTML = ""
    for (cidadeDoArray of cidades) {
        estruturaHTML += `<p> ${cidadeDoArray}</p><br>`
    }
    elementohtml.innerHTML= estruturaHTML
}