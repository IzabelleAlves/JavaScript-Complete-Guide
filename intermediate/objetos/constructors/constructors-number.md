# Number

- Todo número possui as propriedades e métodos do prototype de Number. Number também possui alguna métodos.

```javascript
const ano = 2018;
const preco = new Number(99);
```

## Number.isNaN()

- O método `Number.isNaN(valor)` verifica se um valor é exatamente NaN (Not-a-Number).

🔹 Diferente de isNaN() global, ele não converte o valor antes de testar!

**Exemplo**

```javascript
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false (não tenta converter)
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN("10" / "abc")); // true (resultado é NaN)
```

## Number.isInteger()

- O método `Number.isInteger(valor)` verifica se um número é inteiro (sem casas decimais).

**Exemplo:**

```javascript
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isInteger("10")); // false (não é número)
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(10 / 2)); // true (5 é inteiro)
```

## toLocaleString()

- Usado para formatar números de acordo com a localidade especificada, ajustando separadores de milhar, casas decimais, moeda e etc.

**Exemplo**

```js
const numero = 1234567.89;
console.log(numero.toLocaleString("pt-BR")); // "1.234.567,89"
console.log(numero.toLocaleString("en-US")); // "1,234,567.89"
```

### Formatando como moeda

- Usa-se `{style: "currency", currency: "XXX"} `para formatar como dinheiro.

```js
const preco = 1500.5;
console.log(
  preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
// "R$ 1.500,50"

console.log(
  preco.toLocaleString("en-US", { style: "currency", currency: "USD" })
);
// "$1,500.50"
```

### Como funciona com datas

```js
const data = new Date();
console.log(data.toLocaleString("pt-BR")); // "06/03/2025 14:30:15"
console.log(data.toLocaleString("en-US")); // "3/6/2025, 2:30:15 PM"
```

### Personalizando formato de data/hora

```js
console.log(
  data.toLocaleString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);
// "quinta-feira, 6 de março de 2025"
```

# Math() (um objeto)

O objeto `Math` no JavaScript fornece propriedades e métodos para realizar operações matemáticas, como arredondamento, operações trigonométricas, exponenciação, entre outros.

# Resumo dos Métodos de Math

| Função          | Descrição                                 | Exemplo                      |
| --------------- | ----------------------------------------- | ---------------------------- |
| `Math.abs()`    | Valor absoluto                            | `Math.abs(-5)` => 5          |
| `Math.ceil()`   | Arredonda para cima                       | `Math.ceil(4.1)` => 5        |
| `Math.floor()`  | Arredonda para baixo                      | `Math.floor(4.9)` => 4       |
| `Math.round()`  | Arredonda para o inteiro mais próximo     | `Math.round(4.5)` => 5       |
| `Math.random()` | Retorna um número aleatório entre 0 e 1   | `Math.random()` => 0.345     |
| `Math.max()`    | Retorna o maior número                    | `Math.max(1, 3, 2)` => 3     |
| `Math.min()`    | Retorna o menor número                    | `Math.min(1, 3, 2)` => 1     |
| `Math.pow()`    | Retorna a potência de um número           | `Math.pow(2, 3)` => 8        |
| `Math.sqrt()`   | Retorna a raiz quadrada de um número      | `Math.sqrt(16)` => 4         |
| `Math.sin()`    | Seno de um ângulo (em radianos)           | `Math.sin(Math.PI / 2)` => 1 |
| `Math.cos()`    | Cosseno de um ângulo (em radianos)        | `Math.cos(Math.PI)` => -1    |
| `Math.tan()`    | Tangente de um ângulo (em radianos)       | `Math.tan(Math.PI / 4)` => 1 |
| `Math.log()`    | Logaritmo natural (base `e`)              | `Math.log(Math.E)` => 1      |
| `Math.log10()`  | Logaritmo de base 10                      | `Math.log10(100)` => 2       |
| `Math.log2()`   | Logaritmo de base 2                       | `Math.log2(8)` => 3          |
| `Math.trunc()`  | Parte inteira do número                   | `Math.trunc(4.9)` => 4       |
| `Math.hypot()`  | Soma dos quadrados (Teorema de Pitágoras) | `Math.hypot(3, 4)` => 5      |
