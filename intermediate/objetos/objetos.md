# Introdução a Objetos em JavaScript

- Conjunto de variáveis e funções que são chamadas de propriedades e métodos.
- Os **objetos** são um dos principais pilares do JS, permitindo a organização em pequenas partes, estruturação e reutilização do código. Em termos simples, um objeto é uma coleção de **propriedades**, onde cada propriedade é composta por um **par chave-valor**.
- Objetos têm acesso às variáveis que foram criadas fora dele.

---

## Estrutura Básica de um Objeto

Um objeto em JavaScript é definido usando **chaves** `{}`. Ele pode conter propriedades e métodos:

```javascript
const pessoa = {
  nome: "Ana",
  idade: 25,
  possuiFaculdade: true,
  saudacao: function () {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  },
};

console.log(pessoa.nome); // "Ana"
console.log(pessoa.saudacao()); // "Olá, meu nome é Ana e tenho 25 anos."
```

## Componentes

1. **Propriedades:** São as variáveis associadas ao objeto (exemplo: nome, idade - que também são chamadas de "chaves").
2. **Métodos:** São funções associadas ao objeto (exemplo: saudacao()). Em outras palavras, quando uma função for uma propriedade.

## Palavra `This`

- `This` faz referência ao objeto em si.

**Exemplo:**

```javascript
const pessoa = {
  nome: "Izabelle",
  idade: 23,
  dizerNome: function () {
    console.log(this.nome), // `this` refere-se ao objeto `pessoa`
  },
  //O método também poderia ter sido declarado da seguinte forma:
  dizerNome() {
    console.log(this.nome); //sem o 'function'
  },
};

pessoa.dizerNome(); // Saída: Izabelle
```

- Pode ser usado para acessar outras propriedades ou métodos do mesmo objeto.

## Para criar um Objeto

- Sempre utilizamos as chaves `{}`

```javascript
var carro = {};
var pessoa = {};

console.log(typeof carro);
```

## Dot Notation Get

- Acesse propriedades de um objeto utilizando o ponto `.`.
- TUDO É OBJETO em JS.

```javascript
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

var bg = menu.backgroundColor; //"#84E";
//acessei a propriedade do objeto a partir do `.`
```

## Dot Notation Set

- Substitua o valor de uma propriedade utilizando `.` e o `=` após o nome dela.

```javascript
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.backgroundColor = "#000";
console.log(menu.backgroundColor); // saída: "#000"
//alterei o valor da propriedade do objeto a partir do `.`
```

## Protótipo e Herança

- O objeto herda as propriedades e métodos do objeto que foi utilizado para criá-lo
- `.hasOwnProperty`: Método que verifica se determinada propriedade foi criada no objeto. Retorna true or false. Exemplo:

```javascript
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.hasOwnProperty("color"); //false, pq não existe no objeto.
```
