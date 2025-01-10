### Números

```javascript
var idade = 28;
var gols = 1000;
var pi = 3.14; //usamos ponto e não vírgula
var exp = 2e10; //o 'e' significa o exponencial na base 10
//isso quer dizer que a quantidade que vier depois do 'e' é a quantidade total de zero depois do número
//20000000000
```

O JS oferece precisão de até 15 dígitos significativos para números inteiros e decimais.

```javascript
console.log(999999999999999); // 999999999999999 (15 dígitos)
console.log(9999999999999999); // 10000000000000000 (perda de precisão após 15 dígitos)
```

Para números inteiros maiores ou precisões além de 15 dígitos, é recomendado usar o tipo BigInt:

```javascript
const bigNumber = 123456789012345678901234567890n; // BigInt
console.log(bigNumber);
```
