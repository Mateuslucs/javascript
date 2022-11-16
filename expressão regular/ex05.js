/**
 * ? = para dizer que é opcional.
 * + = para dizer que vai se repetir.
 */
/**
 * . = representa qualquer caractere.
 * \w = representa o conjunto [a-zA-Z0-9_].
 * \W = representa o conjunto [^a-zA-Z0-9_].
 * \d = representa o conjunto [0-9].
 * \D = representa o conjunto [^0-9].
 * \s = representa um espaço em branco.
 * \S = representa um não espaço em branco.
 * \n = representa um quebra de linha.
 * \t = reprensenta um tab.
 */
/**
 * "g" no final da regEx = é para dizer que continue com match.
 */
/*var regEx = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
var telefone = "çvmivhwiv (48) 995897979 nfi bifhb (81) 99579-2358";*/
var regEx = /(?:\()([\w\s]+)(?:\))/
var telefone = "goiais (GO)";

console.log(telefone.match(regEx));