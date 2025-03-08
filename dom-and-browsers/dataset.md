# dataset no DOM

O `dataset` no **DOM** permite acessar e manipular atributos `data-*` de elementos HTML via JavaScript.

## 🔹 Como funciona?

- No **HTML**, adicionamos atributos `data-*`:

```html
<button id="botao" data-user-id="123" data-status="ativo">Clique aqui</button>
```

- No **JavaScript** , acessamos esses valores com dataset:

```js
const botao = document.getElementById("botao");
console.log(botao.dataset.userId); //"123"
console.log(botao.dataset.status); // "ativo"
```

### Manipulando dataset

- Alterar valores:

```js
botao.dataset.status = "inativo";
console.log(botao.dataset.status); // "inativo"
```

- Adicionar novos atributos:

```js
botao.dataset.novoAtributo = "teste";
console.log(botao.dataset.novoAtributo); // "teste"
```

- Remover atributos:

```js
delete botao.dataset.userId;
console.log(botao.dataset.userId); // undefined
```

🔹 Quando usar dataset?
✅ Armazenar dados personalizados no HTML.
✅ Facilitar a comunicação entre HTML e JavaScript.
✅ Evitar classes ou IDs apenas para armazenar informações.

❌ Quando evitar dataset?
🚫 Se os dados mudam frequentemente, prefira variáveis JavaScript.
🚫 Se houver propriedades nativas do DOM (src, href, value, etc.).

🔹 Exemplo prático: Alterando status do botão

```html
<button id="toggleButton" data-status="desativado">Ativar</button>

<script>
  const botao = document.getElementById("toggleButton");

  botao.addEventListener("click", () => {
    botao.dataset.status =
      botao.dataset.status === "desativado" ? "ativado" : "desativado";
    botao.textContent =
      botao.dataset.status === "ativado" ? "Desativar" : "Ativar";
  });
</script>
```

Agora o botão alterna entre "ativado" e "desativado" ao ser clicado.

## Data vs Class

- A vantagem de utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.
  - data-\* atributos: São para armazenar informações personalizadas relacionadas ao elemento HTML, sem afetar a apresentação ou a identidade do elemento.
    -Classes e IDs: São para estilizar (CSS) e identificar (JavaScript) elementos, de forma única ou em grupo. Eles devem ser usados para marcação visual e interatividade, não para armazenar dados.

**Exemplo:**

Imagine que você tem uma lista de produtos, e deseja armazenar algumas informações sobre cada produto (como o ID e o preço) diretamente no HTML, mas sem usar classes ou IDs para isso, já que são reservados para estilos ou seletores.

**_Usando dataset (correto):_**

```html
<ul>
  <li data-id="101" data-nome="Produto A" data-preco="29.99">Produto A</li>
  <li data-id="102" data-nome="Produto B" data-preco="49.99">Produto B</li>
</ul>
```

- No JavaScript, você pode acessar os dados do produto sem interferir nas classes
  ou IDs:

```js
const produtoA = document.querySelector('[data-id="101"]');
console.log(produtoA.dataset.nome); // "Produto A"
console.log(produtoA.dataset.preco); // "29.99" Aqui, data-id,
```

> data-nome, e data-preco estão armazenando dados e não afetando a aparência ou o comportamento do item.

- Usando classes ou IDs (não recomendado para dados):

```html
<ul>
  <li class="produto" id="produto-101">Produto A</li>
  <li class="produto" id="produto-102">Produto B</li>
</ul>
```
