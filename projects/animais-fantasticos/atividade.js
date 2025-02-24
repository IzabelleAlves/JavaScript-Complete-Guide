function atividadeUm() {
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
}
// atividadeUm();

function atividadeDois() {
  const imgs = document.querySelectorAll("img");
  console.log(imgs);

  // let i = 0;
  imgs.forEach((item, index, array) => {
    console.log(item, index, array);
  });

  //Mostre no console cda paragráfo do site

  const paragrafos = document.querySelectorAll("p");
  paragrafos.forEach((item) => {
    console.log(item);
  });
  //Mostre o textodos paragráfos no
  paragrafos.forEach((item) => {
    console.log(item.innerText);
  });
}
// atividadeDois();

function testandoOClasslist() {
  const menu = document.querySelector(".menu");
  menu.classList.add("ativo");
  menu.classList.add("ativooo", "testee2");
  menu.classList.remove("ativo");
  menu.classList.toggle("red");

  console.log(menu.className);
}
// testandoOClasslist();

function attributes() {
  const animais = document.querySelector(".animais");

  console.log(animais.attributes); //retorna todos os atributos
  // console.log(animais.attributes["data-texto"]); //retorna o primeiro os atributo

  // Adicione a classe 'ativo' em todos os itens do menu

  const menu = document.querySelectorAll(".menu a");

  menu.forEach((item) => {
    item.classList.add("ativo");
  });
  console.log(menu);

  // Remova a classe 'ativo' de todos os itens do menu e matenha apenas no primeiro
  menu.forEach((item) => {
    item.classList.remove("ativo");
  });
  console.log(menu);

  menu[0].classList.add("ativo");

  //Verifique se as imagens possuem o atributo 'alt'

  const imgs = document.querySelectorAll("img");

  imgs.forEach((item) => {
    const possuiAtributo = item.hasAttribute("alt");
    console.log(item, possuiAtributo);
  });

  // Modifique o href do link externo do menu

  //   const links = document.querySelector('a[href^="http"]');
  //   links.setAttribute("href", "google.com");
  //
}
// attributes();
