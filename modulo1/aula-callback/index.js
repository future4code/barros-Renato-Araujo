/* const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

1. Suponho que será impressa uma nova array com 3 objetos, que terão o nome, apelido citados, mas também terá toda a array usuarios como terceiro termo (?)

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

  2. Será impressa uma nova array com os nomes da array usuarios

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
  
  3. Será impressa uma nova array com objetos cujos termos apelido são diferentes de "Chijo"

   */

  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomePets = pets.map ((item) => {
    return item.nome
 })
 console.log(nomePets);

 const apenasSalsicha = pets.filter((item) => {
    return item.raca == "Salsicha"
 })
 console.log(apenasSalsicha)

 const promoPoodle = pets.filter((poodle) => {
     return poodle.raca == "Poodle"
     
 })

 const nomePoodle = promoPoodle.map((poodle) => {
     console.log("Você ganhou cupom para o " + poodle.nome)
 })

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeProdutos = produtos.map ((item) => {
     return item.nome
 })

 console.log(nomeProdutos)

 const descontoProdutos = produtos.map ((item) => {
     console.log("O produto " + item.nome + " está com 5% de promoção por: R$" + item.preco*0.95)
 })

 const apenasBebidas = produtos.filter ((item) =>{
     return item.categoria == "Bebidas"
 })

 console.log(apenasBebidas)

 const produtosYpe = produtos.filter ((item) =>{
     return item.nome.includes("Ypê")
 })

 const promoYpe = produtosYpe.map ((item) =>{
     console.log(`Compre ${item.nome} por R$${item.preco.toFixed(2)}!`)
 })

 const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const ordemAlfa = pokemons.sort((a, b) => a.nome.localeCompare(b.nome))

 console.log(ordemAlfa)
 
 const pokemonTipo = pokemons.map ((item) => {
     return item.tipo
 })

 console.log(pokemonTipo)
 const pokemonTipoGrama = pokemons.filter((item) => {
     return item.tipo == "grama"
 })

 const pokemonGrama = pokemonTipoGrama.map((item) => {
     return item.nome
 })

 console.log(pokemonGrama)

