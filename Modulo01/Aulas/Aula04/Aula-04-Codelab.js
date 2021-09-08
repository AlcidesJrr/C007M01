const prompt = require('prompt-sync')();

// AULA 04 - CODELAB

// EXERCÍCIO 01 - Considere a string A = "Os limites só existem se você os deixar existir.(goku)". Que fatia corresponde a (goku)?

// RESOLUÇÃO

// const frase = "Os limites só existem se você os deixar existir.(goku)"
// console.log(frase.length);
// console.log(frase.substring(48));


// EXERCÍCIO 02 - Escreva um programa que solicite uma frase ao usuário e escreva a frase toda em maiúscula e sem espaços em branco.

// RESOLUÇÃO

let frase = prompt('Escreva uma frase que defina sua vida');

let fraseSemespaco = frase.replace(/( )+/g, "");

console.log(fraseSemespaco.toUpperCase());



// -----------------------------------------------------------------

// EXERCÍCIO 03 - Elabore um programa que recebe o seu nome, endereço e hobby e mostra cada uma das informações da seguinte forma:

// Nome -> Letra maiúscula
// Endereço -> Letra minúscula
// Hobby -> Primeira letra maiúscula
// Exemplo Entrada:
// Nome: bruno fabri
// Endereço: Rua ABC
// Hobby: jogar cs
// Exemplo Saída:
// Nome: BRUNO FABRI
// Endereço: rua abc
// Hobby: Jogar cs

// RESOLUÇÃO

let nome = prompt('Nome:');
let endereco = prompt('Endereço:');
let hobby = prompt('Hobby:');

console.log(nome.toUpperCase());
console.log(endereco.toLowerCase());
console.log(hobby[0].toUpperCase() + hobby.substring(1));

// EXERCÍCIO 04 - Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
// Crie uma variável para receber o valor, com conversão para int
// Para um número ser par, a divisão dele por 2 tem que dar resto 0

// RESOLUÇÃO

let numero = parseInt(+prompt("Digite um numero"),10);
let total=numero/2;
if(total % 2 == 0){
	console.log("Par");
}else{
	console.log("Impar");
}
console.log(total.toFixed(1));


// -----------------------------------------------------------------


// EXERCÍCIO 05 - Parte 1
// Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo.

// RESOLUÇÃO

let numero = +prompt('Digite um numero:');

console.log(Math.sign(numero));

// ou

let numero = +prompt('Digite um numero:');

if (numero >= 0 ) {
  console.log('O numero é positivo!!')
 if (numero < 0 ) {
  console.log('O numero é negativo!!')
}
}

// Parte 2
// Agora implemente a funcionalidade de não aceitar o número 0, no input.

// RESOLUÇÃO

let numero = +prompt('Digite um numero:');

if (numero > 0 ) {
  console.log('O numero é positivo!!')
} else if (numero < 0 ) {
  console.log('O numero é negativo!!')
} else {'Digite um número diferente de zero.'}


// -----------------------------------------------------------------


// EXERCÍCIO 06 - Faça um programa que peça dois números, imprima o maior deles ou imprima "Numeros iguais" se os números forem iguais.

// RESOLUÇÃO

let num1 = +prompt('Digite um número:');
let num2 = +prompt('Digite um número:');

if (num1 == num2) {
  console.log('Números iguais')
}
  else console.log('Número: ' +Math.max(num1, num2))


// EXERCÍCIO 07 - Crie um programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, caso escreva outra letra: Sexo Inválido.

// RESOLUÇÃO


let letra = prompt('Digite seu sexo (m/f)');

const f = 'F - Feminino';
const m = 'M - Masculino';

if (letra.toLowerCase() == 'f') {
  console.log(f)
} else if (letra.toLowerCase() == 'm') {
  console.log(m)
} else {
  console.log('Sexo Inválido')
}


// -----------------------------------------------------------------


// EXERCÍCIO 08 - Crie um programa em JavaScript que peça a nota do aluno, que deve ser um number entre 0.00 e 10.0

// •	Se a nota for menor que 6.0, deve exibir a nota F.
// •	Se a nota for de 6.0 até 7.0, deve exibir a nota D.
// •	Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
// •	Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
// Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.


// RESOLUÇÃO


let notaAluno = +prompt('Digite sua nota:');

if (notaAluno < 6) {
  console.log('Nota F - Estude mais, você consegue.')
} else if (notaAluno < 7) {
  console.log('Nota D - Você pode melhor, acreditamos em seu potencial')
} else if (notaAluno < 8) {
  console.log('Nota C - Muito bom!!')
} else if (notaAluno < 9) {
  console.log('Nota B - Excelente!!')
} else if (notaAluno <= 10) {
  console.log('Nota A - Magnífico!!')
}


