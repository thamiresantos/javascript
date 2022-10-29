function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByTagName('radsex')
       var idade = ano - Number(fano.value)
       var gêneromas = document.getElementById('mas')
       var gênerofem = document.getElementById('fem')
       var img = document.createElement('img')
       img.setAttribute('id','foto')

       if (gêneromas.checked){
        var gênero = 'Homem'
        document.body.style.background = '#3CB371'
        if(idade >=0 && idade <12){
            //criança
            img.setAttribute('src', 'foto-criança-m.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'foto-jovem-m.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'foto-adulto-m.png')
        } else {
            //idoso
            img.setAttribute('src', 'foto-idoso-m.png')
        }

       } else if (gênerofem.checked){
        var gênero = 'Mulher'
        document.body.style.background ='#BA55D3'
        if(idade >=0 && idade <12){
            //criança
            img.setAttribute('src', 'foto-criança-f.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'foto-jovem-f.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'foto-adulto-f.png')
        } else {
            //idoso
            img.setAttribute('src', 'foto-idoso-f.png')
        }
       }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}