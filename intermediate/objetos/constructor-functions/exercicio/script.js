// const Dom = {
//   //objeto simples/puro
//   seletor: "li", //propriedade do objeto
//   element() {
//     //método do objeto
//     const elementoSelecionado = document.querySelector(this.seletor);
//     return elementoSelecionado;
//   },
//   ativar() {
//     this.element().classList.add("ativar");
//   },
// };

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function () {
    this.element().classList.add("ativar");
  };
}

const li = new Dom("li");
const ul = new Dom("ul");

//Dois objetos com os mesmos métodos e propriedades
