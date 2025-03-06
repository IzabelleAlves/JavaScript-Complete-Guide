//faça a soma dos valores das taxas

const transacoes = [
  {
    descricao: "taxa do pão",
    valor: "R$ 39",
  },
  {
    descricao: "taxa de café",
    valor: "R$ 15",
  },
  {
    descricao: "taxa aluguel",
    valor: "R$ 1200",
  },
  {
    descricao: "taxa transporte público",
    valor: "R$ 45",
  },
  {
    descricao: "taxa de impostos",
    valor: "R$ 300",
  },
];

let somaValores = 0;
transacoes.forEach((item) => {
  const valorNumerico = Number(item.valor.replace(/\D/g, ""));
  somaValores += valorNumerico;
});

console.log(somaValores);

// retorne uma array com a lista abaixo

const trasnportes = "carro; avião; trêm; ônibus; bicicleta";

const arrayTransportes = trasnportes.split(";");
console.log(arrayTransportes);

// substitua todos os 'span' por 'a'

const html = `<ul>
                  <li><span>Sobre</>span></li>
                  <li><span>Sobre</>span></li>
                  <li><span>Sobre</>span></li>
              </ul>`;

const converterHtml = html.split("span").join("a");

console.log(converterHtml);

// retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase[frase.length - 1]);
//ou
console.log(frase.slice(-1));

// rerotne o total de taxas

const transacoes2 = [
  "taxa do banco",
  "taxa do pao",
  "taxa do mercado",
  "depósito bancário",
  "taxa especial",
];

let qtdTaxas = 0;

transacoes2.forEach((item) => {
  if (item.toLowerCase().trim().includes("taxa")) {
    qtdTaxas++;
  }
});

console.log(qtdTaxas);
