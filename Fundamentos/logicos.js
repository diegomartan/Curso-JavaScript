function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // "||" operação do tipo OU(OR)
    const comprarTv50 = trabalho1 && trabalho2 // "&&" operação do tipo E(AND)
    const comprarTv32 = trabalho1 != trabalho2 // "!=" operação do tipo OU exclusivo(XOR)
    const manterSaudavel = !comprarSorvete // Operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

