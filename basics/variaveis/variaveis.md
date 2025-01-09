Variáveis são espaços na memória do computador onde você pode armazenar e manipular dados. Elas servem para guardar valores que podem ser usados ou alterados ao longo do tempo no código. Além disso, evitam repetições.

- As variáveis não podem ser inicializadas por caracteres especiais.
- Case Sensitive (Nome e nome serão diferentes)
- Separamos por `-`, `_` ou por letras maiúsculas `declarandoVariavel`
- Há palavras que são reservadas e não podem ser usadas como nome de variável.
- Frases (string) devem ser colocadas entre aspas simples ou duplas; números não levam aspas.

No JavaScript, existem três formas principais de declarar variáveis: `var`, `let` e `const`. Cada uma delas possui características específicas:

## **`var`**

- Foi introduzido nas versões mais antigas do JavaScript.
- Tem escopo de **função**, ou seja, se declarada dentro de uma função, não será acessível fora dela (no entanto, vaza escopo).
- Pode ser **redeclarada** dentro do mesmo escopo, o que pode causar problemas de sobrescrita de valores sem aviso.
- Permite **hoisting**, ou seja, pode ser utilizada antes de sua declaração, mas o valor inicial será `undefined` até ser atribuído.

```javascript
var nome = "Alice";
console.log(nome); // Alice
var nome = "Bob"; // Redeclaração permitida
console.log(nome); // Bob
```

## **`let`**

- Introduzido no ES6 (ECMAScript 2015).
- Tem escopo de bloco, ou seja, só existe dentro das chaves `{}` onde foi declarada.
- Não pode ser redeclarado no mesmo escopo, ajudando a evitar erros acidentais.
- O hoisting também se aplica, mas o acesso antes da declaração resulta em um erro `(ReferenceError)`.

```javascript
let idade = 25;
console.log(idade); // 25
idade = 26; // Reatribuição permitida
console.log(idade); // 26
// let idade = 30; // Erro: redeclaração não permitida
```

## **`const`**

- Também introduzido no ES6.
- Declara variáveis cujo valor não pode ser reatribuído após a inicialização.
- Assim como let, tem escopo de bloco.
- Usado para variáveis imutáveis ou constantes. No entanto, objetos e arrays declarados com const podem ter suas propriedades ou elementos alterados.

```javascript
const pais = "Brasil";
console.log(pais); // Brasil
// pais = "Argentina"; // Erro: reatribuição não permitida

const cidades = ["São Paulo", "Rio"];
cidades.push("Curitiba"); // Permitido alterar o conteúdo do array
console.log(cidades); // ["São Paulo", "Rio", "Curitiba"]
```
