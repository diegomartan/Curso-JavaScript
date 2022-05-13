function tratarErroELancar(erro) {
    // throw new Error('...') 
    // throw 10
    // throw true
    // throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprirNomeGritado(obj) {
    try { // "try" é um bloco de código onde dentro dele haverá um código que você julga que pode gerar um erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // "catch" é um bloco que ficará associado ao try, onde uma vez que foi gerado uma exceção, esse erro automaticamente irá cair dentro de "catch" para ser tradado, pondendo mostrar uma mensagem para o usuário  
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Diego' }
imprirNomeGritado(obj)