# Material de Revisão - JavaScript

## 1. O que é JavaScript e para que ele é usado?

JavaScript é uma linguagem de programação usada principalmente para criar interatividade em páginas web. Ele roda no navegador e no servidor (com Node.js) e é utilizado para manipular o DOM, fazer requisições assíncronas (AJAX), e construir aplicações dinâmicas.

## 2. O que são variáveis?

Variáveis são alocações de memória no computador para armazenar e manipulaçar de dados.

## 3. Quais são as palavras-chave para declarar variáveis em JavaScript? Qual é a diferença entre elas?

As palavras-chave são `var`, `let` e `const`.

- **`var`**: Escopo global ou de função; pode ser redeclarada.
- **`let`**: Escopo de bloco; não pode ser redeclarada no mesmo escopo.
- **`const`**: Escopo de bloco; o valor não pode ser reatribuído.

## 4. O que é um escopo em JavaScript?

Escopo define onde as variáveis, funções e objetos estão acessíveis no código. Existem três tipos principais:

1. **Escopo Global**: Variáveis declaradas fora de qualquer função podem ser acessadas de qualquer lugar no código.
2. **Escopo de Função**: Variáveis declaradas dentro de uma função só estão acessíveis dentro dela.
3. **Escopo de Bloco**: Variáveis declaradas com `let` ou `const` dentro de um bloco (`{ }`) só podem ser usadas dentro desse bloco.

## 5. Qual é a diferença entre os operadores `==` e `===`?

- **`==`**: Compara apenas os valores, fazendo conversão de tipos (exemplo: `5 == '5'` é `true`).
- **`===`**: Compara valores e tipos, sem conversão (exemplo: `5 === '5'` é `false`).

## 6. O que é uma função de callback?

Uma função de callback é uma função passada como argumento para outra função, para ser executada depois que essa função concluir uma operação.

## 7. Qual é a diferença entre `null` e `undefined`?

- **`null`**: Representa ausência intencional de valor.
- **`undefined`**: Indica que uma variável foi declarada, mas não inicializada, ou que uma propriedade/valor não existe.

## 8. O que é Hoisting em JavaScript?

**Hoisting** é o comportamento do JavaScript onde declarações de variáveis e funções são "movidas" para o topo de seu escopo antes da execução do código.

## 9. Quais são os tipos de dados primitivos em JavaScript?

1. **String**: Sequência de caracteres, por exemplo, `"Olá, mundo!"`.
2. **Number**: Números inteiros e decimais, por exemplo, `42`, `3.14`.
3. **Boolean**: Verdadeiro ou falso, por exemplo, `true`, `false`.
4. **Undefined**: Valor de uma variável não inicializada.
5. **Null**: Representa a ausência intencional de valor.
6. **Symbol**: Valor único e imutável, introduzido no ES6.
7. **BigInt**: Representa números inteiros muito grandes, introduzido no ES2020.

## 10. Quais são os operadores em JavaScript?

1. Operadores Aritméticos
2. Operadores Unários
3. Operadores de Atribuição
4. Operadores de Comparação
5. Operadores Lógicos
6. Operador Ternário

## 11. Qual a diferença prática entre usar `if-else` e `switch` para validação de múltiplas condições?

- O `if-else` é mais flexível, pois permite validar expressões complexas e combinações de condições.
- O `switch` é mais legível e eficiente para comparar um único valor contra múltiplas opções fixas. Exemplo:

  ```javascript
  switch (cor) {
    case "vermelho":
      console.log("Pare.");
      break;
    case "verde":
      console.log("Siga.");
      break;
    default:
      console.log("Cor inválida.");
  }
  ```

## 12. O que é uma função em JavaScript? Como ela é declarada e usada?

Uma função em JavaScript é um bloco de código projetado para realizar uma tarefa específica. Funções podem receber entradas (parâmetros), realizar operações, retornar um valor e ser reutilizada.

**Declaração de uma função**
Uma função pode ser declarada usando a palavra-chave `function`, seguida pelo nome da função, uma lista de parâmetros (opcional) entre parênteses e o corpo da função entre chaves.

```javascript
function saudacao(nome) {
  return `Olá, ${nome}!`;
}
```

## 13. `!!` (dupla negação) em JavaScript é uma maneira prática de converter qualquer valor em seu correspondente booleano

## 14. O que é um array?

Um array é uma estrutura de dados usada para armazenar vários valores em uma única variável. Os valores são organizados em uma sequência e podem ser acessados usando índices, que geralmente começam em 0.

## 15. O que é um loop?

Um loop é uma estrutura de programação que permite repetir um bloco de código várias vezes, com base em uma condição. Por exemplo, é usado para executar ações enquanto uma condição for verdadeira ou para percorrer elementos de uma lista.

## 16. O que é o DOM e quais os seus principais objetos?

O DOM (Document Object Model) é uma interface que representa a estrutura de um documento HTML ou XML como uma árvore de objetos. Ele permite acessar e manipular elementos, atributos e conteúdos da página de forma dinâmica, trazendo interatividade à página.

- Não é interessante manipular o DOM diretamente com JavaScript puro, pois frameworks e bibliotecas como React, Vue e Svelte oferecem formas mais organizadas, eficientes e práticas de fazer isso.

**Principais objetos:**

- `document` (representa o documento inteiro).
- `window` (representa a janela do navegador).
- Elementos HTML, como `div`, `p`, `img`, etc.
