function contar(){
    var inicio = document.getElementById('in').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('pas').value
    var res = document.getElementById('res')
    
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert('Ta faltando dados')
    }
    else{
        if(passo == 0){
            alert('Passo invalido! considerando passo = 1')
            p = 1
        }
        res.innerHTML = 'contando: <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if(i < f){
            for(var c = i ; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        } else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
        
    }
   
}