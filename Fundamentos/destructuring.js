// novo recurso do ES2015

const pessoa = {
    nome: 'Diego',
    idade: 30,
    endereco: {
        logradouro: 'Avenida João César de Oliveira',
        numero: 1368
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const { conta: {ag, num}} = pessoa
console.log(ag, num)