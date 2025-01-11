O `switch-case` é uma estrutura de controle usada para executar diferentes blocos de código com base no valor de uma variável ou expressão. Ele é uma alternativa ao uso de múltiplos `if-else`, tornando o código mais legível e organizado quando há diversas condições baseadas em um único valor.

- Você pode verificar se uma variável é igual à diferentes valores utilizando o `case`. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave `brake` para cancelar a continuação. O valor de `default`ocorrerá caso nenhuma das anteriores seja verdadeira.

**Exemplo:**

```javascript
let corFavorita = "Azul";

switch (corfavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para as rosas.");
    break;
  default:
    console.log("Feche os olhos");
}
```
