// //faça a soma dos valores das taxas

// const transacoes = [
//   {
//     descricao: "taxa do pão",
//     valor: "R$ 39",
//   },
//   {
//     descricao: "taxa de café",
//     valor: "R$ 15",
//   },
//   {
//     descricao: "taxa aluguel",
//     valor: "R$ 1200",
//   },
//   {
//     descricao: "taxa transporte público",
//     valor: "R$ 45",
//   },
//   {
//     descricao: "taxa de impostos",
//     valor: "R$ 300",
//   },
// ];

// let somaValores = 0;
// transacoes.forEach((item) => {
//   const valorNumerico = Number(item.valor.replace(/\D/g, ""));
//   somaValores += valorNumerico;
// });

// console.log(somaValores);

// // retorne uma array com a lista abaixo

// const trasnportes = "carro; avião; trêm; ônibus; bicicleta";

// const arrayTransportes = trasnportes.split(";");
// console.log(arrayTransportes);

// // substitua todos os 'span' por 'a'

// const html = `<ul>
//                   <li><span>Sobre</>span></li>
//                   <li><span>Sobre</>span></li>
//                   <li><span>Sobre</>span></li>
//               </ul>`;

// const converterHtml = html.split("span").join("a");

// console.log(converterHtml);

// // retorne o último caracter da frase
// const frase = "Melhor do ano!";
// console.log(frase[frase.length - 1]);
// //ou
// console.log(frase.slice(-1));

// // rerotne o total de taxas

// const transacoes2 = [
//   "taxa do banco",
//   "taxa do pao",
//   "taxa do mercado",
//   "depósito bancário",
//   "taxa especial",
// ];

// let qtdTaxas = 0;

// transacoes2.forEach((item) => {
//   if (item.toLowerCase().trim().includes("taxa")) {
//     qtdTaxas++;
//   }
// });

// console.log(qtdTaxas);

const compras = [
  { item: "Notebook", preco: "R$ 100" },
  { item: "Mouse", preco: "R$ 120,00" },
  { item: "Teclado Mecânico", preco: "R$ 5,00" },
  { item: "Monitor 24''", preco: "R$ 900,00" },
  { item: "Cadeira Gamer", preco: "R$ 1.000,00" },
  { item: "Smartphone", preco: "R$ 3.200,00" },
  { item: "Fone de Ouvido Bluetooth", preco: "R$ 15,00" },
  { item: "Mochila para Notebook", preco: "R$ 5,00" },
  { item: "HD Externo 1TB", preco: "R$ 20,00" },
  { item: "Impressora", preco: "R$ 10,00" },
];

let valorTotal = 0;
compras.forEach((item) => {
  let preco = +item.preco
    .replace("R$", "")
    .trim()
    .replace(".", "")
    .replace(",", "");
  console.log(typeof preco);
  valorTotal += preco;
});

console.log(valorTotal);
