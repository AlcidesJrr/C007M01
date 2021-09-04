const prompt = require('prompt-sync')({ sigint: true });

console.log('Iniciando Jogo de Dados!!');
console.log();


var rodLista = [];
var vencedor;

numeroJogadores()

function numeroJogadores() {
    qntJogadores = 0
while (qntJogadores < 2) {
    qntJogadores = +prompt('Quantos jogadores irão participar? ');
    if (qntJogadores <= 1) {
      console.log('Você anda muito solitário, arrume um amigo para jogar.')
    }
    else if (isNaN(qntJogadores)) {
        console.log('Valor digitado não corresponde a um numero.')
        numeroJogadores();
      }
}
}

numeroRodadas()

function numeroRodadas() {
    rodadas = 0
    while (rodadas < 1) {
    rodadas = +prompt('Quantas partidas gostaria de jogar? ');
    if (rodadas <= 0) {
      console.log('Digite um valor acima de 0')
    }
    else if (isNaN(rodadas)) {
        console.log('Valor digitado não corresponde a um numero.')
        numeroRodadas();
      }
}
}
    var jogadores = [];
    for (i = 0; i < qntJogadores; i++) {
    let nomes = {}; 
    nomes.nome = prompt('Digite o nome de cada jogador: ');
    jogadores.push(nomes)
}

console.log();

function main() {
    
    console.log(`${j + 1}º Rodada!!`);
    var jogos = [];
    console.log();
    
    for (let i = 0; i < qntJogadores; i++) {
        let jogo = {
            nome: jogadores[i].nome,
            numero: Math.floor(Math.random() * 6 + 1),
        };
   
        jogos.push(jogo);
    
        jogos.sort(function (a, b) {
            if (a.numero > b.numero) {
                return -1;
            }
            if (a.numero < b.numero) {
                return 1;
            }
            return 0;
        });
    }

    for (i = 0; i < qntJogadores; i++) {
        console.log(`${i + 1}º Jogador ${jogos[i].nome} sorteia o nº: ${jogos[i].numero}`);
    }
    
    if (jogos[0].numero > jogos[1].numero) {
        console.log(`-----------------------------------`)
        console.log(`${jogos[0].nome} vence a rodada!!`);
        console.log(`-----------------------------------`)
        vencedor = jogos[0].nome

    }
    else if (jogos[0].numero == jogos[1].numero) {
        console.log(`-----------------------------------`)
        console.log(`Empate nesta rodada!! `);
        console.log(`-----------------------------------`)
        vencedor = ('Empate')

    }
        rod = [ vencedor ]
    rodLista.push(rod)
    
    console.log(rodLista)
}


function inicio() {
    for (j = 0; j < rodadas; j++) {
        main();
        console.log()
    }
  resultado()
}
    


function resultado(result) {

    console.log('        Resultado Final!!');
    console.log();
    console.log(`-----------------------------------`)

    map = rodLista.reduce(function (prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});

    console.log(map)

    result = map
    delete result.Empate

    mapkeys = Object.keys(result);
    mapvalues = Object.values(result);

    mapvalues.sort((a, b) => b - a)

    for (let i = 0; i < mapkeys.length; i++) {
        console.log(`${i + 1}º - ${mapkeys[i]} - ${mapvalues[i]} vitorias!!`);
    }
    console.log();

    if (mapvalues[0] > mapvalues[1]) {
        console.log(`E o trofeu de grande campeão vai para o jogador: ${mapkeys[0]}.`);
    }
    else if (mapvalues[0] == mapvalues[1]) {
        console.log('E hoje não temos um campeão, a rodada termina empatada!!');
    }
    else if (mapvalues[0] > null) {
        console.log(`E o trofeu de grande campeão vai para jogador: ${mapkeys[0]}.`);
    }
    else if (mapvalues[0] = null) {
        console.log('E hoje não temos um campeão, a rodada termina empatada!!');
    }

}

inicio();
