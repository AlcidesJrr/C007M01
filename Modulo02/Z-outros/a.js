const elementoNome = document.getElementById('nome');
const elementoSituacao = document.querySelector('#situacao');
const elementoImg = document.querySelector('#imagem')
let elementoBtn = document.querySelector('#alterar') 

/* Adiciona o evento de click no elementoBtn e executa a função anonima (arrow function) */
elementoBtn.addEventListener('click', () =>{
    /* Verifica se o valour do botão é 'primeiro', se for troque de humor para o Hulk */
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/Hulk.png' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Hulk' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Pistola' /* Altera o texto do elemento situação */
        elementoBtn.value = 'segundo' /* Altera valor do botão */
    } else if(elementoBtn.value == 'segundo') { /* Verifica se o valour do botão é 'segundo', se for troque de humor para o Dr. Hulk */
        elementoImg.src = './assets/img/Dr. Hulk.png'  /* Troca a imagem do personagem */
        elementoNome.innerText = 'Dr. Hulk' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Pistola geek' /* Altera o texto do elemento situação */
        elementoBtn.value = 'terceiro'  /* Altera valor do botão */
    } else { /* Se os valores do botão não forem, 'primeiro' nem 'segundo' mude para o Dr. Banner */
        elementoImg.src = './assets/img/Dr. Banner.png' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Dr. Banner' /* Altera o texto do elemento nome */
        elementoSituacao.innerText = 'Simples humano' /* Altera o texto do elemento situação */
        elementoBtn.value = 'primeiro' /* Altera valor do botão */
    }
})

// const elementoNome = document.getElementById('nome');
// const elementoSituacao = document.querySelector('#situacao');
// const elementoImg = document.querySelector('#imagem')
// let elementoBtn = document.querySelector('#alterar') 

// elementoBtn.addEventListener('click', () =>{
//     if(elementoBtn.value == 'primeiro'){
//         elementoImg.src = '../assets/img/Hulk.png' 
//         elementoNome.innerText = 'Hulk' 
//         elementoSituacao.innerText = 'Pistola' 
//         elementoBtn.value = 'segundo' 
//     } else if(elementoBtn.value == 'segundo') { 
//         elementoImg.src = '../assets/img/Dr. Hulk.png'
//         elementoNome.innerText = 'Dr. Hulk'
//         elementoSituacao.innerText = 'Pistola geek' 
//         elementoBtn.value = 'terceiro'  
//     } else { 
//         elementoImg.src = './assets/img/Dr. Banner.png'
//         elementoNome.innerText = 'Dr. Banner'
//         elementoSituacao.innerText = 'Simples humano'
//         elementoBtn.value = 'primeiro' 
//     }
// })