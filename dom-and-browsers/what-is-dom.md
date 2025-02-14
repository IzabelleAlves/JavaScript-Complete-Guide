## O que é o DOM (Document Object Model)

- É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manupular a estrutura, o estilo e o conteúdo de documentos.
- Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM. Os elementos do DOM são importantes para interagirmos com o JS na página.
- Só manipularemos no DOM se estivermos mexendo no js puro.
- Para selecionar um elemento do DOM é necessário falar com um objeto Document. Há diversos métodos e propriedades. O DOM dá interatividade. Praticamente tudo do CSS é possível mudar pela interface do DOM.

### Principais Características do DOM

- **Hierárquico**: O DOM organiza o documento em forma de uma árvore de nós (ou "nodes"), onde cada elemento, atributo ou texto é um nó.
- **Plataforma e Linguagem-Neutra**: Ele pode ser usado com qualquer linguagem de programação que suporte manipulação de documentos, como JavaScript.
- **Dinâmico**: Permite adicionar, modificar ou remover elementos e atributos em tempo de execução.

### Manipulação do DOM com JavaScript

A manipulação do DOM é frequentemente feita com métodos e propriedades fornecidos pelo JavaScript. Aqui estão alguns exemplos comuns:

#### Seleção de Elementos

- `document.getElementById('id')` – Seleciona um elemento pelo ID.
- `document.querySelector('.classe')` – Seleciona o primeiro elemento que corresponde ao seletor CSS.
- `document.querySelectorAll('tag')` – Seleciona todos os elementos que correspondem ao seletor CSS.

#### Modificação de Conteúdo

- `element.textContent = 'Novo texto'` – Altera o texto de um elemento.
- `element.innerHTML = '<strong>Conteúdo em HTML</strong>'` – Insere ou modifica HTML dentro de um elemento.

#### Estilização

- `element.style.color = 'red'` – Altera o estilo CSS de um elemento diretamente.

#### Eventos

- `element.addEventListener('click', function)` – Adiciona um evento de clique a um elemento.
- `element.removeEventListener('mouseover', function)` – Remove um evento de mouseover de um elemento.

**Exemplo**

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Exemplo DOM</title>
  </head>
  <body>
    <h1 id="titulo">Olá, Mundo!</h1>
    <button id="botao">Clique Aqui</button>

    <script>
      const botao = document.getElementById("botao");
      const titulo = document.getElementById("titulo");

      botao.addEventListener("click", () => {
        titulo.textContent = "Você clicou no botão!";
      });
    </script>
  </body>
</html>
```

### Como é a estrutura do DOM

| 🌳 Conceito              | Descrição                                                                                                                                                                                                                                                   |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Estrutura em Árvore**  | O DOM se estrutura em forma de árvore, permitindo aos desenvolvedores acessar e modificar o conteúdo, a estrutura e o estilo de um documento web de forma dinâmica.                                                                                         |
| **A Árvore**             | Imagine que o documento HTML é uma árvore de elementos. O nó raiz é o `<html>`, que tem filhos como `<head>` e `<body>`. Cada um desses pode ter filhos como `<title>`, `<p>`, `<div>`, etc. Essa estrutura hierárquica facilita a navegação e manipulação. |
| **Nós (Node)**           | Cada elemento no HTML (como uma tag `<p>` ou `<div>`) é um nó na árvore do DOM. Existem diferentes tipos de nós, incluindo elementos, atributos, textos e comentários.                                                                                      |
| **Acesso e Manipulação** | Com o DOM, você pode usar JavaScript para acessar qualquer nó e modificar suas propriedades, conteúdo ou estilo. Exemplo: alterar o texto dentro de um parágrafo, modificar o atributo `src` de uma imagem ou adicionar uma nova classe a um elemento.      |
| **Eventos**              | O DOM permite adicionar eventos a elementos, como cliques de botão ou movimentos de mouse, e definir como o script deve responder a esses eventos. Isso é essencial para tornar as páginas interativas.                                                     |

```javascript
console.log(window);
// window é o objeto global do browser
// é o objeto padrão do browser
// possui diferentes métodos e propriedades

window.innerHeight;
```

## Window e Document

- São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.
- Window é objeto global, por isso não precisamos chamá-lo na frente dos métodos e propriedades.

## Node

- Toda tag HTML é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

1.  No DOM, cada tag HTML (como <div>, <p>, <button>, etc.) é representada como um objeto do tipo `Element`. Por exemplo, quando você acessa `document.querySelector('div')`, o que você obtém é um objeto `Element` que representa essa tag.
2.  "Herdar métodos e propriedades":
    Como no JavaScript os objetos podem herdar métodos e propriedades de outros objetos, um objeto `Element` herda funcionalidades de uma estrutura maior chamada Node. Por exemplo, os métodos comuns a todos os tipos de nós (como `appendChild()` ou `removeChild()`) vêm da classe Node.
3.  "Element é um tipo de objeto Node"
    No DOM, o `Node` é uma classe mais genérica que representa qualquer nó em um documento HTML, incluindo elementos, texto, comentários e outros tipos de nós. Como Element é uma subclasse de `Node`, todo Element também é um Node e herda os métodos e propriedades de Node.

## Seleção de Elementos no DOM

**`getElementsByClassName`**

Retorna uma coleção de elementos com a classe especificada.

`document.getElementsByClassName("classe");`

Exemplo:

```javascript
<p class="texto">Parágrafo 1</p>
<p class="texto">Parágrafo 2</p>
<script>
    let itens = document.getElementsByClassName("texto");
    for (let item of itens) item.style.color = "blue";
</script>
```

**`getElementsByTagName`**

Retorna uma coleção de elementos com a tag especificada.

`document.getElementsByTagName("tag");`

Exemplo:

```javascript
<p>Parágrafo 1</p>
<p>Parágrafo 2</p>
<script>
    let itens = document.getElementsByTagName("p");
    for (let item of itens) item.style.fontWeight = "bold";
</script>
```

Ambos retornam uma HTMLCollection, que se atualiza dinamicamente conforme o DOM muda.
