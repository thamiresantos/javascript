var num = window.document.getElementById ("num")
var lista = document.getElementById("lista-text")
let res = document.querySelector('div#res')
let valores =[] //array

function isNumero(n) { // verificar se o numero esta entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { // verificar se o numero esta na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // add no vetor
        let item = document.createElement('option') // criando um elemento option
        item.text = `Valor ${num.value} adicionado` // valor text
        lista.appendChild(item)
        res.innerHTML = '' // quando add um elemnto limpar o res
    } else {
        window.alert ('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // para apagar
    num.focus() // para o cursor ficar piscando
}

function finalizar() {
    if ( valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores) { // qual o maior e o menor numero 
            soma += valores[pos] // somar os valores
            if (valores[pos] > maior)
            maior = valores [pos]
            if (valores[pos] < menor)
            menor = valores[pos]

        }

        media = soma / tot // calculando a media
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> A media dos valores digitados é ${media}.</p>`
    }
}
