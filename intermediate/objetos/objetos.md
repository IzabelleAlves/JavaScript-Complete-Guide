# Introdução a Objetos em JavaScript

- Em JavaScript, objetos são a base da linguagem. Um objeto é uma coleção dinâmica de pares chave-valor, podendo conter propriedades e métodos.
- Conjunto de variáveis e funções que são chamadas de propriedades e métodos.
- Permitem a interação entre JS e Browser.
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

## Tudo é Objeto

- Em js, tudo é objeto. Strings, números, boolean, objetos e mais, possuem propriedades e métodos e por isso são objetos.

### String

```javascript
var nome = "Iza";

nome.length; // 3
nome.charArt(1); //'z'
nome.replace("za", "zinha"); //'izinha'
nome; //'Iza'
```

- Uma string herda propriedades e métodos do construtor `String()`.
- Se foi acessar algo e não é um método/função, é uma propriedade.

### Number

```javascript
var altura = 1.69;

altura.toString(); // '1.69' - converte p string
altura.toFixed(1); // 1.7 - arrendonda
```

- Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso, assim, às suas propriedades e étodos.

### Funções

- Também possuem métodos e propriedades

```javascript
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString(); //converte a função em texto, em string.

areaQuadrado.length; // saída: 1 - diz a quantidade de argumentos/parâmetro que essa função tem/pode ter.
```

## Elementos do DOM (Document Object Model)

- Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de Objetos do DOM.
