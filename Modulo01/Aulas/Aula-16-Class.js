const prompt = require('prompt-sync')();

// CLASSE
// Classe é definida com a primeira letra Maiúscula.
// Objetos letras minúscula.

// class Carro {
//     constructor(marca, modelo, ano, proprietario_carro) {
//     this.marca = marca
//     this.modelo = modelo
//     this.ano = ano
//     this.proprietario = proprietario_carro
//     }
//     acelerar() {
//         console.log(`${this.modelo} faz VRUUMMM VRUMMMMMM`)
   
// }

// let carro1 = new Carro('VW', "Fusca", 77, 'Joyce');
// let carro2 = new Carro('BMW', 'I9', 2021, 'Alcides');

// // console.log(carro1);
// // console.log(carro2);
// // console.log(carro2.proprietario);

// carro1.acelerar();

/*
 EXERCÍCIO:
 Crie uma classe Pessoa, com os atributos:
 nome, peso, idade 
 e os métodos:
 envelhecer, engordar, emagrecer, dados
 envelhecer aumenta 1 na idade
 emagrecer diminui 1 no peso
 engordar aumenta 1 no peso
 dados mostra todos os atributos (nome, idade peso).
 Depois crie 2 objetos dessa classe e teste se os métodos
 estão todos funcionando para cada um.

 Depois crie 2 objetos dessa classe e teste se os métodos estão todos funcionando para cada um.
 */


class Pessoa {
    constructor(nome, peso, idade) {
        this.nome = nome,
        this.peso = peso,
        this.idade = idade
    }
    envelhecer() {
        this.idade += 1;
    }
    // valor padrão... se chamar o método sem valor de argumaneto ex: pessoa1.engordar() ele vai somar 1, caso eu passe um argumento ex: pessoa1.engordar(5), ele ignora o 1 e usar o argumento quuilos.
    engordar(quilos = 1) {
        this.peso += quilos;
    }
    emagrecer() {
        this.peso -= 1;
    }
    dados() {
        console.log(`O paciente ${this.nome} com idade ${this.idade} pesou ${this.peso}kg.`)
    }
    lista_dados() {
        return [this.nome, this.idade, this.peso];
    }
}
 
let pessoa1 = new Pessoa('Alcides', 71, 36)
let pessoa2 = new Pessoa('Joaquim', 85, 42)
let lista = pessoa1.lista_dados();
let lista1 = pessoa2.lista_dados();

pessoa1.dados();
pessoa1.envelhecer();
pessoa1.engordar(10);
console.log(lista);
console.log();

console.log('Retorno após 12 meses')
pessoa1.dados();
console.log('..............................................\n');

pessoa2.dados();
pessoa2.envelhecer();
pessoa2.emagrecer();
pessoa2.lista_dados();
console.log();

console.log('Retorno após 12 meses')
pessoa2.dados();
console.log(lista1);
