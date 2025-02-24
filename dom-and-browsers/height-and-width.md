# Height e Width

- Propriedade dos objetos `Element` e `HTMLElement`, a maioria delas são Read Only.

```javascript
const section = document.querySelector(".animais");

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll
```

> mesma coisa para o Width... `clientWidth`

## getBoundingClientRect()

- Retorna um objeto contendo as dimensões e a posição de um elemento em relação à janela de visualização (viewport) do navegador. Isso inclui altura, largura e coordenadas da posição do elemento na tela.
- Funciona como se tivesse criando um 'retângulo' ao redor do meu elemento e a partir disso pega-se a largura e altura desse retângulo em relação aos outros elementos.
- Facilita a obtenção dos valores de altura (height) e largura (width) de um elemento na página.

**Exemplo:**

```javascript
const elemento = document.querySelector(".minha-div");
const rect = elemento.getBoundingClientRect();

console.log(rect.left); // Distância do lado esquerdo até a viewport
console.log(rect.top); // Distância do topo até a viewport
console.log(rect.width); // Largura do elemento
console.log(rect.height); // Altura do elemento
console.log(rect.right); // Distância do lado direito até a viewport
console.log(rect.bottom); // Distância da parte inferior até a viewport
```

## Window

- Geralmente nós, desenvolvedores, queremos saber o tamanho da tela do usuário. Para isso usamos `window`
- Pega exatamente o tamanho da janela

**Exemplo**

```javascript
window.innerWidth; //width da janela
window.outerWidth; //soma dev tools também // console aberto e etc
window.innerHeight; // Height da janela
window.outerWidht; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}
```

## matchMedia()

- Utilize um media-querie no `css` para verificar a largura do browser.
- Geralmente se usa para deixar os sites responsivos.

```javascript
const small = window.matchMedia("(max-width: 600px)");

if (small.macthes) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maioor que 600px");
}
```

> O `matches` é uma propriedade do objeto MediaQueryListEvent (no evento de mudança) ou do próprio MediaQueryList. Ele retorna um booleano (true ou false) indicando se a condição da media query foi atendida no momento.
