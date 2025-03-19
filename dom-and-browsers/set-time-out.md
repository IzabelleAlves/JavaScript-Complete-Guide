# `setTimeOut()`

- O método `setTimeout()` no JavaScript é usado para executar uma função ou um trecho de código depois de um determinado tempo (em milissegundos). Ele é assíncrono e não bloqueia a execução do restante do código.
- Não existe garantia de que o código esperará o tempo que foi desgignado.
- Funciona como uma callback.
- Assíncrona (acontece enquanto outras coisas estão acontecendo também, porém por 'baixo dos panos').
- Espera o código a parte acontecer.

```js
setTimeout(funcao, tempo);
```

> **Funcao:** A função que será executada após o tempo definido.
> **Tempo** O atraso em milissegundos antes da execução da função.

**Exemplo básico:**

```js
console.log("Antes do setTimeout");

setTimeout(() => {
  console.log("Executado depois de 2 segundos");
}, 2000);

console.log("Depois do setTimeout");

/** O que se espera que isso retorne:
 * //Antes do setTimeout
 * //Depois do setTimeout
 * //Executado depois de 2 segundos (mostra depois pq respeita o tempo passado na função)
 */
```

🔎 **IMPORTANTE:** O setTimeout não pausa o código! Ele continua rodando normalmente e executa a função após o tempo especificado.

- Cancelando um `setTimeout()`
  - é possível cancelar um `setTimeout()` antes que ele seja executado, use `clearTimeout()`. Para isso, é necessário armazenar o identificador retornado por `setTimeout()`. Ou seja, colocar o setTimeout() dentro de uma variável:

```js
let temporizador = setTimeout(() => {
  console.log("Isso não será executado!");
}, 3000);

clearTimeout(temporizador);
```

- Exemplo de uma situação com o `clearTimeout()` -> Imagine que você quer mostrar uma mensagem de alerta após 5 segundos, mas se o usuário clicar em um botão antes desse tempo, o alerta não deve ser exibido.

```js
let alerta = setTimeout(() => {
  console.log("Tempo esgotado! Exibindo alerta...");
}, 5000);

document.getElementById("cancelar").addEventListener("click", () => {
  clearTimeout(alerta);
  console.log("O alerta foi cancelado!");
});
```

## Diferença entre `setTimeout()` e `setInterval()`

- setTimeout(): Executa uma única vez após o tempo especificado.
- setInterval(): Executa repetidamente a cada intervalo de tempo.

**Exemplo `setInterval()`**

```js
funcition mudarClasse(){
  document.body.classList.toggle('active')
  //nesse caso,  no css existe um background para o body por padrão, se tiver a classe 'active' adicionado será outra cor.
}
setInterval(mudarClasse, 2000) //ativa a classe e automaticamente muda de cor a cada 2 segundos. Dá um efeito legal.
```
