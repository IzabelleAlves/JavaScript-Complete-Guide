# Constructor Functions

- São responsáveis por construir novos objtos sempre que a chamamos.
- É usada para criar e estruturar objetos. Ela segue um padrão específico e precisa ser chamada com new, criando uma nova instância do objeto.

**Exemplo:**

```javascript
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.apresentar = function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  };
}

// Criando objetos usando a função construtora
const pessoa1 = new Pessoa("Izabelle", 22);
const pessoa2 = new Pessoa("João", 30);

pessoa1.apresentar(); // Olá, meu nome é Izabelle e tenho 22 anos.
pessoa2.apresentar(); // Olá, meu nome é João e tenho 30 anos.
```

### Características:

- Nome normalmente começa com letra maiúscula (convenção).
- Usa this para definir propriedades e métodos do objeto.
- Precisa ser chamada com new para criar uma nova instância.
- Cada vez que a função é chamada com `new`, um novo objeto é criado.

## `New` Keyword

- A palavra chave `new` é responsável por criar um novp objeto baseado na função que passamos a frente dela.
- Dentro dele existe aproximadademente cinco etapas:

  1. Criar um novo objeto
  2. Define o protótipo
  3. Aponta a variável `this` para o objeto
  4. Executa a função substituindo `this` pelo objeto.

  **Exemplo**

  ```javascript
  const honda = new Carro();

  // 1. Criar um novo objeto
  honda{}

  // 2. Define o protótipo
  honda.prototype = Carro.prototype

  // 3. Aponta a variável `this` para o objeto
  this = honda

  // 4. Executa a função substituindo `this` pelo objeto.
  honda.marca = 'Marca'
  honda.preco = 0
  ```

## `this` Keyword

- Faz referência ao próprio objeto construído com a Constructor Function
- O objto só tem acesso ao que a gente escolhe 'exportar' dele. Exemplo, eu so posso acessar com meu objeto o que for referenciado com o `this` dentro da minha função construtora.

**Exemplo**

```javascript
function Carro2(marca, precoInical) {
  //É possível colocar variáveis dentro das funções construtoras
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2("mazda", 5000);
```

## Diferença entre Funções normais e Funções Construtoras

- **Função Normal** -> É simplesmente um bloco de código que executa uma tarefa específica quando chamada. Ela pode retornar valores, modificar dados, etc., mas não é usada para criar objetos automaticamente.

**Exemplo**

```javascript
function somar(a, b) {
  return a + b;
}

console.log(somar(5, 3)); // 8
```

### Características:

- Usa a palavra-chave function ou pode ser uma arrow function.
- Não utiliza this para referenciar propriedades internas.
- Não precisa ser chamada com `new`.

---

| Característica | Função Normal                  | Função Construtora                     |
| -------------- | ------------------------------ | -------------------------------------- |
| Objetivo       | Executar uma tarefa específica | Criar e estruturar objetos             |
| Uso do `this`  | Não usa `this` normalmente     | Usa `this` para propriedades           |
| Uso de `new`   | Não precisa de `new`           | Precisa de `new` para criar instâncias |
| Nome           | Minúsculas (exemplo: `somar`)  | Maiúsculas (exemplo: `Pessoa`)         |
| Retorno        | Retorna valores normalmente    | Retorna um objeto implícito            |

### Quando Usar Cada Uma?

- **Função Normal** → Quando você precisa apenas realizar uma operação e retornar um valor.
- **Função Construtora** → Quando você precisa criar múltiplos objetos com a mesma estrutura.

> Se estiver lidando com muitos objetos, o ideal é usar Classes (class), que são uma versão mais moderna das funções construtoras:

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const pessoa3 = new Pessoa("Ana", 25);
pessoa3.apresentar();
```
