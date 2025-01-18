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
