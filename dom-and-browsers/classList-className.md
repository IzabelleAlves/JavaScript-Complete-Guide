# Manipulando classes e atributos com o DOM

## ClassList

- Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém essa classe.

### Exemplo:

```javascript
const menu = document.querySelector("menu");

menu.className; //string
menu.classList; //Lista de classes
menu.classList.add("ativo"); //add uma classe
menu.classList.add("ativo", "mobile");
menu.classList.remove("ativo");
menu.classList.toggle("ativo"); /// add/remove a classe
menu.classList.contains("ativo"); //true or false
menu.classList.replace("ativo", "inativo"); //substitui uma classe pela outra (A PRIMEIRA PELA SEGUNDA)
```

## className

- Permite obter ou definir todas as classes CSS de um elemento como uma única string.
- Pode ser sobrescrita. Exemplo:

  ```javascript
  const elemento = document.querySelector("#meuElemento");
  elemento.className = "novaClasse";
  console.log(elemento.className); // "novaClasse"
  // Isso altera a classe dentro do HMTL

  // concatenando as classes:
  elemento.className += " destaque";
  console.log(elemento.className); // "novaClasse destaque"
  ```

### **Diferença entre className e classList**

- `className` trabalha com uma string completa contendo todas as classes do elemento.
- `classList` fornece métodos para adicionar, remover e manipular classes individualmente.
