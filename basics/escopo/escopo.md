# Escopo em JavaScript

O **escopo** em JavaScript define a **área do código onde uma variável é acessível**. Ele determina quais partes do programa podem acessar ou manipular uma variável. Existem três tipos principais de escopo:

## **1. Escopo Global**

- Variáveis declaradas fora de qualquer função ou bloco têm **escopo global**.
- Elas podem ser acessadas em qualquer parte do código, inclusive dentro de funções e blocos.
- Recomenda-se usar variáveis globais com cautela para evitar conflitos e problemas de manutenção.

```javascript
var globalVar = "Estou no escopo global";

function exibirGlobal() {
  console.log(globalVar); // Acessível aqui
}

exibirGlobal(); // "Estou no escopo global"
console.log(globalVar); // "Estou no escopo global"
```

## **2. Escopo de Função**

- Essas variáveis só podem ser acessadas dentro da função onde foram declaradas.

```javascript
function meuEscopo() {
  var localVar = "Estou no escopo da função";
  console.log(localVar); // Acessível aqui
}

meuEscopo(); // "Estou no escopo da função"
// console.log(localVar); // Erro: localVar não está definido
```

## **3. Escopo de Bloco**

- Introduzido com let e const no ES6.
- Variáveis declaradas com let ou const dentro de um bloco `{}` têm escopo de bloco.
- Elas só podem ser acessadas dentro desse bloco.

```javascript
{
  let blocoVar = "Estou no escopo de bloco";
  console.log(blocoVar); // Acessível aqui
}
// console.log(blocoVar); // Erro: blocoVar não está definido

const blocoConst = "Também estou em escopo de bloco";
console.log(blocoConst); // Acessível apenas dentro do bloco onde foi declarada
```

## **4. Escopo e Hoisting**

**O que é o Hoisting?**

O hoisting é o comportamento em JavaScript onde as declarações de variáveis e funções são "movidas" para o topo de seu escopo antes da execução do código.

- Em JavaScript, variáveis declaradas com var sofrem hoisting: elas são movidas para o topo de seu escopo antes da execução do código. No entanto, só ficam disponíveis após serem atribuídas.
- Com let e const, somente a declaração é movida para o topo, mas o código não pode acessar a variável antes de sua declaração no código fonte. Isso cria a temporal dead zone (TDZ), onde o acesso à variável antes da sua inicialização resulta em um erro (ReferenceError).

```javascript
console.log(hoistedVar); // undefined
var hoistedVar = "Exemplo de hoisting";

console.log(hoistedLet); // Erro: Cannot access 'hoistedLet' before initialization
let hoistedLet = "Exemplo sem hoisting com let";
```
