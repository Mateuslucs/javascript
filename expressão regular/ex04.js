/*[abc] — Aceita qualquer caractere
dentro do grupo, nesse caso a, b e c.

[^abc] — Nao aceita qualquer caractere
dentro do grupo, nesse caso a, b ou c.

[0-9] -— Aceita qualquer caractere
entre 0 e 9.

[^0-9] — Nao aceita qualquer caractere entre 0 e 9.

{n} = determina a quantia exata que vai receber.
{n,} = determina a quantia minima.
{n, m} = determina a quantidade minima e maxima.
*/
var regEx = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
var telefone = "(48) 9999-9999";
console.log(regEx.test(telefone));