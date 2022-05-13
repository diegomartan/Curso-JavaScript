// Função sem retorno
function impirmirSoma(a, b) {
    console.log(a + b)
}

impirmirSoma(2, 3)
impirmirSoma(2) // ficará indefinido
impirmirSoma(2, 10, 8, 45, 4, 9) // irá ignorar o restante
impirmirSoma()

//Função com retorno

function soma(a, b = 0) {  // estará deixando b com valor 0 se am algum console não houver valor de b
    return a + b
}

console.log(soma(2, 6))
console.log(soma(2)) // nesse caso não foi colocado o valor de b, então ele irá puxar o primeiro valor recebido na function que é 0
console.log(soma())
