var valores = [3, 4, 5, 10, 7, 9]
/*
for(let cont=0; cont < valores.length; cont++){
    console.log(`Na posição ${cont+1} tem o valor de ${valores[cont]
    }`)
}
*/
for(const cont in valores){
    console.log(`Na posição ${Number(cont)+1} tem o valor de ${valores[cont]}`)
}