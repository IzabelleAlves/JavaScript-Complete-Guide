const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");

botao.addEventListener("click", () => {
  botao.textContent = "Você clicou no botão!";
});

let h1Selecionado = document.querySelector("h1");

// window.alert("testando");

//Atividade

// Retorne o url da pagina attual utilizando o objeto window

let url = document.location.href;
console.log(url);

// Selecione o primeiro elemento da página que possua a classe ativo

let elementoAtivo = document.querySelector(".ativo");
console.log(elementoAtivo);

// Retorne a linguagem do navegador

let linguagem = window.navigator.language;
console.log(linguagem);

// retorne a largura da janela

let alturaJanela = window.innerHeight;
console.log(alturaJanela);
