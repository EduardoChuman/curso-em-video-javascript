function verificarIdade() {
    var anoNascimento = window.document.getElementById('anoNascimento').value
    var sexo = window.document.getElementsByName('sexo')
    
    var data = new Date()
    var ano = data.getFullYear() - anoNascimento

    var resultado = window.document.getElementById('resultado')  
    var genero = ''
    var imagem = window.document.createElement('img')
    imagem.setAttribute('id', 'imagem')
    if (anoNascimento.length == 0 || anoNascimento > data.getFullYear()) {
        alert('Não foi possível validar, tente novamente')
    } else {
        if (sexo[0].checked) {
            genero = 'Masculino'
            window.document.body.style.backgroundColor = 'rgba(94, 173, 201, 1)'
            if (ano <= 2) {
                imagem.setAttribute('src','images/masculino-bebe.jpg')
            } else if (ano < 10) {
                imagem.setAttribute('src','images/masculino-crianca.jpg')
            } else if (ano <= 39) {
                imagem.setAttribute('src','images/masculino-adulto.jpg')
            } else {
                imagem.setAttribute('src','images/masculino-idoso.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Feminino'
            window.document.body.style.backgroundColor = 'rgba(201, 112, 94, 1)'
            if (ano <= 2) {
                imagem.setAttribute('src','images/feminino-bebe.jpg')
            } else if (ano < 10) {
                imagem.setAttribute('src','images/feminino-crianca.jpg')
            } else if (ano <= 39) {
                imagem.setAttribute('src','images/feminino-adulto.jpg')
            } else {
                imagem.setAttribute('src','images/feminino-idoso.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `
            <hr>
            <p>Detectamos uma pessoa de ${ano} anos do sexo ${genero}.</p>
            `
        resultado.appendChild(imagem)
    }
}