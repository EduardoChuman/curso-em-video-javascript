var resultado = window.document.querySelector('div#resultado')

fatiasPizza = 8
resultado.innerHTML = `Quantidade de fatias de pizza disponíveis: ${fatiasPizza}`

for (var fatiasComidas = 1; fatiasComidas <= 8; fatiasComidas++) {
    fatiasPizza--
    resultado.innerHTML += `
        <p>Quantidade de fatias comidas: ${fatiasComidas} - Quantidade de fatias disponíveis: ${fatiasPizza}</p>
    `
}