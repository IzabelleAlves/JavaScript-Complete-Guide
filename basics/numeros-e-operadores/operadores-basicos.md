# Índice

1. [Operadores Aritméticos](#operadores-aritmeticos)
2. [Operadores Unários](#operadores-unarios)
3. [Operadores de Atribuição](#operadores-de-atribuicao)
4. [Operadores de Comparação](#operadores-de-comparacao)
5. [Operadores Lógicos](#operadores-logicos)
6. [Operador Ternário](#operador-ternario)

## Operadores Aritméticos

| Operador | Descrição                 | Exemplo  | Resultado |
| -------- | ------------------------- | -------- | --------- |
| `+`      | Adição                    | `5 + 3`  | `8`       |
| `-`      | Subtração                 | `5 - 3`  | `2`       |
| `*`      | Multiplicação             | `5 * 3`  | `15`      |
| `/`      | Divisão                   | `6 / 3`  | `2`       |
| `%`      | Módulo (resto da divisão) | `5 % 3`  | `2`       |
| `**`     | Exponenciação (potência)  | `5 ** 2` | `25`      |

## Operadores Unários

| Operador | Descrição  | Exemplo          | Resultado |
| -------- | ---------- | ---------------- | --------- |
| `++`     | Incremento | `let a = 5; a++` | `6`       |
| `--`     | Decremento | `let a = 5; a--` | `4`       |

### **A ordem importa!!**

1. **Exponenciação (`**`)\*\* é avaliada primeiro.
2. **Multiplicação (`*`), Divisão (`/`) e Módulo (`%`)** vêm em seguida.
3. **Adição (`+`) e Subtração (`-`)** são avaliadas por último.

**Exemplos:**

```javascript
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
```

### 💡 Curiosidade

Em JavaScript, adicionar um sinal de `+` antes de uma string numérica, como `"12"`, **converte automaticamente essa string em um número**. Esse é um dos métodos rápidos para realizar a conversão.

**Exemplo:**

```javascript
let strNum = "12";
let convertedNum = +strNum;

console.log(typeof strNum); // "string"
console.log(typeof convertedNum); // "number"
console.log(convertedNum); // 12
```

## Operadores de Atribuição

Os operadores de atribuição são usados para atribuir valores às variáveis.

| Operador | Descrição                    | Exemplo   | Resultado    |
| -------- | ---------------------------- | --------- | ------------ |
| `=`      | Atribuição simples           | `x = 5`   | `x` será `5` |
| `+=`     | Atribuição com adição        | `x += 3`  | `x = x + 3`  |
| `-=`     | Atribuição com subtração     | `x -= 2`  | `x = x - 2`  |
| `*=`     | Atribuição com multiplicação | `x *= 4`  | `x = x * 4`  |
| `/=`     | Atribuição com divisão       | `x /= 2`  | `x = x / 2`  |
| `%=`     | Atribuição com módulo        | `x %= 2`  | `x = x % 2`  |
| `**=`    | Atribuição com exponenciação | `x **= 2` | `x = x ** 2` |

**Exemplos**:

```javascript
let x = 10; // Atribuição simples
x += 5; // Adição: x agora é 15 (10 + 5)
x *= 2; // Multiplicação: x agora é 30
console.log(x); // Saída: 30
```

## Operadores de Comparação

Os operadores de comparação comparam dois valores e retornam um valor booleano (`true` ou `false`).

| Operador | Descrição                    | Exemplo     | Resultado |
| -------- | ---------------------------- | ----------- | --------- |
| `==`     | Igualdade de valor           | `5 == "5"`  | `true`    |
| `===`    | Igualdade de valor e tipo    | `5 === "5"` | `false`   |
| `!=`     | Desigualdade de valor        | `5 != "5"`  | `false`   |
| `!==`    | Desigualdade de valor e tipo | `5 !== "5"` | `true`    |
| `>`      | Maior que                    | `5 > 3`     | `true`    |
| `<`      | Menor que                    | `5 < 3`     | `false`   |
| `>=`     | Maior ou igual               | `5 >= 5`    | `true`    |
| `<=`     | Menor ou igual               | `5 <= 3`    | `false`   |

**Exemplos**:

```javascript
let a = 10;
let b = "10";

console.log(a == b); // true (valores iguais)
console.log(a === b); // false (valores e tipos diferentes)
console.log(a > 5); // true
console.log(a <= 9); // false
```

## Operadores Lógicos

Os operadores lógicos são usados para combinar condições ou inverter valores booleanos.

### Regra:

- `&&` precisa que ambas as condições sejam verdadeiras para retornar um `true`.
- `||` apenas uma precisa ser verdadeira para que retorne um `true`.

| Operador | Descrição      | Exemplo         | Resultado      |
| -------- | -------------- | --------------- | -------------- | ----- | --- | ------ | ------ |
| `&&`     | E lógico (AND) | `true && false` | `false`        |
| "        |                | "               | Ou lógico (OR) | "true |     | false" | `true` |
| `!`      | Negação lógica | `!true`         | `false`        |

**Exemplos**:

```javascript
let a = true;
let b = false;

console.log(a && b); // false (os dois precisam ser true)
console.log(a || b); // true (um dos dois é true)
console.log(!a); // false (negação de true)
```

## Operador Ternário

O operador ternário é usado como uma forma curta de um `if-else`.

| Operador | Descrição              | Exemplo                 | Resultado |
| -------- | ---------------------- | ----------------------- | --------- |
| `? :`    | Condicional (ternário) | `5 > 3 ? "sim" : "não"` | `"sim"`   |

**Exemplos**:

```javascript
let age = 18;

// Verifica se a idade é maior ou igual a 18
let canVote = age >= 18 ? "Pode votar" : "Não pode votar";

console.log(canVote); // Saída: Pode votar
```
