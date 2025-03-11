# Módulos

- Foram introduzidos no ES6+ para organizar o código, permitindo melhor reutilização e manutenção. Eles podem manipular o DOM, mas seu principal foco é estruturar o código de forma modular.

## Origanização do código em módulos

- **Manutenção** -> Dividir o código em diferentes arquivos com funções específicas facilita a manutenção.
- **Compartilhamento** -> O compartilhamento de código com outros projetos é facilitado, pois basta você importar um módulo específico.
- **Nativo no ES6+** -> Ferramentas que permitem dividirmos o código em módulos já existia, mas agora eles são nativos do JS. Antes disso, isso já era simulado por meio de plataformas de automação.

### Como usar:

```js
  <script type="module" src="js/script;js"></script>

  //arquivo scroll-suave.js
  export default function scrollSuave(){...} //Módulo importado

  //arquivo script.js
  import scrollSuave from '.scroll-suave.js'

  scrollSuave()
```

### Named Exports

- Você pode exportar mais de um valor. Quano for exportar, basta usar as chaves `{}` para especificar cada valor. O nome importado deve ser igual ao exportado.
- Agora eu posso importar várias coisas de um arquivo, não só o default

```js
// arquivo scroll.js
export function scrollSuave() {
  ...
}
export function scrollAnimacao(){
  ...
}

//arquivo script.js
import {scrollSuave, scrollAnimacao} from './scroll.js'
scrollSuave()
scrollAnimacao()
```

### Valores do Export

- Podemos exportar objetos, funções, classes, números, strings e mais.

```js
//arquivo configuracao.js
export function scrollSuave() {}
export const ano = 2000;
export const obj = { nome: "Ford" };
export const str = "Frase";

//arquivo script.js
import * as conf from "./configuracao.js";

conf.str;
conf.obj;
conf.ano;
```

> O `as` na importação `import * as conf from './configuracao.js'` serve para criar um `alias` (apelido) para o módulo inteiro.
