var resultado = window.document.querySelector('div#resultado')

/* Força Bruta */
resultado.innerHTML = `
    <p><strong>Força Bruta: </strong>1</p>
    <p><strong>Força Bruta: </strong>2</p>
    <p><strong>Força Bruta: </strong>3</p>
    <p><strong>Força Bruta: </strong>4</p>
    <p><strong>Força Bruta: </strong>5</p>
    <p><strong>Força Bruta: </strong>6</p>
`

/* While */
var contador = 1
while (contador <= 6) {
    resultado.innerHTML += `<p><strong>Repetição while: </strong>${contador}</p>` 
    contador++
}

/* Do While */
contador = 1
do {
    resultado.innerHTML += `<p><strong>Repetição do while: </strong>${contador}</p>`
    contador++
} while (contador <= 6)