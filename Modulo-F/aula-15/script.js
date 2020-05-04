/*
    Exercicio 1: 
    Mostrar um array de 6 elementos do tip número e depois mostrar na tela a posição e o 
    valor dentro dela.
*/

let arrayNumeros = [5, 7, 1, 3, 6, 9]
let resultado = window.document.querySelector('div#resultado')
resultado.innerHTML = `<p>O array completo é ${arrayNumeros}</p>`
for (let passo = 0; passo < arrayNumeros.length; passo++) {
    resultado.innerHTML += `<p>A posição ${passo} tem o valor ${arrayNumeros[passo]}.</p>`
}

/*
    Exercicio 2: 
    Montar um array de letras fora de ordem, ordená-lo e depois apresentar a posição 
    e o seu valor.
*/

let arrayLetras = ['f', 'b', 'a', 'c', 'e', 'd']
let resultado_2 = window.document.getElementById('resultado_2')
resultado_2.innerHTML = `<p>O array antes de ordenar é esse ${arrayLetras}</p>`
arrayLetras.sort()
for (let indice in arrayLetras) {
    resultado_2.innerHTML += `<p>O indice ${indice} do array ordenado tem o valor ${arrayLetras[indice]}</p>`
}