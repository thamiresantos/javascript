function calcular() {
    var num = window.document.getElementById ("num")
    var tab = window.document.getElementById("seltab")

   if( num.value.length == 0) {
     window.alert ('[ERRO] Por favor, digite um número!')
   } else {
      let n = Number(num.value)
      var c = 1
      tab.innerHTML = '' //limpar a tabuada
      while (c <= 10) {
        let item = document.createElement('option') // criar opções
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}` // faz sentido em PHP, para saber qual foi o item selecionado
        tab.appendChild(item) // tipo um filho ???
        c++
      }
    }
}
