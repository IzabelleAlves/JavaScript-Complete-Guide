// Crie um array com os anos que o prasil ganhou a copa do mundo

let brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com o arry utilizando um loop para mostrar no console a seguinte mensagem
//"O Brasil ganhou a copa de ${ano}"

brasilCampeao.forEach((item) => {
  console.log(`O Brasil ganhou a copa de ${item}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

let frutas = ["banana", "maçã", "pera", "uva", "melancia"];

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === "pera") {
    break;
  }
}

// Coloque a ultima fruta do array acima em uma variável sem remover do array

let ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
