# Promises

-Uma Promise representa um valor que pode estar disponível agora, no futuro ou nunca. Ela tem três estados possíveis:

- Pending (Pendente) –> Quando a operação assíncrona ainda está em andamento.
- Fulfilled (Resolvida) –> Quando a operação assíncrona foi concluída com sucesso.
- Rejected (Rejeitada) –> Quando ocorreu um erro na operação assíncrona.

## Criando uma Promise

- Uma Promise é criada usando o **construtor Promise**, que recebe uma função com dois parâmetros: **resolve e reject**.

```js
const minhaPromise = new Promise(function(resolve, reject) => {
  let sucesso = true; // Simulação de sucesso ou falha

  setTimeout(() => {
    if (sucesso) {
      resolve("Deu certo! 🎉");
    } else {
      reject("Algo deu errado! ❌");
    }
  }, 2000);
});
```

- Retornará um objeto tipo Promise. Qualquer objeto que tenha os métodos `.then()` e .`catch()` é considerado um objeto do tipo Promise.

## `then()`

- Acontece quando uma Promise deu certo (resolve)
- O poder das Promises está no método `then()` do seu protótipo. O Callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função `resolve`.
- O resolve() não retorna nada diretamente porque a Promise não executa o código imediatamente. Em vez disso, ela armazena o valor que será retornado no futuro e o .then() é usado para acessar esse valor quando a Promise for resolvida.

```js
const promessa = new Promise((resolve, reject) => {
  let condicao = true
  if(condicao){
    resolve('Iza') // ativei o resolve
  } else{
    reject(Error('Um erro ocorreu na promise')) //ativei o reject
  }
})

promessa.then(function(resolucao) => console.log(resolucao))
//o then() vai ter acesso ao que tá dentro do resolve da Promise, então ele puxa o que ta dentro do resolve e coloca dentro do argumento dele no callback.
```

## `.tehn().then()`

- `.then()` retorna uma outra `Promise`.
- Característica muito importante das Promises, chamada **encadeamento de Promises**. Quando se é chamado .then(), ele retorna uma nova Promise, o que permite que você continue encadeando operações assíncronas.
- Importante lembrar e saber que: `.then()` não é uma Promise em si, mas sim um método da Promise. Esse método retorna um `thenable`, ou seja, um objeto que tem um método `.then()` e que, ao ser resolvido, retorna uma nova Promise.
- O primeiro `.then() `pega a resolução da Promise inicial, e o segundo `.then()` pega a resolução do valor retornado pelo primeiro `.then()` e assim sucessivamente.
- A ideia do encadeamento de then() é: passar o valor de um then para o próximo. Ou seja, cada then recebe o valor do anterior e pode modificar esse valor antes de passá-lo para o próximo.

```js
const promessa = new Promise((resolve) => {
  resolve("Valor inicial"); // A promessa inicial resolve com "Valor inicial"
});

promessa
  .then((resultado) => {
    // 1º .then()
    console.log(resultado); // Imprime: "Valor inicial"
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Valor após 2 segundos"); // Nova promessa resolvida após 2 segundos
      }, 2000);
    });
  })
  .then((resultadoFinal) => {
    // 2º .then()
    console.log(resultadoFinal); // Imprime: "Valor após 2 segundos"
  });

//outro exemplo:

promessa
  .then((resultado) => {
    console.log("Primeiro then:", resultado); // Imprime o primeiro valor resolvido
    return resultado; // Passa o valor para o próximo then
  })
  .then((resultado1) => {
    console.log("Segundo then:", resultado1); // Imprime o mesmo valor, ou pode modificá-lo
    return { ...resultado1, nome: "gatinha123" }; // Cria um novo objeto
  })
  .then((resultadoFinal) => {
    console.log("Resultado final:", resultadoFinal); // Imprime o valor final
  });
```

## `catch()`

- Adiciona um callback a promise que será ativado caso ela seja rejeitada (reject)
- Mesma ideia do .then(). O 'reject' sozinho não retorna nada dentro da Promise. Precisa do catch() para puxar o valor armazenado.

## `finally()`

- Executa a função anônima assim que a promessa acabar. A diferença do finally éque ele será executado independentemente do resultado, se for resolvida ou rejeitada.
- Caso eu queira que aconteça uma função sempre.

```js
promessa
  .then(
    (resolucao) => {
      console.log(resolucao);
    },
    (reject) => {
      console.log(reject);
    }
  )
  .finally(() => {
    //não recebe nenhum parâmetro
    console.log("acabou");
  });
```

## Consumindo uma Promise

- Podemos utilizar os métodos .then() e .catch() para tratar o sucesso ou erro da Promise.

```js
minhaPromise
  .then((mensagem) => {
    console.log("Sucesso:", mensagem);
  })
  .catch((erro) => {
    console.log("Erro:", erro);
  });
```
