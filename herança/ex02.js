function Homem (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};
Homem.prototype.sexo = "masculino";

var joao = new Homem("joão", 20);
console.log(joao);
console.log(joao.sexo);

/*var pedro = {};
pedro.__proto__ = Homem.prototype;
Homem.call(pedro, "Pedro malaquias", 18);*/
function _new (f) {
    var obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, Array.prototype.slice.call(arguments, 1));
    return obj;
}
var pedro = _new(Homem, "pedro", 18);
console.log(pedro);

