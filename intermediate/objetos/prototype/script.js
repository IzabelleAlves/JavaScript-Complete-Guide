const eu = new Pessoa("Izabelle", 22);

eu.andar = function () {
  return "andouuuu";
};
console.log(Pessoa.prototype);
console.log(eu.prototype);

Pessoa.prototype.andar = function () {
  return this.nome + " Pessoa andou";
};

// crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// crie um método no protótipo e retorne o nome completo das pessoas
Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome} ${this.idade}`;
};

let iza = new Pessoa("Izabelle", "Alves", 22);

// liste os métodos acessaos por daos criados com NodeList, HTMLCollection, Document

// liste os construtores dos dados abaixo
const li = document.querySelector("li");

// `.constructor.name` retorna o nome do construtor do objeto, ou seja, o nome do tipo do valor.

li; // li.constructor.name  // HTMLLICollection
li.click; // li.click.constructor.name //  Function
li.innerText; // li.innerText.constructor.name // String
li.value; // li.value.constructor.name // Number
li.hidden; // li.hidden.constructor.name // Boolean
li.offsetLeft; // li.offsetLeft.constructor.name //  Number
li.click(); // li.click() // undefined

// qual o constructor do dado abaixo?
li.hidden.constructor.name; // inteiro retorna uma string, mas é no fundo um boolean
