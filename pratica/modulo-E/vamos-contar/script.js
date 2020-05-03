/*
    Formas de usar o Emogi

    Fonte: https://unicode.org/emoji/charts/full-emoji-list.html

    Vamos pegar como exemplo o emoji U+1F3C6 (trophy)
    Agora vamos trocar o "U+" por "\u"

    Ex: \u{1F3C6}
*/
var resultado = window.document.getElementById('resultado')

function contar() {
    resultado.innerHTML = ''
    var inicioContagem = window.document.querySelector('input#inicioContagem').value
    var fimContagem = window.document.getElementById('fimContagem').value
    var passo = window.document.getElementById('passo').value
    if (inicioContagem.length == 0) {
        resultado.innerHTML = `<p>\u{1F621} Digite um número de início\u{2757}\u{2757} \u{1F621}</p>`
    }
    if (fimContagem.length == 0) {
        resultado.innerHTML += `<p>\u{1F621} Digite um número de fim\u{2757}\u{2757} \u{1F621}</p>`
    }
    if (passo.length == 0) {
        resultado.innerHTML += `<p>\u{26A0} Passo não foi informado, passo 1 será considerado\u{2757}\u{2757} \u{26A0}</p>`
        passo = 1
    }
    if (inicioContagem.length != 0 && fimContagem.length != 0 && passo.length != 0) {
        inicioContagem = Number(inicioContagem)
        fimContagem = Number(fimContagem)
        passo = Number(passo)
        if (passo <= 0) {
            resultado.innerHTML += `<p>\u{26A0} Passo não informado/inválido, passo 1 será considerado\u{2757}\u{2757} \u{26A0}</p>`
            passo = 1
        }
        resultado.innerHTML += `<p>\u{1F3A4} Começou a contagem! \u{1F4E3}</p>`
        if (inicioContagem > fimContagem) {
            for (inicioContagem; inicioContagem >= fimContagem; inicioContagem -= passo) {
                resultado.innerHTML += `
                    <p>\u{23E9} ${inicioContagem} \u{2714}</p>
                `
            }
        } else {
            for (inicioContagem; inicioContagem <= fimContagem; inicioContagem += passo) {
                resultado.innerHTML += `
                    <p>\u{23E9} ${inicioContagem} \u{2714}</p>
                `
            }
        }
        resultado.innerHTML += `<p>\u{1F3C1} \u{1F3C6} Contagem concluída! \u{1F3C6} \u{1F3C1}</p>`
    } else {
        resultado.innerHTML += `<p>Não foi possível realizar a conta, tente novamente.</p>`
    }
}