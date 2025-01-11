//Verifique se a sua idade é maior do que a de algum parente
//Dependendo do resultado, coloque no console 'é maior', 'É igual' ou 'É menor'

let minhaIdade = 23;
let idadeParente = 54;

if (minhaIdade > idadeParente) {
  console.log("É maior");
} else if (minhaIdade < idadeParente) {
  console.log("É menor");
} else {
  console.log("É igual");
}

switch (true) {
  case minhaIdade > idadeParente:
    console.log("É maior");
    break;
  case minhaIdade < idadeParente:
    console.log("É menor");
    break;
  default:
    console.log("É igual");
}
