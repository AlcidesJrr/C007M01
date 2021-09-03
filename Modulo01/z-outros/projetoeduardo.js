
const prompt = require('prompt-sync')();

let nome
let rodadas
let jogadaPC
let jogadaUser
let rodadasWin = 0
let rodadasDraw = 0
let rodadasLose = 0

function JogadaComp() {
  let jogadaComp = Math.random();
  if (jogadaComp < 0.33) {
    return 1;
  }
  else if (jogadaComp < 0.66) {
    return 2;
  }
  else { return 3};
  
}


function IniciarJogo(deNovo) {
  
  if (deNovo === 1) {
    console.log(`Olá! Vamos jogar novamente ${nome}!`)
    rodadas = +prompt("Quantas rodadas você deseja jogar desta vez?");
    rodadasWin = 0;
    rodadasLose = 0
    rodadasDraw = 0;

  }
  else {
  nome = prompt(`Olá! Seja bem vindo. Qual o seu nome?`);
  //salva apenas o primeiro nome
  if (nome.indexOf(` `) > 0) { 
  nome = nome.slice(0, nome.indexOf(` `))
  }
  rodadas = +prompt("Quantas rodadas você deseja jogar?")

  }
  console.log("Vamos começar!")
  RodadaJogo();
}

function trataJogada(jogada) {
  if ((jogada.toLowerCase() == "pedra")) {
    return 1;
  }
  else if ((jogada.toLowerCase() == "papel")) {
    return 2;
  }
  else if ((jogada.toLowerCase() == "tesoura")) {
    return 3;
  }
  else { console.log("Opção indisponível!") }
}

function FimRodada(resultado) {
  rodadas = rodadas - 1
  if (resultado == 1) {
    console.log(`Você ganhou essa rodada! ${rodadas} rodadas restantes`);
    rodadasWin++
  }
  else if (resultado == 2) {
    console.log(`Você perdeu essa rodada! ${rodadas} rodadas restantes`)
    rodadasLose++
  }
  else if (resultado == 3) {
    console.log(`Empate! ${rodadas} rodadas restantes`)
    rodadasDraw++
  }
  RodadaJogo();
  
}

function RodadaJogo() {
   
   if (rodadas > 0) {
   
    jogadaPC = JogadaComp();
    jogadaUser = prompt(`Escolha pedra, papel ou tesoura:`)
    let jogada = trataJogada(jogadaUser);
    if (jogada == 1) {
     console.log(`Você escolheu: Pedra`)
     if (jogadaPC == 1) {
      console.log(`Eu escolhi: Pedra!`)
      FimRodada(3);
     }
     else if (jogadaPC == 2) {
     console.log(`Eu escolhi: Papel!`)
     FimRodada(2)
     }
     else if (jogadaPC == 3) {
     console.log(`Eu escolhi: Tesoura!`)
     FimRodada(1)
   }
  }
    else if (jogada == 2) {
    console.log(`Você escolheu: Papel`)
     if (jogadaPC == 1) {
      console.log(`Eu escolhi: Pedra!`)
      FimRodada(1);
     }
     else if (jogadaPC == 2) {
     console.log(`Eu escolhi: Papel!`)
     FimRodada(3)
     }
     else if (jogadaPC == 3) {
     console.log(`Eu escolhi: Tesoura!`)
     FimRodada(2)
   }
  }
  else if (jogada == 3) {
    console.log(`Você escolheu: Tesoura`)
     if (jogadaPC == 1) {
      console.log(`Eu escolhi: Pedra!`)
      FimRodada(2);
     }
     else if (jogadaPC == 2) {
     console.log(`Eu escolhi: Papel!`)
     FimRodada(1)
     }
     else if (jogadaPC == 3) {
     console.log(`Eu escolhi: Tesoura!`)
     FimRodada(3)
     }
    }

  }
  else {
    FinalizaJogo();
  }
}

function FinalizaJogo() {
  let rodadasTotal = rodadasWin + rodadasLose + rodadasDraw;
  console.log(`Fim do jogo após ${rodadasTotal} rodadas!`)
  console.log(`Sua pontuação: ${rodadasWin}`)
  console.log(`Minha pontuação: ${rodadasLose}`)
  console.log(`Empates: ${rodadasDraw}`)
  let reiniciar = prompt("Deseja jogar novamente?") 
  if ((reiniciar.toLowerCase() == "sim")) {
    IniciarJogo(1)
  }
  else {
    console.log("Até a próxima!")
  }
}



IniciarJogo();
