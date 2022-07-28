function cal(){
    let num = document.getElementById('num').value
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res')
    if(num.length == 0){
        alert('digite um numero')
    }
    else{
        res.innerText = `Tabuada de ${num}`
        let n = Number(num)
        let c = 1
        tab.innerText = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text += `${n} x ${c} = ${c*n}`
            tab.appendChild(item)
            c++
        }
    }
    
}