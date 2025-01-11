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

## 5. O que é o DOM e como JavaScript interage com ele?

O DOM (Document Object Model) é uma representação da estrutura de uma página HTML como uma árvore de objetos. O JavaScript pode acessar e modificar elementos do DOM usando métodos como `getElementById`, `querySelector`, e propriedades como `innerHTML`.

## 6. Qual é a diferença entre os operadores `==` e `===`?

- **`==`**: Compara apenas os valores, fazendo conversão de tipos (exemplo: `5 == '5'` é `true`).
- **`===`**: Compara valores e tipos, sem conversão (exemplo: `5 === '5'` é `false`).

## 7. O que é uma função de callback?

Uma função de callback é uma função passada como argumento para outra função, para ser executada depois que essa função concluir uma operação.

## 8. Qual é a diferença entre `null` e `undefined`?

- **`null`**: Representa ausência intencional de valor.
- **`undefined`**: Indica que uma variável foi declarada, mas não inicializada, ou que uma propriedade/valor não existe.

## 9. O que é Hoisting em JavaScript?

**Hoisting** é o comportamento do JavaScript onde declarações de variáveis e funções são "movidas" para o topo de seu escopo antes da execução do código.

## 10. Quais são os tipos de dados primitivos em JavaScript?

1. **String**: Sequência de caracteres, por exemplo, `"Olá, mundo!"`.
2. **Number**: Números inteiros e decimais, por exemplo, `42`, `3.14`.
3. **Boolean**: Verdadeiro ou falso, por exemplo, `true`, `false`.
4. **Undefined**: Valor de uma variável não inicializada.
5. **Null**: Representa a ausência intencional de valor.
6. **Symbol**: Valor único e imutável, introduzido no ES6.
7. **BigInt**: Representa números inteiros muito grandes, introduzido no ES2020.

## 11. Quais são os operadores em JavaScript?

1. Operadores Aritméticos
2. Operadores Unários
3. Operadores de Atribuição
4. Operadores de Comparação
5. Operadores Lógicos
6. Operador Ternário

## 12. Qual a diferença prática entre usar `if-else` e `switch` para validação de múltiplas condições?

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
