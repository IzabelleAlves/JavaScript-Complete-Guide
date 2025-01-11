# Estruturas Condicionais: `if` e `else`

A estrutura condicional `if` e `else` é usada para executar blocos de código diferentes dependendo se uma condição é verdadeira. Essa é uma das estruturas mais básicas e importantes na programação.

## Sintaxe Básica

A estrutura geral de um bloco `if` e `else` é:

```javascript
if (condição) {
  // Código executado se a condição for verdadeira
} else {
  // Código executado se a condição for falsa
}
```

## Funcionamento

O programa avalia a condição dentro do parêntese (condição).
Se a condição for verdadeira (true), o bloco de código dentro do if é executado.
Se a condição for falsa (false), o bloco de código dentro do else é executado.

**Exemplo**:

```javascript
let numero = 10;

if (numero > 0) {
  console.log("O número é positivo.");
} else {
  console.log("O número é negativo ou zero.");
}
```

# Estrutura if, else if, e else

Se há várias condições a serem verificadas, você pode-se usar else if:

```javascript
let temperatura = 25;

if (temperatura > 30) {
  console.log("Está muito quente!");
} else if (temperatura >= 20 && temperatura <= 30) {
  console.log("O clima está agradável.");
} else {
  console.log("Está frio.");
}
//saída: O clima está agradavél
```

**Exemplos de casos específicos:**

### 1. Sem o bloco else

Se não há necessidade de tratar a condição falsa, você pode usar apenas o if:

```javascript
let saldo = 100;

if (saldo > 0) {
  console.log("Você tem saldo positivo.");
}
//saída: Você tem saldo positivo
```

### 2. Verificações aninhadas

Blocos de if e else podem ser aninhados para lidar com várias condições:

```javascript
let nota = 85;

if (nota >= 90) {
  console.log("Aprovado com excelência!");
} else {
  if (nota >= 70) {
    console.log("Aprovado.");
  } else {
    console.log("Reprovado.");
  }
}
//saída: Aprovado.
```
