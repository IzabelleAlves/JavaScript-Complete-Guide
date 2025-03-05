# Prototype

- É um objeto adicionado a uma função quando ela é criada.
- Cria um 'objeto' da função nela mesma. Exemplo:

  ```javascript
  function Carro(marca) {
    this.marca = marca;
  }
  //Por baixo dos panos funciona assim:
  arro.prototype.getMarca = function () {
    return this.marca;
  };C

  const honda = new Carro("Honda");
   console.log(ho nda.getMarca()); // "Honda"

  ```

- Na prática, não precisamos escrever `.prototype` quando acessamos métodos e propriedades porque o JavaScript faz isso automaticamente por meio da cadeia de protótipos (prototype chain).
- Ligado sempre a função construtora.
- É possível adicionar novas propriedades e métodos ao objeto prototype da FUNÇÃO CONSTRUTORA.
- Se você quiser adicionar um método a todas as instâncias criadas com uma função construtora, sem modificar diretamente a função em si, você usa prototype.
- Tem acesso, mas não é gerado diretamente e automaticamente no momento da criação do objeto. Ou seja, o protótipo não é copiado para cada instância, mas a instância tem acesso a ele por herança.
