function carregar(){
    var data = new Date()
    var hora = data.getHours()

    var aviso = document.querySelector('div#hr')
    aviso.innerText = (`Agora são ${hora} horas.`)

    var foto = document.getElementById('img')
    if(hora >= 0 && hora < 12) {
        foto.src = 'manha.png'
    }
    else if(hora >= 12 && hora < 18) {
        foto.src = 'tarde.png'
    }
    else {
        foto.src = 'noite.png'
    }
}