// Criado um array de nomes de pessoas vazio
const nomes = []
do {
    let novoNome = prompt("Digite um nome")
    if (novoNome == 'o')
        break
    if (novoNome.charAt(0)=="A")
        // Adiciona na primeira posição do array
        nomes.unshift(novoNome)
        else
        // Adiciona na última posição do array
        nomes.push(novoNome)
    console.log(nomes);
} while (true) 

function removerUltimo() {
    nomes.pop()
    console.log(nomes)
}

function removerPrimeiro() {
    nomes.shift()
    console.log(nomes)
}

function obterNomePosicao1(){
    alert(nomes[1])
}
function tamanhoVetor() {
    alert(nomes.length())
}