const prompt = require('prompt-sync')();

// TRANSFORMANDO STRING EM NUMBER

// *LEMBRANDO QUE PARA USAR NUMERO O RESULTADO DO PROMPT EM NUMBER
// BASTA COLOCAR O + NA FRENTE EX:  let numero3 = +prompt("digite um numero");

// NO ENTANTO TEM SITUAÇÕES QUE É PRECISO FAZER A CONVERSÃO

let numero3 = prompt("Digite um número:");
let numero4 = prompt("Digite outro número:");

console.log(typeof(numero3));
console.log(numero3+numero4);

CONVERSÃO

let num3Conv = Number(numero3);
let num4Conv = Number(numero4);
console.log(num3Conv+num4Conv);

console.log(typeof(num3Conv+num4Conv));

// OU CONVERTER DENTRO DA PRÓPRIA VÁRIAVEL

num3 = Number(numero3);
num4 = Number(numero4);
console.log(num3+num4);

console.log(typeof(num3+num4));


// TRANSFORMANDO NUMBER EM STRING

 let numero3 = prompt("Digite um número:");

 let numero3str = numero3.toString();
 console.log(typeof(numero3str));


// Escreva um programa que receba o ano de nascimento do usuário, e apresente na tela se ele é maior ou menor de idade

let ano = +prompt("Em que ano você nasceu?");
let idade = 2021 - ano;

if (idade >= 18) {
  console.log("Você é maior de idade!!")
} else {
  console.log("Você é menor de idade!!")
}

// -----------------------------------------------------

let numero = +prompt("Digite um número");

if (numero > 18) {
  console.log("Esse numero é maior que 18")
}  else if (numero < 18) {
  console.log("Esse numero é menor que 18")
}



// MATERIAL DO PROFESSOR

let numero = +prompt("Digite um número: ");

if (numero > 20){
  console.log("O número é maior que 20")
} else if (numero <20){
  console.log("O número é menor que 20")
} else {
  console.log("O número é 20!!")
}

let cidade = prompt("De onde você é?? ")

if (cidade === "Londrina"){
  console.log("Parabéns!!! Você mora na melhor cidade do sul da galáxia!")
} else {
  console.log("Que pena, mas espero que sua cidade também seja legal.")
}


// Escreva um programa que receba o ano de nascimento do usuário, e apresente na tela se ele é maior ou menor de idade

let ano = +prompt("Em que ano você nasceu? ");

let idade = 2021-ano;

if (idade >= 18){
  console.log("Você é maior de idade!")
} else {
  console.log("Você é menor de idade!")
}


// Testando duas condições ao mesmo tempo

let usuario = "Admin";
let senha = "Blue123"

let entradauser = prompt("Digite o usuario: ");
let entradasenha = prompt("Digite a senha: ");

if (entradauser === usuario && entradasenha === senha){
  console.log("Acesso autorizado!")
} else {
  console.log("Acesso negado!")
}