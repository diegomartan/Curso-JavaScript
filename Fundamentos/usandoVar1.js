{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}

console.log(sera) // uma variavel "var" será exibida tbm fora se for declarada dentro de um bloco

function teste() {
    var local = 123
    console.log(local)
}
teste() // -> está chamando a funçao para ser executada 
console.log(local) // quando uma variavel "var" é declarada dentro de uma function ela será exibida somente dentro da function

