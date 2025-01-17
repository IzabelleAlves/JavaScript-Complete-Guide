// function mostrarConsole() {
//   console.log("oi");
// }

// addEventListener("click", mostrarConsole);

//'function' é uma função de CallBack
//callback é quando uma função é passada como argumento de outra e, em seguida, é executada (ou "chamada de volta") pela função que a recebeu.

//Crie uma função para verificar se um valor é Truthy

function isTruthy(value) {
  return !!value;
}

//Crie uma função matemática que retorne o perímetro de um quadrado

function perimetro(lado) {
  return lado * 4;
}

//Crie uma função que retorne o seu nome completo. Parametros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se o número é par

function isPar(number) {
  if (number % 2 == 0) {
    return `É par`;
  } else {
    return `Não é par`;
  }
}

// Crie uma função que retorna o tipo de dado do argumento passado nela

function type(data) {
  return typeof data;
}

//addEventListner é uma função nativa do JS
//o primeiro parâmetro é o evento que ocorre e o segundo é a Callback
//utilize essa função para mostrar no console o seu nome completo
//quando o evento 'scroll' ocorrer

addEventListener("scroll", function () {
  console.log("Izabelle Alves");
});

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises}`;
}
