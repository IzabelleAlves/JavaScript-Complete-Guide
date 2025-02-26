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
