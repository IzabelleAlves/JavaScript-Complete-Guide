//Retorne no console todas as imagens do site
let img = document.getElementsByTagName("img");
console.log(img);

//Retorne no console apenas as imagens que começaram com a palavra 'imagem'

let imagensAnimais = document.querySelectorAll(
  'img[src^="/assets/img-animais"]'
);
console.log(imagensAnimais);

//Selecione todos os links internos (onde o href começa com #)

let links = document.querySelectorAll('[href^="#"]');
console.log(links);

//Selecione o primeiro h2 dentro de .animais-descricao

let firstH2 = document.querySelector(".animais-descricao h2");
console.log(firstH2);

//Selecione o ultimo 'p' do site

let ultimoP = document.querySelectorAll("p");
console.log(ultimoP);

console.log(ultimoP[--ultimoP.length]);
