//Crie um objeto com seus dados pessoais
//Crie um método no objeto anterior que mostre seu nome completo

let dados = {
  nome: "Izabelle",
  sobrenome: "Alves",
  idade: 23,
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

// Modifique o valor de preço para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Cire um objeto de um cachorro que represente um labrador preto com 10 anos
//que late ao ver um homem

let cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa == "homem") {
      return `latiu`;
    } else {
      return "lamber";
    }
  },
};

// Nomeie 3 propriedades ou métodos de strings
var nome = "Izabelle";
// fixed;
// length;
// slice;

// Nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
// addEventListener
// appendChild
// innerHtml
//id
console.log(btn);

// Busque na web um objeto (método) capaz de interafir com o clipboard,
//clipboard é a parte do computador que lida com o CTRL + C e CTRL + V
