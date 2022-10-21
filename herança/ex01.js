var homem = {
    sexo: "masculino"
};

var joao = {
    nome: "joão",
    idade: 20
};
Object.setPrototypeOf(joao,homem);

var pedro = {
    nome: "pedro",
    idade: 18
};
Object.setPrototypeOf(pedro,homem);

console.log(joao);
console.log(joao.sexo);
for(var c in joao){
    //if(!joao.hasOwnProperty(c)) continue;
    console.log(c)
};
