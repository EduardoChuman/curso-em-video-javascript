var arrayNumero = []
var quadroNumerosAdicionados = window.document.querySelector('select#quadroNumerosAdicionados')
let resultado = window.document.getElementById('resultado')
function adicionarNumero() {
    // Captura o valor do número informado, já convertendo ele para Number
    let inputNumero = window.document.getElementById('numero')
    let numero = Number(inputNumero.value)
    //  Valida se o número informado está dentro da regra de negócio - Estar entre os números 1 e 100
    if (numero >= 1 && numero <= 100) {
        // Verifica se ele já existe no array
        if (arrayNumero.indexOf(numero) == -1) {
            //  Caso positivo, inclui ele no array e no select
            resultado.innerHTML = ''
            arrayNumero.push(numero)
            let option = window.document.createElement('option')
            option.value = numero
            option.text = `Valor ${numero} foi adicionado.`
            quadroNumerosAdicionados.appendChild(option)
            inputNumero.value = ''
            inputNumero.focus()
        } else {
            // Mensagem de erro em caso de número repetido
            alert(`O número ${numero} não pode ser adicionado mais de uma vez!`)
        }
    } else {
        // Mensagem de erro em caso de número fora da regra de negócio
        alert('O número está fora da regra estipulada, escolha outro por favor.')
    }
}

function finalizar() {
    if (arrayNumero.length != 0) {
        let menorNumero = arrayNumero[0]
        let maiorNumero = arrayNumero[0]
        let somaNumero = 0
        for (let numero in arrayNumero) {
            menorNumero = arrayNumero[numero] < menorNumero ? arrayNumero[numero] : menorNumero
            maiorNumero = arrayNumero[numero] > maiorNumero ? arrayNumero[numero] : maiorNumero
            somaNumero = somaNumero += arrayNumero[numero] 
        }
        let mediaNumeros = calcularMediaNumeros(somaNumero, arrayNumero.length)
        resultado.innerHTML = `
            <p>Ao todo, temos ${arrayNumero.length} números cadastrados.</p>
            <p>O maior valor informado foi ${maiorNumero}.</p>
            <p>O menor valor informado for ${menorNumero}.</p>
            <p>A soma de todos os valores foi de ${somaNumero}.</p>
            <p>A média dos valores digitados é ${mediaNumeros}.</p>
        `
    } else {
        // Mensagem de erro em caso o array esteja vazio
        alert('Informe ao menos um número antes de finalizar')
    }
}