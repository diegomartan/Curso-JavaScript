let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('São os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'Texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Pra finalizar');
console.log(!!('' || null || 0 || ' ')) // Nesse caso ele retornará o único que é verdadeiro, ou o primeiro que for verdadeiro.

let nome = ''
console.log(nome || 'Desconhecido'); // pelo fato da variavel "nome" estar vazia, ela retornará como 'false', portanso o console irá imprimir o valor que for verdadeiro, que no caso é a palavra "Desconhecido".

