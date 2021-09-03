const prompt = require('prompt-sync')();

// // FUNÇÃO

// function funcaoTeste(){
// console.log('Essa é a primeira linha de execução da minha função.');
// console.log('Essa é a segunda.');
// console.log('Depois eu executo essa.');
// console.log('Poderia ter um cálculo ou outra coisa aqui dentro.');
// console.log('Inclusive poderia ter um if.');
// }

// funcaoTeste();

// function saudacao(){
//   let nome = prompt('Qual o seu nome?')
//   let idade = prompt('E a sua idade?')
//   console.log(`Olá ${nome}, seja bem vindo(a)!!`)
//   if (idade >=18) {
//     console.log('Vou te pagar uma cerveja!!')
// } 
// else {
//   console.log('Vou te pagar uma coca!')
// } 
// let entrada = prompt("Deseja chamar a função??? ");

// if (entrada ==="S") {
//   saudacao();
// } else {
//   console.log("Blz, obrigado.");
// }
// } 

// saudacao();

// function funcaosoma(nome, numero1, numero2) {
//   let soma = numero1+numero2;
//   console.log(nome+ ' ' +soma)
// }

// funcaosoma(20, 30 );

// let usuario = prompt("Digite seu nome:")
// let num1 = +prompt("Digite um numero:")
// let num2 = +prompt("Digite outro numero:")

// funcaosoma(usuario, num1, num2);


// Crie uma função chamada calculadora, ela vai receber 2 numero como argumentos que devem ser pedido para o usuario então perguntar o que deve executar: soma ou multiplicação. No final, deve exibir o resultado

console.log('Calculadora\n')

let numero1 = +prompt('Digite um numero:')
let numero2 = +prompt('Digite outro numero:')


function calculadora(num1, num2){
  let pergunta = prompt('somar ou multiplicar?');
  let somar = num1+num2;
  let multiplicar = num1*num2;
if (pergunta == 'somar'){
  console.log (somar);
} 
if (pergunta == 'multiplicar') {
  console.log(multiplicar)
} 
}

calculadora(numero1, numero2)


// RESOLUÇÃO PROFESSORA

function calculadora(numero1,numero2){
let soma = numero1 + numero2;
let multiplicacao = numero1 * numero2;
let escolha = prompt("S "+" Para soma "+"M"+" Para Multiplicação ");
if(escolha === "S" || escolha === "s"){
soma = numero1 + numero2
console.log(soma);
}else if(escolha === "M" || escolha === "m" ){
multiplicacao = numero1 * numero2;
console.log(multiplicacao);
}else{
  console.log("Opção invalida")
}
}
if(escolha === "S" ||  "s")

if(escolha === "S" || escolha === "s")


// Faça um programa que tenha uma função chamada voto() que vai receber como parâmetro o ano de nascimento de uma pessoa, 
// retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:


let anoNascimento = +prompt('Ano de nascimento?');
let soma = 2021 - anoNascimento;

function voto(Ano){
  

  if (soma <16 ){
    console.log('Voto NEGADO');
  } 
  if (soma > 15 && soma == 17){
    console.log('Voto OPCIONAL');
  }
  if (soma >17 && soma<70){
    console.log('Voto OBRIGATÓRIO');
}
  if (soma >70 ){
    console.log('Voto OPCIONAL');
}
}
voto(anoNascimento, soma)



const ano = +prompt("Informe o ano de nascimento: ");
const anoRef = (2021);


function voto() {
    if (idade <= 15) {
        console.log("Baseado na sua idade, você não pode votar.")
    } else if (idade <= 17){
        console.log("Você tem a opção de voto opcional.")
    } else
    console.log("Você tem a obrigatoriedade de votação.")
}

entrada = +prompt("Indique o ano do seu nascimento: ")
let idade = 2021 - entrada

voto()