function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const eu = new Pessoa("Izabelle", 22);

eu.andar = function () {
  return "andouuuu";
};
console.log(Pessoa.prototype);
console.log(eu.prototype);

Pessoa.prototype.andar = function () {
  return this.nome + " Pessoa andou";
};
