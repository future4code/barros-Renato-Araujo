/* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
a. Ele testa se o número é par, verificando se não há resto na divisão por 2.
b. Para os números pares.
c. Para todos os demais números.

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a. O código acima imprime as informações de preço para valores específicos de fruta, nos demais casos, ele volta o nome inserido e o valor 5 reais.
b. "O preço da fruta Maça é R$ 2.25"
c. Imagino que, se não houver o break, ele deve sobrescrever o valor de 5.5 com o submencionado 5 (do default) e imprimir a mensagem completa.

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a. A primeira linha está pedindo que o usuário entre com uma informação para a constante numero.
b. Para 10 "Esse número passou no teste"; para -10 não imprimirá undefined
c. Agora que você colocou a dúvida, acho que falei errado. Ele não imprimirá valor em momento algum, pois mensagem não foi declarado fora do if, então provavelmente será um erro de referência, MESMO se você colocar um número positivo, pois o let mensagem deveria estar fora do if.
*/

let idade = Number(prompt("Qual é a sua idade?"))
function maiorDeIdade (num1) {
    return (num1 >= 18) ? "Você pode tirar CNH!" : "Você não pode dirigir!"
}

console.log(maiorDeIdade (idade))
//2.
let turno = prompt(`Em qual turno você estuda? 
M = Matutino
V = Vespertino
N = Noturno`)

if (turno == "M") {
    console.log("Bom dia!");
} else if (turno == "V") {
    console.log("Boa tarde!"); 
} else if (turno == "N") {
    console.log("Boa noite!");
    } 
//3.
let turno2 = prompt(`Em qual turno você estuda? 
M = Matutino
V = Vespertino
N = Noturno`)

let mensagem
switch (turno2) {
  case "M":
    mensagem = "m dia!"
    break;
  case "V":
    mensagem = "a tarde!"
    break;
  case "N":
    mensagem = "a noite!"
    break;
  default:
    mensgem = "Você nem estuda aqui, espião!"
    break;
}
console.log("Bo"+ mensagem)    
//4.
let generoFilme = prompt("Amigo: Qual o gênero do filme a que vamos assistir?")
let precoFilme = Number(prompt("Amigo: Qual é o preço do ingresso em Reais?"))
let lancheFilme = prompt("Qual lanchinho levaremos?")
if (generoFilme == "Fantasia" && precoFilme <= 15) {
   
        console.log("Amigo: Oba! Vamos ver filme! Bom filme! Shiryu Amigo! Adoro " + lancheFilme + "!!!");
    }
    
 else {console.log("Amigo: Escolha outro filme! :(")}

//Desafio

let nomeCompleto = prompt("Qual é o seu NOME COMPLETO?")
let tipoJogo = prompt(`O jogo será 
IN (internacional - USD 1 = BRL 4,1) ou 
DO (doméstico)?`)
let etapaJogo = prompt(`A etapa será: 
SM (semi-final)
DT (decisão terceiro lugar)
FI (final)?`)
let categoriaJogo = prompt(`Qual será a CATEGORIA do jogo:
1
2
3
4?`)
let quantidadeJogo = Number(prompt("Qual será a quantidade de ingressos?"))


let precoIngresso
if (etapaJogo = "SF") {
switch (categoriaJogo) {
  case "1":
    precoIngresso = 1320
    break;
  case "2":
    precoIngresso = 880
    break;
  case "3":
    precoIngresso = 550
    break;
  case "4":
    precoIngresso = 220
    break; 
}}

if (etapaJogo = "DT") {
switch (categoriaJogo) {
  case "1":
    precoIngresso = 660
    break;
  case "2":
    precoIngresso = 440
    break;
  case "3":
    precoIngresso = 330
    break;
  case "4":
    precoIngresso = 170
    break; 
}}

if (etapaJogo = "FI") {
switch (categoriaJogo) {
  case "1":
    precoIngresso = 1980
    break;
  case "2":
    precoIngresso = 1320
    break;
  case "3":
    precoIngresso = 880
    break;
  case "4":
    precoIngresso = 330
    break; 
}}



if (tipoJogo = "DO") {
    console.log(`    --- Dados da Compra ---
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: ${etapaJogo}
    Categoria: ${categoriaJogo}
    Quantidade de Ingressos: ${quantidadeJogo} ingressos
    
    --- Valores ---
    Valor Unitário do Ingresso: ${precoIngresso}
    Valor Total: ${precoIngresso*quantidadeJogo}`)
}

if (tipoJogo = "IN") {
    console.log(`    --- Dados da Compra ---
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Nacional
    Etapa do jogo: ${etapaJogo}
    Categoria: ${categoriaJogo}
    Quantidade de Ingressos: ${quantidadeJogo} ingressos
    
    --- Valores ---
    Valor Unitário do Ingresso: ${precoIngresso*4.1}
    Valor Total: ${precoIngresso*quantidadeJogo}`)
}