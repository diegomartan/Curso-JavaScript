// par nome/valor
const saudacao = 'Opa' //contexto léxico

function exec() {
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de nome/valor

const Cliente = {
    nome: 'Diego',
    idade: 30,
    peso: '60 kg',
    endereco: {
        logradouro: "Avenida Teleférico",
        numero: 156
    }

}

console.log(saudacao)
console.log(exec())
console.log(Cliente)