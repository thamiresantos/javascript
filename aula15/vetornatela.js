let valores = [3,2,9,4,7,1,5]
/*for(var pos = 0; pos < valores.length; pos ++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 
//mostrar sem formatação */

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // outra maneira de fazer só que com outro codigo
}

