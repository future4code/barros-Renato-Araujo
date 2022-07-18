```JS
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

let i = 0 
let nominhos = []
for (i = 0; i < animais.length; i++) {
  nominhos.push(animais[i].nome);
}

return nominhos
}