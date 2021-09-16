const prompt = require('prompt-sync')();

// function enviarEmail(corpo, para,) {
//     setTimeout(function () { // Defino um tempo antes de executar a função
//         console.log(`
//         De: Gabrel
//         Para: ${para}
//         ---------------------------------------------
//         ${corpo}
//         `)
//     }, 5000) // fechando o timeout o numero está em milesegundos.
// }

// enviarEmail('Esse é um email de teste', 'usuario@gmail.com');

// console.log('Teste de envio')


function enviarEmail(corpo, para, callback) {
    setTimeout(function () { // Defino um tempo antes de executar a função
        console.log(`
        De: Gabrel
        Para: ${para}
        ---------------------------------------------
        ${corpo}
        `)
        callback()
    }, 5000) // fechando o timeout o numero está em milesegundos.
}

console.log('Enviando email: ')

enviarEmail('Esse é um email de teste', 'usuario@gmail.com', function () {
    console.log('Seu e-mail foi enviado')   
});


