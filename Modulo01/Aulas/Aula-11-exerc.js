const prompt = require('prompt-sync')();

// node aula-11-exerc

let filme1 = {
    nome: 'Meu Nome é Khan',
    duracao: '2h 40 min',
    lancamento: 2010,
    diretor: 'Karan Johar, Hibani Bathija',
    atores: ['Shah Rukh', 'Kajol Devgn', 'Shane Harper', 'Mel Fair']
}

filme1.sobre = function () {
    return `O filme ${this.nome} do diretor ${this.diretor}, lançado em ${this.lancamento} com duração de ${this.duracao} tem como principais atores ${this.atores}.`
}

console.log(filme1.sobre())

console.log();

let filme2 = {
    nome: 'Transcendence - A revolução',
    duracao: '1h 53 min',
    lancamento: 2014,
    diretor: 'Wally Pfsister',
    atores: ['Johnny Depp', 'Rebecca Hall', 'Paul Bettany']
}

filme2.sobre = function () {
    return `O filme ${this.nome} do diretor ${this.diretor}, lançado em ${this.lancamento} com duração de ${this.duracao} tem como principais atores ${this.atores}.`
}

console.log(filme2.sobre())

console.log()

let filme3 = {
    nome: 'A procura da felicidade',
    duracao: '1h 58 min',
    lancamento: 2007,
    diretor: 'Gabriele Muccino',
    atores: ['Will Smith', 'Thandiwe Newton', 'Jaden Smith']
}

filme3.sobre = function () {
    return `O filme ${this.nome} do diretor ${this.diretor}, lançado em ${this.lancamento} com duração de ${this.duracao} tem como principais atores ${this.atores}.`
}

console.log(filme3.sobre())

console.log();

let filme4 = {
    nome: 'A Legião',
    duracao: '1h 42 min',
    lancamento: 2015,
    diretor: 'Davi Kocar, Petr Kubik',
    atores: ['Tom Mckay', 'Michelle Lukes', 'Brian Caspe']
}

filme4.sobre = function () {
    return `O filme ${this.nome} do diretor ${this.diretor}, lançado em ${this.lancamento} com duração de ${this.duracao} tem como principais atores ${this.atores}.`
}

console.log(filme4.sobre())

console.log();

let filme5 = {
    nome: 'Eu sou a Lenda',
    duracao: '1h 40 min',
    lancamento: 2008,
    diretor: 'Francis Lawrence',
    atores: ['will Smith', 'Alice Braga', 'Charlie']
}

filme5.sobre = function () {
    return `O filme ${this.nome} do diretor ${this.diretor}, lançado em ${this.lancamento} com duração de ${this.duracao} tem como principais atores ${this.atores}.`
}

console.log(filme5.sobre())

var catalogo = [filme1, filme2, filme3, filme4, filme5];

for (i = 0; i < 1; i++) {
    console.log(catalogo)
    
}

ou

for (const filme of catalogo) {
    console.log(catalogo);
}


// node aula-11-exerc