function somar(n1=0, n2=0){
    if(typeof(n1) == 'number' & typeof(n2) == 'number'){
        return n1+n2
    }
    else{
        return 'Erro, coloque um numero'
    }
        

}

console.log(somar(4,'a'))