let num = [5 , 8 , 6 , 9 , 4]

for(let pos=0; pos < num.length; pos ++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} // repetição 

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} //Mesma coisa de uma maneira simplificada
//Só funciona para array e object