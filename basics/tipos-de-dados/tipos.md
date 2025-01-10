# **Tipos de Dados em JavaScript**

JavaScript possui **tipos de dados primitivos** e **não primitivos**:

- **Primitivos:** `String`, `Number`, `Boolean`, `Undefined`, `Null`, `BigInt`, e `Symbol`.
- **Não primitivos:** `Object`, incluindo arrays, funções e outros tipos derivados.

## **`String`**

- Representa uma sequência de caracteres que formam palavras, frases ou textos.
- Deve estar envolta por aspas simples `'`, aspas duplas `"`, ou crase `` ` `` (para template strings).

É possível concatenar (juntar ou unir) strings:
Por exemplo:

```javascript
const palavra1 = "Olá";
const palavra2 = "mundo!";
const frase = palavra1 + " " + palavra2; // "Olá mundo!"
console.log(frase);
```

Aqui, usamos o operador + para concatenar as palavras e criar uma frase.

Outra forma, com template strings em JavaScript:

```javascript
const nome = "Izabelle";
const mensagem = `Bem-vinda, ${nome}!`;
console.log(mensagem); // "Bem-vinda, Izabelle!"
```

É interessante citar quem também é possível concatenar strings com numbers. Exemplo:

```javascript
const nome = "Izabelle";
const idade = 23;

const mensagem = "Meu nome é " + nome + " e eu tenho " + idade + " anos.";
console.log(mensagem);
// Resultado: "Meu nome é Izabelle e eu tenho 23 anos."
```

Usando Template Strings:

```javascript
const mensagem2 = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem2);
// Resultado: "Meu nome é Izabelle e eu tenho 23 anos."
```

## **`Number`**

- Representa números, que podem ser inteiros ou decimais.
- Não utiliza aspas; caso contrário, será interpretado como uma `String`.

## **`Boolean`**

- Representa um valor lógico: `true` (verdadeiro) ou `false` (falso).

## **`Undefined`**

- Indica que uma variável foi declarada, mas ainda não recebeu um valor.

## **`Null`**

- Representa a ausência intencional de valor.

## **`Symbol()`**

- Um valor único e imutável, usado principalmente como identificador único.
- Criado com a função `Symbol()`.

## **`BigInt`**

- Representa números inteiros muito grandes, além do limite suportado pelo tipo `Number`.
- Criado adicionando `n` ao final de um número ou usando a função `BigInt()`.

```javascript
// Criando um BigInt com o sufixo 'n'
const numeroGrande = 1234567890123456789012345678901234567890n;
console.log(numeroGrande); // 1234567890123456789012345678901234567890n

// Criando um BigInt usando a função BigInt()
const outroNumeroGrande = BigInt("1234567890123456789012345678901234567890");
console.log(outroNumeroGrande); // 1234567890123456789012345678901234567890n

// Operações com BigInt
const soma = numeroGrande + 10n;
console.log(soma); // 1234567890123456789012345678901234567900n
```

**⚠️ OBS:**  
O tipo `BigInt` é usado para trabalhar com números inteiros maiores do que `Number.MAX_SAFE_INTEGER` (que é `9007199254740991`).  
Além disso, você não pode misturar `BigInt` e `Number` diretamente em operações matemáticas.

## **`Objeto {}`**

- Representa uma coleção de pares chave-valor.
- Pode incluir outros objetos, arrays, funções e tipos primitivos.
- Exemplo:
  ```javascript
  const pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function () {
      return `Olá, meu nome é ${this.nome}.`;
    },
  };
  ```
