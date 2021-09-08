const prompt = require('prompt-sync')();

// AULA 07 – CODELAB – EXERCÍCIOS PARA TREINO


// Exercício 1 - Calcular a soma de todos os dígitos de um número inteiro positivo.


let num = prompt('Digite um uma dezena, centena ou milhar: ');
var count = 0;

for (let i of num) {
let int = parseInt(i);
    count = count + int
    console.log(i)
}

console.log(count);

// -----------------------------------------------------------------

// Exercício 2 - Criar uma função que junte dois arrays e retorne o resultado como um novo array.

// function arraysJuntos() {

// let lista1 = ['Joinville', 'Florianópolis', 'São José' ];
// let lista2 = ['Curitiba', 'Mato Grosso', 'Matinhos'];

// console.log(lista1.concat(lista2));
// }

// arraysJuntos()

// ------------------------------------------------------------------

// let lista1 = ['Joinville', 'Florianópolis', 'São José'];
// let lista2 = ['Curitiba', 'Mato Grosso', 'Matinhos'];

// lista1.splice(3,3, lista2[0], lista2[1], lista2[2]);

// console.log(lista1)

// --------------------------------------------------------------------


// var lista1 = ['Joinville', 'Florianópolis', 'São José' ];
// var lista2 = ['Curitiba', 'Mato Grosso', 'Matinhos'];

// console.log(lista1);
// console.log(lista2);

// function arraysJuntos() {
// var lista3 = [];
// lista3.push(lista1 +',' + lista2);
// return lista3

// console.log(lista3);
// }

// arraysJuntos()

// -----------------------------------------------------------------


// Exercício 3 -  Contar a quantidade de palavras em um texto


// function frase(texto) {
//   texto = texto.replace(/( )+/g, "");
//   texto = texto.split(' ');
//   console.log(`Esse conjunto contém um total de ${texto.length} palavras.`)
//   console.log(texto)
// }
// var texto = prompt('Digite um conjunto de palavras:');
// frase(texto)

// -----------------------------------------------------------------

// var texto = prompt('Digite uma texto:');
// texto = texto.replace(/(  )+/g, ""); // remove os espaços
// texto = texto.split(' '); // transforma em lista
// var count = 1
// console.log( )
// console.log(texto)

// function teste() {
//   for (i = 0; i < texto.length; i++)

// console.log(`Esse texto contém um total de  ${count++} palavras.`)
// }

// teste()