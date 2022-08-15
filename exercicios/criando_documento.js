const fs = require('fs')

const nome_arquivo = '/../contratos/caução.doc'
const path = __dirname + `${nome_arquivo}`
function leitorDeArquivo(caminho){
    fs.readFile(caminho, 'utf-8', function(error,data){
        if(error){
            console.log('erro de leitura: '+error.message)
        }else {
            console.log(data)
        }
    })
}

function escritorDeArquivo(caminho,texto){
    fs.writeFile(caminho, texto, function(error){
        if(error){
            console.log('erro de escrita'+ error.message)
        }else {
            console.log('escreveu com sucesso em '+ caminho)
        }
    })
}

escritorDeArquivo(path, 'ola mundo')