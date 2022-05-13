const escola = 'Cod3r'

console.log(escola.charAt(4)); // charAt() é uma função que mostra qual a letra referente a numeração inserida entre parenteses
console.log(escola.charAt(0));
console.log(escola.charCodeAt(3)) // charCodeAt() mostra qual é o código relacionado a tabela Unicode
console.log(escola.indexOf('3')) // indice associado ao digito

console.log(escola.substring(1)) // função que mostra a string apartir do caracter escolhido 
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) // concat serve para concatenar 2 ou mais elementos. Também pode ser usado o sinal de "+", conforme o exemplo abaixo, que também será usado para somar.
console.log('Escola ' + (escola) + ("!")) 
console.log(escola.replace(3, 'e')) // replace é utilizado para fazer uma substituição

console.log('Ana,Maria,Pedro'.split(',')) // split é usado para converter string em array