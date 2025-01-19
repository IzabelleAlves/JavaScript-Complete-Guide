# Conceito de Array

- Um **array** é uma estrutura de dados que armazena uma coleção de elementos, geralmente do mesmo tipo, organizados em uma sequência. Cada elemento no array pode ser acessado por meio de um índice numérico, que geralmente começa em **0**.
- Serve para guardarmos diferentes valores em uma única variável.

## Características de um Array

- **Tamanho fixo**: Em algumas linguagens, o tamanho de um array é definido no momento de sua criação e não pode ser alterado.
- **Índices**: Cada elemento no array é acessado por meio de seu índice.
- **Homogeneidade**: Os elementos de um array geralmente pertencem ao mesmo tipo de dado (inteiros, strings, objetos, etc.).

---

## Sintaxe Básica

```javascript
// Declarando um array vazio
let meuArray = [];
// Declarando e inicializando um array
let numeros = [1, 2, 3, 4, 5];
let videoGames = ["swithch", "PS4"];

//Para acessar uma posição
videoGames[0]; // acessa a posição 0: 'switch'
videoGames[1]; // acessa a posição 2: 'PS4'
```

## Métodos e Propriedades de um Array

**Métodos**
Os métodos de um array são funções embutidas que permitem realizar operações nos arrays, como adicionar, remover, manipular ou iterar elementos. Exemplo:

1. pop() -> Remove o ultimo item e retorna ele.
2. push() -> Adiciona um elemento ao final do array.
3. shift() -> Remove o primeiro elemento do array.
4. unshift() -> Adiciona elementos no início do array.
5. indexOf() -> Retorna o índice do primeiro elemento encontrado.
6. includes() -> Verifica se um elemento existe no array.
   **Existem MUITOS outros métodos**

**Propriedades**
As propriedades são características ou atributos que fornecem informações sobre o array, como o número de elementos ou o tipo do objeto. Exemplo: `Length` retorna o número de elementos no array:

```javascript
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas.length); // Saída: 3
```
