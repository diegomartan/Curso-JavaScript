const peso1 = 1.5;
const peso2 = Number(2.0);

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // isInterger serve para ver se o valor é inteiro
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed é usado para definir quantas casas decimais serão exibidas
console.log(media.toString(2)); // toString serve para transformar o número inteiro em número binário, decimal, hexadecimal, etc...
console.log(typeof media);
console.log(typeof Number);