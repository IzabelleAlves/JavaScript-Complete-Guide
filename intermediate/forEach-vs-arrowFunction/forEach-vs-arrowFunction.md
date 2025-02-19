# forEach vs Arrow Function

Embora o `forEach` e as **arrow functions** sejam frequentemente usados juntos, eles são conceitos distintos. Vamos entender as diferenças.

### 1. `forEach`

O `forEach` é um método de arrays em JavaScript que permite percorrer todos os elementos de um array e executar uma função para cada um deles.

#### Sintaxe:

```javascript
array.forEach(function (item) {
  // Ação a ser executada com cada item
});
```

### Exemplo:

```javascript
const frutas = ["maçã", "banana", "laranja"];

frutas.forEach(function (fruta) {
  console.log(fruta);
});
```

### 2. `Arrow Function`

A arrow function é uma forma mais concisa de escrever funções em JavaScript.

```javascript
const minhaFuncao = () => {
  // Ação a ser executada
};

const soma = (a, b) => a + b;
console.log(soma(3, 4)); // Saída: 7
```
