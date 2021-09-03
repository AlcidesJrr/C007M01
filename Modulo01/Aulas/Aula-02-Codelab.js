const prompt = require('prompt-sync')();

// AULA 02 - CODELAB

// EXCERCÍCIO 1

console.log('O primeiro programa a gente nunca esquece!');


// -----------------------------------------------------------------


// EXCERCÍCIO 2

const nome = prompt('Nome completo');
const endereco = prompt('Endereço:');
const cep = prompt('Cep');

console.log('Nome: ' +nome);
console.log('Endereco: ' +endereco);
console.log('Cep: ' + cep);



// -----------------------------------------------------------------


// EXCERCÍCIO 3

console.log(" I gotta get home, there's a garden to tend \n All the fruit's on the ground \n And the birds have all moved back into my attic whistling static\n Younger to fly I will patch up the holes once again \n ")

console.log(" Well, I can't believe that my lime tree is dead \n I thought it was sleeping, I guess it got fed up with not being fed \n And I would be too I need food in my belly \n And hope that my time isn't soon, isn't soon ") 

console.log(" So I try to understand what I can't hold in my hand \n And whatever I find, I'll find my way back to you \n And if you could try to find it too \n 'Cause this place has overgrown into waxing mood \n Home is wherever we are if there's love there too \n")

console.log(" In the back of our house there's a trail that won't end \n We were walking so far that it grew back in \n Now there's no trail at all, only grass growing tall \n Get out my machete and battle with time once again \n But I'm 'bout to lose 'cause I'll be damned if time don't win \n")

console.log(" I gotta get home there's a garden to tend \n All the seeds from the fruit buried and began \n Their own family trees, teach them thank you and please \n As they spread their own roots \n Then watch the young fruit grow again \n This old trail will lead me right back to where it begins \n")

console.log(" So I try to understand what I can't hold in my hand \n And whatever I find, I'll find my way back to you \n And if you could try to find it too \n 'Cause this place has overgrown into waxing mood \n Home is wherever we are if there's love here too ") 


// -----------------------------------------------------------------


// EXCERCÍCIO 4

console.log("ALUNO (A)  NOTA");
console.log("========   ====");
console.log("ALINE       9.0");
console.log("MÁRIO       DEZ");
console.log("SÉRGIO      4.5");
console.log("SHIRLEY     7.0");



// -----------------------------------------------------------------


// EXCERCÍCIO 5

console.log('Cadastro de Clientes');
console.log('0 - Fim\n1 - Inclui\n2 - Altera\n3 - Exclui\n4 - Consulta');

const opcao = +prompt("Digite uma opção da lista acima:")
console.log('Você escolheu a opção: ' + opcao)



// -----------------------------------------------------------------


// EXCERCÍCIO 6

console.log('Calculadora de Dano');

const vidaMonstro = +prompt("Quantidade de vida de um monstro (entre 10 e 50)");
const ataqueJogador = +prompt("Valor do ataque do jogador por turno (entre 5 e 10)");
const turnosNecessarios = Math.ceil(vidaMonstro / ataqueJogador);

console.log("O jogador irá derrotar o monstro em:" + turnosNecessarios + " turnos");


// -----------------------------------------------------------------


// EXCERCÍCIO 7

console.log("E os 10% do garçom?");

const valorRefeicao = 42.50;
const txServico = 1.1;
const resultado = valorRefeicao*txServico

console.log("Total da conta: R$ " + resultado.toFixed(2));


// -----------------------------------------------------------------


// EXCERCÍCIO 8

const valorCompra = 100.98;
const valorPago = 150.00;
const operacao = valorPago-valorCompra;

console.log(operacao.toFixed(2));


// -----------------------------------------------------------------



// EXCERCÍCIO 9

console.log('Você está na flor da idade?');

const anoNascimento = +prompt('Ano de Nascimento:');
const anoAtual = +prompt('Ano atual:');
const operacao = anoAtual - anoNascimento;

console.log(operacao + " anos - Você está na flor da idade");


// -----------------------------------------------------------------



// EXCERCÍCIO 10

console.log('Conversor de moedas');

console.log('Informe a opçao desejada');

console.log ('a - Dolar\nb - Euro\nc - Libra Estrelina\nd - Dolar Canadense\ne - Peso Argentino\nf - Peso Chileno');

let dolar = ['U$ ', 5.29];
let euro = ['€ ', 6.176];
let libraEstrelina = ['£ ', 7.255];
let dolarCanadense = ['C$ ', 4.187];
let pesoArgentino = ['$ ', 0.053];
let pesoChileno = ['$ ', 0.0067];

let a = dolar;
let b = euro;
let c = libraEstrelina;
let d = dolarCanadense;
let e = pesoArgentino;
let f = pesoChileno;
 
let moeda = prompt('Escolha uma moeda');
let valor = +prompt('Digite o valor em real:');

if (moeda === 'a' ){
  console.log('Cotação: ' + dolar[0] + (valor*dolar[1]).toFixed(2))
} else if (moeda === 'b' ){
  console.log('Cotação: ' + euro[0] + (valor*euro[1]).toFixed(2))
} else if (moeda === 'c' ){
  console.log('Cotação: ' + libraEstrelina[0] + (valor*libraEstrelina[1]).toFixed(2))
} else if (moeda === 'd' ){
  console.log('Cotação: ' + dolarCanadense[0] + (valor*dolarCanadense[1]).toFixed(2))
} else if (moeda === 'e' ){
  console.log('Cotação: ' + pesoArgentino[0] + (valor*pesoArgentino[1]).toFixed(2))
} else if (moeda === 'f' ){
  console.log('Cotação: ' + pesoChileno[0] + (valor*pesoChileno[1]).toFixed(2))
}


// -----------------------------------------------------------------


// EXCERCÍCIO 11

console.log('Calculadora de aumento de aluguel');

let aluguel = 1000;
let igpm = 1.31;
let operacao = aluguel*igpm;

console.log('R$ ' + operacao.toFixed(2) );



// Exercício 12-  Calculadora de aumento de aluguel - Parte 2
// Altere sua calculadora (feita na parte 1) para receber além do valor do aluguel, o percentual do reajuste no formato 99%.
// Dica: Descubra uma forma de transformar o percentual recebido em um número para efetuar o cálculo

// Exemplo:

// Valor do aluguel = 1000
// Percentual do reajuste = 31%
// Valor do aluguel reajustado = R$1310,00
const valorAluguel = +prompt("Valor do aluguel: ");


const percentualReajuste = prompt("Percentual do reajuste: ");
const percentualReajusteDecimal = (+percentualReajuste.replace("%", "") / 100) + 1;
const valorAluguelReajustado = valorAluguel * percentualReajusteDecimal;

console.log(`O aluguel com reajuste de ${percentualReajuste}% ficará R$${valorAluguelReajustado.toFixed(2)}.`);



