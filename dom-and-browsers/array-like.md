# Array-like

- É um objeto que parece um array, pois possui índices numéricos (0, 1, 2...) e uma propriedade `.length`, mas não herda os métodos de um array real.
- Retorna com um `htmlCollection`

# Diferença entre Array-like e Array

| Característica                                                 | Array-like | Array  |
| -------------------------------------------------------------- | ---------- | ------ |
| Possui índices numéricos?                                      | ✅ Sim     | ✅ Sim |
| Possui `.length`?                                              | ✅ Sim     | ✅ Sim |
| Possui métodos de array (`map()`, `filter()`, `push()`, etc.)? | ❌ Não     | ✅ Sim |
| Pode ser iterado com `for` tradicional?                        | ✅ Sim     | ✅ Sim |
| Pode ser iterado com `.forEach()` diretamente?                 | ❌ Não     | ✅ Sim |
