O tipo `Boolean` é usado para representar valores lógicos, ou seja, verdadeiro ou falso.

- Sempre são usados para fazer uma [comparação condicional](../condicionais/if-else.md)

## Valor Lógico

Em JavaScript, o tipo `Boolean` pode ter dois valores possíveis:

- `true` (verdadeiro)
- `false` (falso)

Esses valores são frequentemente usados em expressões condicionais, como em estruturas de controle (`if`, `while`) e operadores lógicos.

## Conversão para Boolean

JavaScript pode converter outros tipos de dados em valores booleanos, o que é útil em expressões condicionais. Os seguintes valores são convertidos para `false` quando utilizados em uma expressão booleana:

- `false`
- `0` (zero)
- `""` (string vazia)
- `null`
- `undefined`
- `NaN` (Not-a-Number)

Qualquer outro valor é convertido para `true`. Isso inclui:

- Strings não vazias (como `"hello"`)
- Números diferentes de zero (como `1`, `-1`, `3.14`)
- Objetos e arrays (mesmo que vazios)

### Exemplos de Conversão

```javascript
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("texto")); // true
console.log(Boolean(123)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
```
