const carros = ["fusca","chevete","Brasilia","Opala","Maverick"]
const frutas = ["uva","chiclete","maça","bala"]

console.log(carros)

function inserir() {    
    carro = elementodigitado()
    if (validaExistencia(carro))
        alert("Este veículo já existe no array")
    else {
        carros.push(carro)
        listarElementosdoArray(carros)
        console.log(carros)
    }
}
function remover() {
    // validar se existe elemento no array antes de remover
    if(carros.length == 0) {
        alert("Array vazio")
    } else {
        carros.pop()
        listarElementosdoArray(carros)
    }
    
}

function buscar() {
  carrodigitado =  elementodigitado()
  if(validaExistencia(carrodigitado)) {
    alert("Este veículo existe na posição: " + carros.indexOf(carrodigitado))
  }
}

function listarFrutas() {
    listarElementosdoArray(frutas)
}

function validaExistencia(carro) {
    return carros.includes(carro)
}

function elementodigitado() {
    return document.getElementById("carro").value
}

function listarElementosdoArray(vetor){
    elementoDiv = document.getElementById("listararray")
    html = ""
    for (const car of vetor) {
        html = html + `<li> ${car}`
        console.log(html)
    }
    elementoDiv.innerHTML = html
}