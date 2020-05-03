function gerarTabuada() {
    var numero = window.document.querySelector('input#numero').value
    var select = window.document.querySelector('select#tabuada')
    // Limpa o select
    while (select.firstChild) {
        select.removeChild(select.lastChild)
    }
    if (numero.length == 0) {
        alert(`Por favor digite um número`)
    } else {
        numero = Number(numero)
        //  Popula o select com a trabuada
        for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
            let option = document.createElement('option')
            let multiplicacao = numero * multiplicador
            option.innerText = `${numero} x ${multiplicador} = ${multiplicacao}`
            option.value = `${multiplicacao}`
            select.appendChild(option)
        }
    }
}