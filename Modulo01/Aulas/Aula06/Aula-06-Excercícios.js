const prompt = require('prompt-sync')();

// 01. Crie um array que tenha nomes de 7 pessoas e mostre no console o nome de cada pessoa, uma de cada vez.


let nomes = ['Paulo', 'José', 'João', 'Maria', 'Manoel', 'Fernanda', 'Priscila'];

for (let i of nomes ) {
  console.log(i)
}


// -----------------------------------------------------------------


// 02. Crie um array qye tenha 7 números e moestre no console cada numero somado de  +1.

// let numeros = [1, 2, 3, 4, 5, 6, 7];

// for (let i of numeros) {
// console.log(i +1);
//  }

// 03. Crie uma string e mostre no console letra por letra.

// let palavra = 'otorrinolaringologia';

// for (let i of palavra) {
//   console.log(i);
// }



// -----------------------------------------------------------------



DESAFIO: 

// Crie um script que pergunte 3 números ao usuário, coloque em um array,
// depois exiba tal array.

// Depois use um for para percorrer esse Array, e pergunte para o usuário o novo valor que ele quer colocar em cada posição. (Por exemplo: "Digite um novo valor para a posição 1", "Digite um novo valor para a posição 2", etc...)
// Após isso, substitua o valor na lista original, para o novo valor entrado pelo usuário. 


console.log('Escolha 3 numeros aleatórios!!!\n')

let num1 = +prompt('Digite o primeiro numero:');
let num2 = +prompt('Digite o segundo numero:');
let num3 = +prompt('Digite o terceiro numero:');

var numEscolhidos = [num1, num2, num3];

console.log(numEscolhidos);

console.log();

let novoNum1 = +prompt(`Digite um novo valor para a posição ${num1}`);
let novoNum2 = +prompt(`Digite um novo valor para a posição ${num2}`);
let novoNum3 = +prompt(`Digite um novo valor para a posição ${num3}`);

for (let i of numEscolhidos) {
numEscolhidos.splice(0,3, novoNum1, novoNum2, novoNum3 );
}

console.log(numEscolhidos);





