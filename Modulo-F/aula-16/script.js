/*
    Exercício:
    Criar uma função que pegar uma lista de um array numérico e 
    informa se o número é par ou ímpar.
*/
let arrayNumeros = [5, 8, 1, 3, 6, 10, 21]
let resultado = window.document.getElementById('resultado')
resultado.innerHTML = `<p>o array de números são ${arrayNumeros}</p>`
for (let numero in arrayNumeros) {
    resultado.innerHTML += `<p>O número ${arrayNumeros[numero]} é ${parOuImpar(arrayNumeros[numero])}.</p>`
}
function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

/*
    Exercício:
    Criar uma função que pega uma lista o mesmo array numérico do 
    primeiro execicio e calcula seu faturial.
*/
let resultado_2 = window.document.querySelector('div#resultado_2')
function calculaFatorial(numero) {
    if (numero == 1) {
        return 1
    } else {
        return numero * calculaFatorial(numero - 1)
    }
}
for (let indice in arrayNumeros) {
    resultado_2.innerHTML += `<p>O fatorial do número ${arrayNumeros[indice]} é ${calculaFatorial(arrayNumeros[indice])}.</p>`
}