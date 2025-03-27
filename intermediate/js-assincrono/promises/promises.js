const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "iza", idade: 22 }); // ativei o resolve
      // e enviamos um objeto para o resolve
      //so armazena o valor
    }, 2000);
  } else {
    reject(Error("Um erro ocorreu na promise")); //ativei o reject
  }
});

console.log(promessa); // saída imediata: Promise { <pending> } pq ainda está processando
promessa.then((resolucao) => console.log(resolucao)); // saída após dois segundos
// quase que um 'tudo bem, estou esperando a promise ficar pronta

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
