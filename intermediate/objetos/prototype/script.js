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

li;
li.click;
li.innerText;
li.hidden;
li.offsetLeft;
li.click();

// qual o constructor do dado abaixo?
li.hidden.constructor.name;
