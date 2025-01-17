## Funções

Uma função em JavaScript é um bloco de código que executa uma tarefa específica ou calcula um valor. Ela pode ser reutilizada em diferentes partes do programa, ajudando a evitar a repetição de código.

Funções podem receber valores de entrada (parâmetros) e, após processá-los, retornar um valor como resultado.

### Exemplo:

```javascript
function somar(a, b) {
  return a + b;
}

const resultado = somar(3, 5);
console.log(resultado); // Saída: 8
```

## Parâmetro e Argumento

Em JavaScript, **parâmetro** e **argumento** são conceitos relacionados às funções, mas possuem diferenças importantes:

### **Parâmetro**

- É uma variável definida na declaração da função.

### **Argumento**

- É o valor real fornecido para a função quando ela é chamada.

**Exemplos:**

```javascript
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
  //{nome} é o parâmetro
  saudacao("Izabelle");
  //'Izabelle' é o argumento
}
```

```javascript
function somar(a, b) {
  // 'a' e 'b' são os parâmetros.
  return a + b;
}
console.log(somar(3, 5)); // '3' e '5' são os argumentos.
```

## A função pode ou não retornar um valor

(**e até mesmo qualquer valor**)

Se define um valor usando o `return` dentro da função. Quando não definimos o return, ela irá retornar `undefined`. O código interno da função é executado normalmente, independentemente de existir valor de return ou não.

```javascript
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc(80, 1.8);
//retorna o imc
console.log(imc(80, 1.8));
//retorna o valor do imc e 'undefined'
```
