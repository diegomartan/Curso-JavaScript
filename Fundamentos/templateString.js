const nome = 'Camila';
const concatenacao = 'Olá ' + nome + '!';

const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template);    

// Expressões...

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase() // p é uma função que muda o texto para letras maiúsculas 
console.log(`Ei... ${up('cuidado')}!`)

