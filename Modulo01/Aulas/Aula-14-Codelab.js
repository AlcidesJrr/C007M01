const prompt = require('prompt-sync')({ sigint: true });

// AULA 14 – CODELAB
// EXERCICIO 1 - Crie um programa que gerencie o aproveitamento de um jogador de futebol. O programa vai ler o nome do jogador e quantas partidas ele jogou. Depois vai ler a quantidade de gols feitos em cada partida. No final, tudo isso será guardado em um objeto, incluindo o total de gols feitos durante o campeonato.  

// aprov = {}
// aprov.nome = prompt('Digite seu nome: ');
// aprov.partidas = prompt('Quantas partidas jogou?: ');

// let gol = []
// for (i = 0; i < aprov.partidas; i++){
//     let qntGols = {
//         gols: gols = prompt(`Quantos gols fez na ${i + 1}º partida? `)
//     }
//     gol.push(qntGols.gols)
// }

// console.log(gol)


//-----------------------------------------------------------


// EXERCICIO 2 - Vamos criar um script que pede uma senha ao usuário.
// •	Se a senha estiver correta, ele entra no sistema.
// •	Se estiver errada, avisa e pede a senha novamente.

// var senha = ('12345')

// function usuSenha() {
//         let senhaPg = prompt('Digite sua senha: ');
//         if (senhaPg == '12345') {
//             console.log('Bem vindo ao sistema.')
//         }
//         else {
//             console.log('Senha errada tente novamente.')
//             usuSenha();
//         }
// }
// usuSenha();


//-----------------------------------------------------------


// EXERCICIO 3 – Imprima na tela 10 vezes a frase "Hello, Word!"

// for (i = 0; i < 10; i++) {
//     console.log(i + ' - Hello, word!')
// }


//-----------------------------------------------------------

// EXERCICIO 4 – Imprima apenas números pares de 0 até 100.

// for (i = 0; i < 101; i += 2) {
//     console.log(i)
// }


//-----------------------------------------------------------
    

// EXERCICIO 5 - Imprima um array 4 vezes na tela, com os seguintes nomes de carros ["Gol", "Uno", "S10", "Kadett"].

// let carros = ["Gol", "Uno", "S10", "Kadett"]

// for (i = 1; i < 5; i++) {
//         console.log(carros)
//     }


//-----------------------------------------------------------


// DESAFIO: Crie um programa que leia nome, gênero e idade de várias pessoas, guardando os dados de cada pessoa em um objeto e todos os objetos em uma lista. No final, mostre:
// A) Quantas pessoas estão cadastradas.
// B) A média da idade.
// C) Uma lista com as pessoas com gênero feminino.
// D) Uma lista com as idades que estão acima da média.
// OBS: O programa deve garantir que quando perguntar ao usuário se deseja continuar a resposta seja somente S ou N. 

let cadastro = [];

function perguntas() {
    
}





// node Aula-14-Codelab
