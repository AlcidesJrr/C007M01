const prompt = require('prompt-sync')();

let inicio = prompt("Quer tentar a sorte em um jogo de Jokenpô?! ").toUpperCase();
console.log("Olá, me chamo Jake, uma IA simples de Jokenpô! Seja Bem-Vindo(a)!");
console.log("________________________________________________________________");
var rodadas = prompt("Quantas rodadas iremos jogar? ");
console.log("________________________________________________________________");

function jogo() {
    
    for (let i = 0; i < rodadas; i++){
        let jokenpo = prompt("Com o que você prefere perde...Ops, escolher? Pedra, Papel ou Tesoura? ").toUpperCase();
        let botEscolhe = Math.floor(Math.random() *3)+1;
         parseInt(rodadas);
        if (inicio === "SIM"){
        }else{
            console.log("Que pena, estava com vontade de ganhar de alguém! :/");
        };
        console.log("________________________________________________________________");
        console.log("Agora vamos começar!");
        console.log("________________________________________________________________");
        if(jokenpo === "PEDRA"){
            console.log("Muito bem então, você quer ir com Pedra!");
        }else if (jokenpo === "PAPEL"){
            console.log("Entendido, você escolhe Papel então!");
        }else if (jokenpo === "TESOURA"){
            console.log("Você decidiu ir com Tesoura, correto?");
        }else{
            console.log("Vou ter que pedir que escolha uma das 3 opções disponiveis!");
        };
        console.log("________________________________________________________________");
        console.log("Agora é minha vez de escolher HEHEHEHE!");
        if (botEscolhe === 1){
            console.log("Eu vou com Pedra! Obito que me perdoe...");
        }else if (botEscolhe === 2){
            console.log("Eu vou com Papel hein! Prepara!");
        }else if (botEscolhe === 3){
            console.log("Vou com Tesoura! Estilo Edward!")
        }else{
            console.log( )
        };
    }
};
jogo(rodadas);




// node desafiojokenpo