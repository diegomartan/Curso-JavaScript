console.log('01)', '1' == 1) // "==" é igual?
console.log('02)', '1' === 1) // "===" é estritamente igual? (não pois um valor é string e o outro é inteiro)
console.log('03)', '3' != 3) // "!=" é diferente?
console.log('04)', '3' !== 3) // "!==" é estritamente diferente? (Sim pois um valor é string e o outro é inteiro)

console.log('05)', 3 < 2) // é menor?
console.log('06)', 3 > 2) // é maior?
console.log('07)', 3 <= 2) // é menor ou igual?
console.log('08)', 3 >= 2) // é maior ou igual?

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 == d2) // nesse caso ele está comparando o endereço de memória, então nesse caso e no estritamente igual, o resultado será falso
console.log('10)', d1 === d2)
console.log('11)', d1.getTime() === d2.getTime()) // nesse caso será igual pois ele estará comparando o number
console.log('12)', undefined == null)
console.log('13)', undefined === null)
