function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var aviso = document.querySelector('div#hr')
    aviso.innerText = (`Agora são ${hora} horas.`)

    var foto = document.getElementById('img')
    if(hora >= 0 && hora < 12) {
        foto.src = 'imagens/manha.png'
        document.body.style.background = '#d5d32c'
    }
    else if(hora >= 12 && hora < 18) {
        foto.src = 'imagens/tarde.png'
        document.body.style.background = '#f7a489'
    }
    else {
        foto.src = 'imagens/noite.png'
        document.body.style.background = '#152e46'
    }
}