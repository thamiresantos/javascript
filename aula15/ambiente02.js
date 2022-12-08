let num = [9,5,6,2,3,1,2]
num.push(1) // adicionar um número no final
num.sort() //colocando em ordem
console.log(num) 
console.log(`O vetor tem ${num.length} posições`) // quantidade de posições
console.log(`O primeiro valor do vetor é ${num[0]}`) //mostra o valor de um vetor específico

let pos = num.indexOf(4) //procurar o vetor e retorna a chave onde ele esta
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else{
    console.log(`O valor 5 está na posição ${pos}`)
}


