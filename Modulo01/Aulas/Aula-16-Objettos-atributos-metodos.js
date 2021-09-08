const prompt = require('prompt-sync')();

// var pessoa = {
//     nome: 'Alcides',
//     idade: 36,
//     cidade: 'Joinville',
//     dados: function () {
//     return `A pessoa ${this.nome} tem ${this. idade} anos e mora na cidade de ${this.cidade}.`
//     },
//     correr: function () {
//         console.log(`A pessoa ${this.nome} está correndo!!!`);
//     },
//     envelhecer: function () {
//         this.idade = this.idade + 1;
//     } 
// }

// console.log();
// console.log(pessoa.dados());
// pessoa.correr();
// pessoa.envelhecer();
// console.log();
// console.log(pessoa.dados());
// pessoa.correr();
// pessoa.envelhecer();
// console.log(pessoa.dados());

//valor, dado =  atributo.

// Método é uma fuction dentro de um Objeto.

// var carro =  {
//     marca: prompt('Qual marca? '),
//     modelo: prompt('Qual modelo? '),
//     ano: +prompt('Qual ano? '),
//     proprietario: prompt('Digite o nome do proprietário: '),

//     vender: function () {
//         let resposta = prompt(`Você tem certeza que deseja vender o ${this.modelo}? `)
//         if (resposta.toLowerCase() == 'sim') {
//             let novoprop = prompt('Digite o nome do novo proprietário: ')
//             this.proprietario = novoprop
//         console.log(`O carro foi vendido para ${this.proprietario}`)
//         }
//         else {
//             console.log('Ok, vou manter no seu nome.')
//         }
//     }
// }

// console.log(carro);
// carro.vender();
// console.log(carro);

