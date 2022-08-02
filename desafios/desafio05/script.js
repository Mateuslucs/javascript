let num = []
let ntext = document.getElementById('num')
let res = document.getElementById('r')

function escreva(text){
    var p = document.createElement('p')
    var texto = document.createTextNode(`${text}`)
    p.appendChild(texto)
    res.appendChild(p)
}

function numero(N){
    if(Number(N) >= 1 && Number(N) <= 100){
        return true
    }else{
        return false
    }
}

function innum(n, l){
    if(l.indexOf(Number(n)) == -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(numero(ntext.value) && innum(ntext.value, num)){
        let n = Number(ntext.value)
        num.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        ana.appendChild(item)
    }else{
        alert(`Valor inválido ou já foi encontrado na lista`)
    }
    ntext.value = ''
    ntext.focus()
    res.innerHTML = ''
}

function final(){
    if(num.length == 0){
        alert('adicione dados para finalizar')
    }
    else{
        var soma = 0
    for(c in num){
        soma += num[c]
    }
    var media = soma/num.length
    escreva(`Ao todo, temos ${num.length} números cadastrados`)
    escreva(`O maior valor informado foi ${Math.max.apply(null, num)}`)
    escreva(`O menor valor informado foi ${Math.min.apply(null, num)}`)
    escreva(`Somando todos os valores, temos ${soma}`)
    escreva(`A média dos valores digitados é ${media.toFixed(1)}`)
    }
}
function limpar() {
    let ana = document.getElementById('ana')
    num.length = 0
    ana.innerHTML = ''
}