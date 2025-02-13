let titulos = document.querySelectorAll(".titulo");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  titulos.forEach((titulo) => {
    titulo.innerText = "ULALAU";
  });
});

let see = true;
let faq = document.querySelector(".faq-lista");
let cliqueFaq = document.querySelector(".faq .titulo");

cliqueFaq.addEventListener("click", () => {
  if (faq) {
    see = !see;
    faq.style.display = see ? "block" : "none";
  }
});
