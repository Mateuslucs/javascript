function contar(){
    var inicio = document.getElementById('in').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('pas').value
    var res = document.getElementById('res')
    
    res.innerText = 'Contando'
    for(var c = inicio; c <= fim; c += passo){
        res.innerText = c
    }
}