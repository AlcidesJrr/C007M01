
const prompt = require('prompt-sync')();

// AULA 04 - CODELAB

// DESAFIO 01

// Reajuste salarial
// As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

// •	salários até R$ 280,00 (incluindo) : aumento de 20%
// •	salários entre R\$ 280,00 e R$ 700,00 : aumento de 15%
// •	salários entre R\$ 700,00 e R$ 1500,00 : aumento de 10%
// •	salários de R$ 1500,00 em diante : aumento de 5%

// Após o aumento ser realizado, informe na tela:

// •	o salário antes do reajuste;
// •	o percentual de aumento aplicado;
// •	o valor do aumento;
// •	o novo salário, após o aumento.

// RESOLUÇÃO


console.log('Empresa @.com\n');

const salario = +prompt('Salário:');

if (salario <= 280) { 
  percentual = 20;
}
 else if (salario <= 700 ) {
 percentual = 15;
 }
 else if (salario <= 1500) {
   percentual = 10;
 }
 else if (salario > 1500) {
   percentual = 5
 }

console.log(`Salário antes do reajuste: ${salario.toFixed(2)}`);
console.log(`Percentual de aumento aplicado: ${percentual}%`);

aumento = salario*percentual/100;
total = salario + aumento;

console.log(`Valor do aumento: ${aumento.toFixed(2)}`);
console.log(`Novo salário: ${total.toFixed(2)}`);


// -----------------------------------------------------------------


// DESAFIO 02
// Jogo da adivinhação
// Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.


RESOLUÇÃO

console.log('Jogo da Adivinhação\n');


const numero = Math.floor(Math.random() * 11);
const numeroEscolhido = +prompt('Escolha um número de 0 a 10:');

if (numeroEscolhido === numero) {
  console.log('Parabéns você venceu!!!')
} else console.log('Você perdeu!!!')

console.log(`Numero: ${numero}`);


// -----------------------------------------------------------------


// DESAFIO 3
// Caixa eletrônico
// Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
// Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
// Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.


// RESOLUÇÃO  

console.log('Caixa Eletrônico\n');

console.log('Notas disponíveis 1, 5, 10, 50 e 100.');
const saque = +prompt('Informe um valor entre R$ 10 e R$ 600:');

if (saque <= 0) {
  console.log('Valor inválido')

} else { 
  nota100 = Math.floor(saque/100);
  saldo = saque % 100;
  nota50 = Math.floor(saldo/50);
  saldo = saldo % 50;
  nota10 = Math.floor(saldo/10);
  saldo = saldo % 10;
  nota5 = Math.floor(saldo/5);
  saldo = saldo % 5;
  nota1 = saldo;
} 
 if (nota100 !== 0) {
  console.log(+nota100 + ' Notas de R$ 100,00' );
 }
 if (nota50 !==0) { 
  console.log(+nota50 + ' Notas de R$ 50,00' );
 }
  if (nota10 !==0) { 
  console.log(+nota10 + ' Notas de R$ 10,00' );
 }
 if (nota5 !==0) { 
  console.log(+nota5 + ' Notas de R$ 5,00' );
 }
 if (nota1 !==0) { 
  console.log(+nota1 + ' Notas de R$ 1,00' );
 }


