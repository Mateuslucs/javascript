tex = document.getElementById('velo')
res = document.getElementById('res')
function clicar() {
    var vel = Number(tex.value)
    console.log(`A velocidade do carro é ${vel}`)
    if(vel > 60){
        console.log('acima da velocidade. MULTADO!')
        res.innerText = 'acima da velocidade. MULTADO!'
    }
    else{
        console.log('Dirija com sinto de segurança')
        res.innerText = 'Dirija com sinto de segurança'
    }
}