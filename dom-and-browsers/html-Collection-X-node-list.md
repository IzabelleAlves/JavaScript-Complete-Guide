# htmlCollection X NodeList

## `HTMLCollection` →

- Recebem apenas o nome da classe ou da tag, sem ponto (.) ou #;
- É retornado por métodos que selecionam elementos baseados em tags HTML, como:

```javascript
document.getElementsByClassName("classe"); // retorna um htmlCollection
document.getElementsByTagName("tag");
```

## `NodeList` →

- Funcionam como seletores CSS, então você precisa incluir . para classes e # para IDs;
- Pode ser retornado por métodos que selecionam qualquer tipo de nó (elementos, textos, comentários, etc.), como:

```javascript
document.querySelectorAll(".div"); //retorna uma nodeList estática
```

| Tipo                            | Atualiza automaticamente? |
| ------------------------------- | ------------------------- |
| **HTMLCollection**              | ✅ Sim (Live)             |
| **NodeList (querySelectorAll)** | ❌ Não (Estático)         |
| **NodeList (childNodes)**       | ✅ Sim (Live)             |
