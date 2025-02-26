# addEventListener

- Adiciona uma função ao elemento, chamados `callback`, que será ativada assim que certo `evento` ocorrer nesse elemento.

```javascript
const img = document.querySelector("img");

//elemento.addEventListener(event, callback, options)
//terceiro parâmetro opcional.
img.addEventListener("click", function () {
  console.log("Clicou");
});
```

## Callback

- Uma boa prática é separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente a função anônima.

**Exemplo**

```javascript
const img = document.querySelector("img");
function callback() {
  console.log("clicou");
}

img.addEventListener("click", callback); // 🚀🚀 Forma correta.
img.addEventListener("click", callback()); //undefined
img.addEventListener("click", function () {
  console.log("clicou");
});
img.addEventListener("click", () => {
  console.log("clicou");
});
```

### Propriedades do Event

## 🔹 Propriedades gerais do `event`

| Propriedade        | Descrição                                                           |
| ------------------ | ------------------------------------------------------------------- |
| `type`             | Retorna o tipo do evento (ex: `"click"`, `"keydown"`).              |
| `target`           | Elemento que acionou o evento.                                      |
| `currentTarget`    | Elemento ao qual o event listener foi anexado.                      |
| `timeStamp`        | Tempo em milissegundos desde o carregamento da página.              |
| `bubbles`          | Indica se o evento se propaga pelo DOM (`true` ou `false`).         |
| `cancelable`       | Indica se o evento pode ser cancelado com `event.preventDefault()`. |
| `defaultPrevented` | Retorna `true` se `event.preventDefault()` foi chamado.             |

---

## 🖱️ Propriedades específicas para eventos de mouse (`MouseEvent`)

| Propriedade                                | Descrição                                                                                            |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `clientX`, `clientY`                       | Coordenadas do clique em relação à janela do navegador.                                              |
| `pageX`, `pageY`                           | Coordenadas do clique em relação à página inteira.                                                   |
| `screenX`, `screenY`                       | Coordenadas do clique em relação à tela do usuário.                                                  |
| `button`                                   | Indica qual botão do mouse foi pressionado (0 = esquerdo, 1 = meio, 2 = direito).                    |
| `buttons`                                  | Indica quais botões do mouse estavam pressionados.                                                   |
| `altKey`, `ctrlKey`, `shiftKey`, `metaKey` | Indicam se as teclas **Alt**, **Ctrl**, **Shift** ou **Meta** estavam pressionadas durante o evento. |

### 📌 Exemplo de uso:

```js
document.addEventListener("click", function (event) {
  console.log(`Clique em X: ${event.clientX}, Y: ${event.clientY}`);
});
```

### Palavra `this` em Eventos

- Aqui, ela fará referência ao elemento em que o addEventListener foi adicionado.
