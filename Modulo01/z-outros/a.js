
const prompt = require('prompt-sync')();

console.log("Bem vindo ao Jokênpo. ");

let vitoria = 0;
let derrota = 0;
let empate = 0;

var sair = "não"

function totalrodadas(){
  var rodadas = +prompt("Quantas rodadas você quer jogar ?");
  return rodadas;
}

function quantidadeJogos(){

let escolha = +prompt('Digite 1 para pedra, 2 para papel e 3 para tesoura:');
let computador = Math.ceil(Math.random()*3);
console.log(computador);

if(escolha == computador){
    console.log("Empate!");
}else if ((escolha - computador == -2) || (escolha - computador == 1)){
    console.log("Você Ganhou");
}else{
  console.log("O Computador ganhou");
}

if (((escolha - computador == -2) || (escolha - computador == 1)) === true){
  vitoria++;
}else if((escolha == computador)===true){
  empate++
}else{
  derrota++
}clearInterval
}
  
function start() {
  qnt = totalrodadas()
  for (let i = 0; i < qnt; i++){
  console.log(quantidadeJogos());
  }
}

console.log(`A quantidade de vitorias é : ${vitoria}`);
console.log(`A quantidade de derrotas é : ${derrota}`);
console.log(`A quantidade de empates é : ${empate}`);

if(vitoria > derrota){
  console.log("Você é o grande vencedor");
}else if (vitoria < derrota){
  console.log("O computador é o grande vencedor");
}else if(vitoria === derrota){
  console.log("Você empatou com o computador.")
}

start();