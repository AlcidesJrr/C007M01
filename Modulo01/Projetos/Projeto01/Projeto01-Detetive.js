const prompt = require('prompt-sync')();


console.log('Projeto Sherlock - Alcides dos Santos Junior\n');
console.log('Responda as cinco perguntas abaixo com [S/N]:\n');

function tel() {
  let telefonou = prompt('1. Telefonou para vítima?');
  if (telefonou == 's' || telefonou == 'S') {
    telefonou = 1
  }
  else if (telefonou == 'n' || telefonou == 'N') {
    telefonou = 0
  }
  else {
    console.log('** Opção inválida!! **')
    console.log('')
    return tel();
  }
  return telefonou;
}

function local() {
  let localCrime = prompt('2. Esteve no local do Crime?');
  if (localCrime == 's' || localCrime == 'S') {
    localCrime = 1
  }
  else if (localCrime == 'n' || localCrime == 'N') {
    localCrime = 0
  }
  else {
    console.log('** Opção inválida!! **')
    console.log('')
    return local();
  }
  return localCrime;
}

function home() {
  let morar = prompt('3. Mora perto da vítima?');
  if (morar == 's' || morar == 'S') {
    morar = 1
  }
  else if (morar == 'n' || morar == 'N') {
    morar = 0
  }
  else {
    console.log('** Opção inválida!! **')
    console.log('')
    return home();
  }
  return morar;
}

function deve() {
  let dever = prompt('4. Devia para vítima?');
  if (dever == 's' || dever == 'S') {
    dever = 1
  }
  else if (dever == 'n' || dever == 'N') {
    dever = 0
  }
  else {
    console.log('** Opção inválida!! **')
    console.log('')
    return deve();
  }
  return dever;
}

function trabalho() {
  let trabalhar = prompt('5. Já trabalhou perto da vítima?');
  if (trabalhar == 's' || trabalhar == 'S') {
    trabalhar = 1
  }
  else if (trabalhar == 'n' || trabalhar == 'N') {
    trabalhar = 0
  }
  else {
    console.log('** Opção inválida!! **')
    console.log('')
    return trabalho();
  }
  return trabalhar;
}

let soma = tel() + local() + home() + deve() + trabalho()

console.log('')

if (soma === 2) {
  console.log(`Você informou ${soma} respostas positivas o que faz de você um supeito (a) pelo crime.`)
}
if (soma > 2 && soma < 5) {
  console.log(`Você informou ${soma} respostas positivas o que faz de você cúmplice pelo crime.`)
}
if (soma === 5) {
  console.log(`Você informou ${soma} respostas positivas o que faz de você o assassino (a) pelo crime.`)
}
if (soma < 2) {
  console.log(`Você informou ${soma} resposta positiva o que faz de você inocente.`)
}


// RETORNA DA PRIMEIRA PERGUNTA INVÁLIDA

// console.log('Projeto Sherlock - Alcides dos Santos Junior\n');
// console.log('Responda as cinco perguntas abaixo com [S/N]:\n');

// function sherlock() {

//   let telefonou = prompt('1. Telefonou para vítima?');
//   if (telefonou == 's' || telefonou == 'S') {
//     telefonou = 1
//   }
//   else if (telefonou == 'n' || telefonou == 'N') {
//     telefonou = 0
//   }
//   else {
//     console.log('** Opção inválida!! **')
//     console.log('')
//     return sherlock();
//   }
 
//   let localCrime = prompt('2. Esteve no local do Crime?');
//   if (localCrime == 's' || localCrime == 'S') {
//     localCrime = 1
//   }
//   else if (localCrime == 'n' || localCrime == 'N') {
//     localCrime = 0
//   }
//   else {
//     console.log('** Opção inválida!! **')
//     console.log('')
//     return sherlock();
//   }

//   let morar = prompt('3. Mora perto da vítima?');
//   if (morar == 's' || morar == 'S') {
//     morar = 1
//   }
//   else if (morar == 'n' || morar == 'N') {
//     morar = 0
//   }
//   else {
//     console.log('** Opção inválida!! **')
//     console.log('')
//     return sherlock();
//   }

//   let dever = prompt('4. Devia para vítima?');
//   if (dever == 's' || dever == 'S') {
//     dever = 1
//   }
//   else if (dever == 'n' || dever == 'N') {
//     dever = 0
//   }
//   else {
//     console.log('** Opção inválida!! **')
//     console.log('')
//     return sherlock();
//   }

//   let trabalhar = prompt('5. Já trabalhou perto da vítima?');
//   if (trabalhar == 's' || trabalhar == 'S') {
//     trabalhar = 1
//   }
//   else if (trabalhar == 'n' || trabalhar == 'N') {
//     trabalhar = 0
//   }
//   else {
//     console.log('** Opção inválida!! **')
//     console.log('')
//     return sherlock();
//   }

// let soma = telefonou + localCrime + morar + dever + trabalhar

// console.log('')

// if (soma === 2) {
//   console.log(`Você informou ${soma} respostas positivas o que faz de você um supeito (a) pelo crime.`)
// }
// if (soma > 2 && soma < 5) {
//   console.log(`Você informou ${soma} respostas positivas o que faz de você cúmplice pelo crime.`)
// }
// if (soma === 5) {
//   console.log(`Você informou ${soma} respostas positivas o que faz de você o assassino (a) pelo crime.`)
// }
// if (soma < 2) {
//   console.log(`Você informou ${soma} resposta positiva o que faz de você inocente.`)
// }
// }

// sherlock()