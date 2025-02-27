// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(nome, idade) {
  (this.nome = nome),
    (this.idade = idade),
    (this.andar = function () {
      console.log(nome + " andou");
    });
}

// Crie 3 pessoas
const eu = new Pessoa("Izabelle", 22);
const rubinha = new Pessoa("rubinha", 22);
const celsinho = new Pessoa("celsinho", 22);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:

// elements, retorna NodeList com os elementos elecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  this.elements = document.querySelectorAll(seletor);
  this.addClass = function (classe) {
    this.elements.forEach((e) => {
      e.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    this.elements.forEach((e) => {
      e.classList.remove(classe);
    });
  };
}

const lista = new Dom("li");
lista.addClass("ativo");
lista.removeClass("ativo");
