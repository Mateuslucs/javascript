var num = []
function add(){
    var ntext = document.getElementById('num').value
    var n = Number(ntext)
    num.push(n)
    let item = document.createElement('option')
    item.text = `Valor ${n} adicionado.`
    ana.appendChild(item)
}
function final(){
    var soma = 0
    for(c in num){
        soma += num[c]
    }
    res = document.getElementById('r')
    res.innerHtml = `maior valor informado foi ${soma}`
}