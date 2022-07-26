
function verificar() {
    var data = new Date
    var ano = document.querySelector('input#nasc')
    var idade = data.getFullYear() - ano.value 

    var masculino = document.getElementsByName('sexo')[0]
    var feminino = document.getElementsByName('sexo')[1]
    var img = document.getElementById('imagem')
    var des = document.getElementById('des')
    if(ano.value == 0 || ano.value > data.getFullYear()) {
        alert('digite sua idade para verificar')
    }
    else{
        if(masculino.checked) {
            if(idade <= 12){
                des.innerText = `Um menino de ${idade} anos`
                img.src = 'imagens/menino.png'
            }
            else if(idade > 12 && idade <= 25){
                des.innerText = `Um jovem de ${idade} anos`
                img.src = 'imagens/jovem.png'
            }
            else if(idade > 25 && idade <= 50){
                des.innerText = `Um homem de ${idade} anos`
                img.src = 'imagens/homem.png'
            }
            else if(idade > 50){
                des.innerText = `Um velhinho de ${idade} anos`
                img.src = 'imagens/velho.png'
            }
        }
        else if(feminino.checked) {
            if(idade <= 12){
                des.innerText = `Uma menina de ${idade} anos`
                img.src = 'imagens/menina.png'
            }
            else if(idade > 12 && idade <= 25){
                des.innerText = `Uma jovem de ${idade} anos`
                img.src = 'imagens/jovem-menina.png'
            }
            else if(idade > 25 && idade <= 50){
                des.innerText = `Uma mulher de ${idade} anos`
                img.src = 'imagens/mulher.png'
            }
            else if(idade > 50){
                des.innerText = `Uma velhinha de ${idade} anos`
                img.src = 'imagens/velha.png'
            }
        }
    }
   
}