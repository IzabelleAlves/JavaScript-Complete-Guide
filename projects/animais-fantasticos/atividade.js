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

function windoww() {
  const primeiroH2 = document.querySelector("h2");
  const h2rect = primeiroH2.getBoundingClientRect();

  console.log(h2rect.top);

  if (h2rect.top < 0) {
    console.log("passou do elemento");
  }

  //Verifique a distância da primeira imagem em relação ao topo da págine
  const img = document.querySelector("img");
  const rect = img.getBoundingClientRect();

  console.log(rect.top);

  //OUUUU

  const imgTop = img.offsetTop;
  console.log(imgTop);

  //Retorne a soma da largura de todas as imagens
  function somaImagens() {
    const imgs = document.querySelectorAll("img");
    let soma = 0;

    imgs.forEach((imagem) => {
      soma += imagem.offsetWidth;
    });
    console.log(soma);
  }

  window.onload = function () {
    somaImagens();
  };

  // Verifique se os links da página possuem o mínimo
  // recomendado para telas utilizadas com o dedo (48px/48px de acordo com o google)
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeigth;

    if (linkWidth > 48 && linkHeight > 48) {
      console.log("Possui acessilibidade");
    } else {
      console.log("Não possui boa acessibilidade");
    }
  });

  //Se o browser for menor que 720px add a classe menu-mobile ao menu

  const browserSmall = window.matchMedia("(max-width: 720px)").matches;

  const menu = document.querySelector(".menu");

  if (browserSmall) {
    menu.classList.add("menu-mobile");
  }
  console.log(menu);
}
// windoww();

// function evento() {
const img = document.querySelector("img");

img.addEventListener("click", () => {
  console.log("Clicou");
});
// }
// evento();

function eventos() {
  // Quando so usuários clicarem nos links internos do site
  // adicione a classe 'ativo' ao item clicado e remova dos demais itens caso eles já possuam.
  // Previna o comportamento padrão dos links

  // const linksInternos = document.querySelectorAll('a[href^="#"]');
  // // console.log(linksInternos);

  // function handleClick(event) {
  //   event.preventDefault();

  //   linksInternos.forEach((link) => {
  //     link.classList.remove("ativo");
  //   });

  //   event.currentTarget.classList.add("ativo");
  //   // ou: this.classList.add("ativo");
  // }

  // linksInternos.forEach((link) => {
  //   link.addEventListener("click", handleClick);
  // });

  // Selecione todos os elementos do site começando a partir do body,
  //ao clique mostre extamente quais elementos estão sendo clicados

  const todosElementos = document.querySelectorAll("body *");

  function handleElement(event) {
    console.log(event.currentTarget);
  }

  todosElementos.forEach((elemento) => {
    elemento.addEventListener("click", handleElement);
  });
  // Ao ionvés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento.
  // const todosElementos = document.querySelectorAll("body *");

  // function handleElement(event) {
  //   event.currentTarget.remove();
  // }

  // todosElementos.forEach((elemento) => {
  //   elemento.addEventListener("click", handleElement);
  // });

  // Se um usuário clicar na tecla 'T' aumente todo o texto do site
  function handleClickT(event) {
    console.log(event.key);
    if (event.key === "t") {
      document.documentElement.classList.toggle("textomaior");
      // document.documentElement fala diretamente com o html
    }
  }

  window.addEventListener("keydown", handleClickT);
}
eventos();

function testeScroll() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function handleClick(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  linksInternos.forEach((link) => link.addEventListener("click", handleClick));
}
testeScroll();
