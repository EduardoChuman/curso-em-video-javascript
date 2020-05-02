var data = new Date()
var hora = data.getHours()
var horaDoDia = document.getElementById('horaDoDia')
var body = window.document.getElementsByTagName('body')[0]
var fotoHoraDodia = window.document.getElementById('fotoHoraDodia')

horaDoDia.innerText = `Agora são ${hora} horas.`

if (hora < 5) {
    // MADRUGADA
    fotoHoraDodia.src = `imagens/noite.jpg`
    body.style.background = 'rgba(71, 71, 71, 1)'
} else if(hora >= 5 && hora <= 7) {
    // AMANHECER
    fotoHoraDodia.src = `imagens/amanhecer.jpg`
    body.style.background = 'rgba(205, 202, 136, 1)'
} else if (hora <= 16) {
    // DIA
    fotoHoraDodia.src = `imagens/meio-dia.jpg`
    body.style.background = 'rgba(78, 183, 218, 1)'
} else if (hora <= 19) {
    // ENTARDECER
    fotoHoraDodia.src = `imagens/entardecer.jpg`
    body.style.background = 'rgba(194, 82, 41, 1)'
} else {
    // NOITE
    fotoHoraDodia.src = `imagens/noite.jpg`
    body.style.background = 'rgba(71, 71, 71, 1)'
}