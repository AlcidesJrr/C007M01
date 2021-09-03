const prompt = require('prompt-sync')();

console.log('Jogo Jokenpô\n');
var nome = prompt('Digite seu nome: '); 
var comp = ['pedra', 'papel', 'tesoura'];
var computador = ('Computador');
var empate = ('Empate');
var vitoria = 0
var derrota = 0

function partidas() {
    rodadas = 0;
    while (rodadas < 1) {
    rodadas = +prompt('Quantas partidas gostaria de jogar? ');
    if (rodadas <= 0) {
      console.log('Valor inválido!!!')
      }
  }
    return rodadas;
}

function jokenpo() {
  var escolha = prompt('Escolha: Pedra, Papel ou Tesoura: ');
  var compRandom = comp[Math.floor(Math.random() * comp.length)];
  console.log(`${computador}: ${compRandom}`);
  
  if ((escolha.toLowerCase()) === 'pedra' && compRandom === 'tesoura' ) {
    console.log(`${nome} vence a rodada!!`);
    vitoria++
  }
  else if ((escolha.toLowerCase()) === 'tesoura' && compRandom === 'papel' ) {
   console.log(`${nome} vence a rodada!!`);
   vitoria++
  }
   else if ((escolha.toLowerCase()) === 'papel' && compRandom === 'pedra' ) {
   console.log(`${nome} vence a rodada!!`);
   vitoria++
  }
   else if ((escolha.toLowerCase()) === compRandom) {
   console.log(`Empate`);
  }
  else { 
   console.log(`${computador} vence a rodada!`);
   derrota++
  } 
 return '';
}

console.log( );

function inicio() {
  qnt = partidas();
  for (var i = 0; i < qnt; i++) {
  console.log(jokenpo());
  } 
  result();
  return '';
}

function result () {
  console.log(`Resultado:\n${nome}: ${vitoria}\n${computador}: ${derrota}`);

  if (vitoria > derrota) {
    console.log(`${nome} é o grande campeão!!!`)
  }
  else if (vitoria == derrota) {
  console.log(`${nome} e ${computador} empatam!!`)
  }
  else {
   console.log(`${computador} é o grande campeão!!`)
  }
   novoJogo();
} 

function novoJogo() {
 var jogarNovamente = prompt('Gostaria de jogar novamente?? [S/N]: ')
   if ((jogarNovamente.toLowerCase()) === 's') {
   vitoria = 0
   derrota = 0
   inicio();
   } 
   else{
   console.log('Obrigado e até logo!')
   }
    return '';
}

inicio();
