# O que é um Loop?

Um **loop** é uma estrutura de controle de fluxo utilizada para repetir um bloco de código várias vezes, enquanto uma condição for verdadeira. Ele permite executar automaticamente ações repetitivas, reduzindo a necessidade de escrever o mesmo código várias vezes.

## Tipos Comuns de Loops

### 1. **`for`**

O loop `for` é usado quando sabemos antecipadamente quantas vezes o código deve ser repetido.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Repetição número: " + i);
}
// Saída: Repetição número: 0, 1, 2, 3, 4
```

### 2. **`while`**

O loop while executa o código enquanto a condição especificada for verdadeira.

```javascript
let i = 0;
while (i < 5) {
  console.log("Valor de i: " + i);
  i++;
}
// Saída: Valor de i: 0, 1, 2, 3, 4
```

### 3. **do...while**

O loop do...while garante que o código seja executado pelo menos uma vez, mesmo se a condição for falsa.

```javascript
let i = 0;
do {
  console.log("Executando: " + i);
  i++;
} while (i < 3);
// Saída: Executando: 0, 1, 2
```

### Palavra chave `break`

O loop parará caso encontre a palavra `break`

```javascript
let videoGames = ["swithch", "PS4", "Xbox"];

for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}
```

### 4. **forEach**

O forEach é um método usado para percorrer todos os elementos de um array e executar uma função para cada um deles. Ele é útil quando você quer aplicar uma operação a cada item do array, sem a necessidade de escrever um loop manualmente.

- É ideal para realizar operações em cada elemento de um array quando não há necessidade de retornar um novo array ou manipular a execução de maneira mais complexa.

```javascript
let videoGames = ["swithch", "PS4", "Xbox"];

videoGames.forEach(function (item, index) => {
  console.log(item, index);
});
```
