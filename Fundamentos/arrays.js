const valores = [7.7 ,8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[6] = 10;
console.log(valores);
console.log(valores.length); // a função .length mostra quantos elementos tem dentro de uma array

valores.push({id: 3}, false, null, 'Teste'); // A função .push é utilizada para adicionar novos elementos em uma array
console.log(valores);

console.log(valores.pop()); // a função pop() pega o ultimo valor da array para retornar somente ele.
delete valores[0]; // delete irá deletar o elemento escolhido da array
console.log(valores);

console.log(typeof valores);