// ^ = para dizer que tem q começar com o elemento que vem a seguir
// $ = para dizer em qual elemento ele termina, colocando o final
var regEx = /^\(48\) 9999-9999$/;
var telefone = "(48) 9999-9999";
console.log(regEx.test(telefone));