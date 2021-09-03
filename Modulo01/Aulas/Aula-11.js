const prompt = require('prompt-sync')();

// node aula-11

// OBJETO

// let aluno = {nome: ['Paulo', 'João'], Idade: 20, Curso: 'Blue'};

// let aluno = {nome: {primeiro:'Paulo', sobrenome: 'Santos'}, Idade: 20, Curso: 'Blue'};
// // let aluno = {nome: 'Paulo', Idade: 20, Curso: 'Blue'};

// console.log(aluno.nome.sobrenome)

let filme = {
    nome: 'Meu Nome é Khan',
    lancamento: '10 de fevereiro de 2010',
    diretor: 'Karan Johar, Hibani Bathija',
    producao: 'Dharma Productions'
}


// console.log(filme.nome);
// console.log(filme.lancamento);
// console.log(filme.producao);

// Adicionando uma nova informação

// filme.genero = 'Drama';

// console.log(filme.genero);

// console.log(filme)
// console.log();

// delete filme.genero;
// console.log(filme)

// filme.atores = ['Shah Rukh', 'Kajol Devgn', 'Shane Harper', 'Mel Fair']

// console.log(filme)

filme.sobre = function () {
    return `O filme ${this.nome} do diretor ${this.diretor}, lançado em ${this.lancamento} com produção de ${this.producao}`
}

console.log(filme.sobre())