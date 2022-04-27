/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

serão impressos:
"Matheus Nachtergaele"
"Virginia Cavendish"
`Canal: Globo, 
horario: 14` */

/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

será impresso:
nome: 'Juca'
idade: 3
raca: 'SRD'

nome: 'Juba'
idade: 3
raca: 'SRD'

nome: 'Jubo'
idade: 3
raca: 'SRD'

A sintaxe dos três pontos antes do nome de um objeto herda todos os atributos de outro objeto
 */

/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

será impresso:
false
undefined, pois o atributo 'altura' não foi definido em nenhum momento no código */

const pessoa = {
    nome: "Rhavi",
    apelidos: ["Tuta", "Biruta", "Peruca"]
}

function imprimeNomes(objeto) {
console.log(`Eu sou o ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}
imprimeNomes(pessoa)

const pessoa2 = {...pessoa, apelidos: ["Kipanga", "Pai do Appa", "Primo do Chub"]
}
imprimeNomes(pessoa2)

const obj1 = {
    nome: "Harry",
    idade: 10,
    profissao: "bruxo",
}

const obj2 = {
    nome: "Geralt",
    idade:250,
    profissao: "bruxão",
}

function criaArray (coisas) {
    infor = [coisas.nome, coisas.nome.length, coisas.idade, coisas.profissao, coisas.profissao.length]
return console.log (infor)
}
criaArray(obj1)
criaArray(obj2)

const carrinho = []
let fruta1 = {
    nome: "Banana" ,
    disponibilidade: true,
}

let fruta2 = {
    nome: "Manga" ,
    disponibilidade: true,
}

let fruta3 = {
    nome: "Tamarindo",
    disponibilidade: true,
}

function adicionaCarrinho (fruta) {
    carrinho.push(fruta)
}

adicionaCarrinho(fruta1)
adicionaCarrinho(fruta2)
adicionaCarrinho(fruta3)

console.log(carrinho);

const questionario = {nome: "", idade: "", profissao: ""}

function perguntas (propriedades) {
    propriedades.nome = prompt("Qual é o seu nome?")
    propriedades.idade = prompt("Qual é a sua idade?")
    propriedades.profissão = prompt("Qual é a sua profissão?")
console.log(questionario)
console.log(typeof(questionario))
}

perguntas(questionario)

const filme1 = {nome: "Lands of Nartain", anoLancamento: 2012}
const filme2 = {nome: "Advendures of Kipanga", anoLancamento: 2012}

function comparaFilme (nome1, nome2) {
    console.log (nome1.anoLancamento < nome2.anoLancamento)
    console.log (nome1.anoLancamento == nome2.anoLancamento)
}

comparaFilme (filme1, filme2)


function compraFruta (fruta) {
    fruta.disponibilidade = !fruta.disponibilidade
}

compraFruta(fruta1)
compraFruta(fruta2)
compraFruta(fruta3)

console.log(fruta2) 