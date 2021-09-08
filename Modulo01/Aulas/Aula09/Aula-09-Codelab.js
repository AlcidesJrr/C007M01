const prompt = require('prompt-sync')();

// AULA 09 – CODELAB
// EXERCÍCIO 1- Imprimir números de 1 a 10.

// for (i = 1; i < 11; i++) {
//   console.log(i)
// }


// --------------------------------------------------


// EXERCÍCIO 2 - Imprimir a tabuada do número 8.

// var oito = 8

// for (i = 1; i < 11; i++) {
//   console.log(`${oito} x ${i} = ${oito*i}`)
// }


// --------------------------------------------------


// EXERCÍCIO 3 -  Imprimir todas as tabuadas do número 1 ao 10.

// for (i = 1; i < 11; i++) {
//   console.log(`Tabuada ${i}`)
//   for (j = 1; j < 11; j++) {
//     console.log(`${i} x ${j} = ${i*j}`)
//   }
// }

// --------------------------------------------------


// EXERCÍCIO 5 -  Calcular a soma dos números de um array.

// var num = [10,20,30,40];
// var soma = 0;
// for(var i = 0; i < num.length; i++) {
//   soma += num[i];
// }
// console.log(soma)


// --------------------------------------------------


// EXERCÍCIO 6 - Calcular a média de todos os números de um array.

// var num = [10,20,30,40];
// var soma = 0;
// for(var i = 0; i < num.length; i++) {
//   soma += num[i];

// }
// console.log(soma/num.length)


// --------------------------------------------------


// EXERCÍCIO 7 - Criar uma função que receba como parâmetro um array de números e retorne um array contendo somente números positivos.

// var numeros = [10,-25,-36,25,36,-27];

// function arrayPositivo(numeros) {
//    numPositivos = [];
//    for (i = 0; i < numeros.length; i++) {
//     if(numeros[i] > 0){
//     numPositivos.push(numeros[i]);
//     }
//    }
//    return numPositivos;
//   }
  
// arrayPositivo(numeros)


// --------------------------------------------------


// EXERCÍCIO 8 - Localizar o maior valor dentro de um array de números.

// var numeros = [10,-25,-36,25,36,-27];

// Array.max = function numMaior(numeros) {
//   return Math.max.apply(Math, numeros)
//   }
  
// console.log(Array.max(numeros))


// // Funcao para retornar o maior valor de um array
// Array.max = function(array) {
//     return Math.max.apply(Math, array);
// };

// // Agora e so pegar os resultados
// var random = [2, 3, 1, 4, 6, 5];  // Nosso array
// console.log( Array.max(random) ); // Maior valor


// --------------------------------------------------


// EXERCÍCIO 9 -  Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade .
// Assim, a fórmula a seguir define a sequência: 
// Fn = Fn - 1 + Fn - 2



// var num = 10
// var inicio = -1;
// var proximo = 1;
// soma = 0;

// for (i = 0; i < num; i++) {
//     soma = inicio + proximo;
//     inicio = proximo;
//     proximo = soma;
    
//     console.log(proximo)
// }


// --------------------------------------------------



// EXERCÍCIO 10 - Retornar a maior string de um array.

// var lista = ['Bolo', 'Chocolate', 'Castanha', 'nescal'];
// var maior = 0

// for (i = 0; i < lista.length; i++) {
//     if ((lista[i].length) > maior) {
//         maior = lista[i].length;
//     }
    
//     console.log(maior)
// }



// --------------------------------------------------


// EXERCÍCIO 11 -  Criar uma função para inverter um array.

// var lista = ['Bolo,', 'Chocolate', 'Castanha', 'nescal'];

// lista.reverse();
// console.log(lista);


// --------------------------------------------




// node aula-09-codelab
