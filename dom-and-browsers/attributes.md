# Attributes

- Retorna uma array-like com os atributos do elemento.

```javascript
const animais = document.querySelector(".animais");

animais.attributes; //retorna todos os atributos
animais.attributes[0]; //retorna o primeiro os atributo
```

## getAttributes e setAttributes

- Os métodos `getAttribute` e `setAttribute` permitem acessar e modificar atributos específicos de um elemento HTML.

### getAttributes

- Retorna o valor de um atributo específico do elemento.

```javascript
const animais = document.querySelector(".animais");

console.log(animais.getAttribute("class")); // Retorna "animais" (ou outras classes se houver)
console.log(animais.getAttribute("id")); // Retorna o valor do id, se existir
```

### setAttribute(atributo, valor)

- Define ou modifica o valor de um atributo específico.

```javascript
animais.setAttribute("id", "novoId"); // Define um novo id para o elemento
animais.setAttribute("class", "novaClasse"); // Substitui as classes existentes por "novaClasse"
animais.setAttribute("data-info", "exemplo"); // Adiciona um atributo personaliz
```

### Removendo um atributo

Se precisar remover um atributo, use removeAttribute(atributo):

```javascript
animais.removeAttribute("id"); // Remove o atributo "id" do elemento
```

### Verificando se um atributo existe

Use hasAttribute(atributo) para verificar se um atributo está presente no elemento:

```javascript
console.log(animais.hasAttribute("class")); // true (se o elemento tiver uma classe)
console.log(animais.hasAttribute("title")); // false (se não houver atributo "title")
```

> attributes retorna uma coleção com todos os atributos do elemento.
> getAttribute retorna o valor de um atributo específico.
