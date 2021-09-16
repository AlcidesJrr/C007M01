const prompt = require('prompt-sync')({ sigint: true });

console.log();
class Candidatos {
    constructor(numero, nome, voto) {
        this.numero = numero,
        this.nome = nome,
        this.voto = voto
    }
    votos() {
        this.voto += 1;
    }
    dados() {
        console.log(`${this.numero} - ${this.nome}`)
    }
    lista_candidatos() {
        return [this.nome, this.voto]
    }
}

var cand1 = new Candidatos(1, 'Homer Simpson',0);
var cand2 = new Candidatos(2, 'Montgomery Burns', 0);
var cand3 = new Candidatos(3, 'Ned Flanders', 0);
var nulo = new Candidatos(4, 'Nulo', 0);
var branco = new Candidatos(5, 'Branco', 0);

console.log('Seja muito bem vindo a eleição para prefeito da cidade de Springfield.');

console.log();

do {
    var anoNascimento = +prompt('Digite seu ano de nascimento: ');
    autorizaVoto(anoNascimento)
    
    function autorizaVoto(anoNascimento) {
        const anoAtual = new Date().getFullYear();
        var somaIdade = anoAtual - anoNascimento;

        if (somaIdade > 15 && somaIdade < 18 || somaIdade > 70) {
            valido = ('Opicional.');
            return valido;
        } else if
            (somaIdade > 17 && somaIdade <= 70) {
            valido = ('Obrigatório.');
            return valido;
        } else if
            (somaIdade < 16) {
            valido = ('Negado.');
            return valido;
        }
    }
    var autorizacao = autorizaVoto(anoNascimento)
    votacao(autorizacao);

    function votacao(autorizacao) {
        if (autorizacao == 'Negado.') {
            console.log();
            console.log('Você ainda não pode votar por estar na faixa etária abaixo da idade mínima permitida de 16 anos.');
        } else if
            (autorizacao == 'Obrigatório.') {
            console.log();
            console.log('Seu voto é obrigatório por estar na faixa etária entre 18 à 70 anos.');
            voto();
        } else if
            (autorizacao == 'Opicional.') {
            console.log();
            console.log('Seu voto é opcional por estar na faixa etária entre 16 à 17 anos ou acima de 70 anos.');
            voto();
        }
    
        function voto() {
            console.log();
            console.log('Bem vindo a nossa plataforma de votação.\nEscolha uma das opções:\n');
            cand1.dados();
            cand2.dados();
            cand3.dados();
            nulo.dados();
            branco.dados();
        
            console.log();
            escolha = +prompt('Digite o nº da sua opção: ')
            while (escolha <= 0 || escolha > 5) {
                console.log('Digite uma opção válida')
                escolha = +prompt('Digite o nº da sua opção: ')
            }
    
            if (escolha == 1) {
                cand1.votos();
            } else if
                (escolha == 2) {
                cand2.votos();
            } else if
                (escolha == 3) {
                cand3.votos();
            } else if
                (escolha == 4) {
                nulo.votos();
            } else if
                (escolha == 5) {
                branco.votos();
            }
        }
    }
    retorno();
    
    function retorno() {
        console.log();
        let cont = prompt('Continuar a votação? [S/N] ');
        if ((cont.toUpperCase()) === 'S') {
            resp = cont
        } else if
            ((cont.toUpperCase()) === 'N') {
            resp = cont
        } else {
            console.log('Opção inválida.')
            retorno();
        }
    }
} while (resp.toUpperCase() === 'S')

exibirResultados()

function exibirResultados() {
    console.log()
    console.log('            Resultado')
    console.log('......................................')
    var lista1 = cand1.lista_candidatos();
    var lista2 = cand2.lista_candidatos();
    var lista3 = cand3.lista_candidatos();
    var lista4 = nulo.lista_candidatos();
    var lista5 = branco.lista_candidatos();
    result = [lista1, lista2, lista3, lista4, lista5]
    result.sort((a, b) => b[1] - a[1]);

    var totalVotos = 0
    for (let i in result) {
        totalVotos += result[i][1]
    }
    
    for (let i in result) {
        console.log(`${result[i][0]} - ${result[i][1]} votos - ${((result[i][1] / totalVotos) *100).toFixed(2)} %`);
    }
    console.log('......................................')
    console.log();

    console.log(`O candidato ${result[0][0]} se elegeu com a maioria de ${result[0][1]} votos - ${((result[0][1] / totalVotos) *100).toFixed(2)} %`)

    console.log()
}

