// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = parseInt (prompt("Escreva a altura do retângulo"))
  let largura = parseInt (prompt("Digite a altura do retângulo"))
  console.log (altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = parseInt (prompt ("Escreva o ano atual"))
  let anoDeNascimento = parseInt (prompt("Escreva o seu ano de nascimento"))
  console.log (anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let IMC = peso / (altura * altura)
  return (IMC)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual é o seu nome?")
  let idade = prompt("Qual a sua idade?")
  let email = prompt("Qual é o seu e-mail?")
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Escreva sua primeira cor favorita")
  let cor2 = prompt("Escreva sua segunda cor favorita")
  let cor3 = prompt("Escreva sua terceira cor favorita")
  let coresFavoritas = [cor1, cor2, cor3]
  console.log (coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
let frase = string.toUpperCase ()
return (frase)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return (custo/valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return (string1.length == string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return (array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return (array[array.length-1])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let temp = array[array.length-1]
array[array.length-1] = array [0]
array[0] = temp
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
string1 = string1.toUpperCase()
string2 = string2.toUpperCase()
return (string1 === string2)

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = parseInt(prompt("Digite o ano atual"))
let anoNascimento = parseInt(prompt("Digite seu ano de nascimento"))
let anoRG = parseInt(prompt("Digite o ano em que foi emitida seu RG"))
  if ((anoAtual-anoNascimento) <= 20) {
  console.log (anoAtual-anoRG >=5 )
  }
  if (((anoAtual-anoNascimento) <= 50) && ((anoAtual-anoNascimento) > 20)) {
  console.log (anoAtual-anoRG >=10 )
  }
  if ((anoAtual-anoNascimento) > 50) {
   console.log (anoAtual-anoRG >=15 )
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
if ((ano%400==0)) {
  return true
}
if (ano%100==0) {
  return false
}
if (ano%4==0) {
  return true
}
else {
  return (false)
}

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let tem18 = prompt("Você tem 18 anos ou mais?")
  let ensinoMedio = prompt ("Você possui ensino médio?")
  let disponibilidade = prompt ("Você tem dispô?")

  if ((tem18=="sim") && (ensinoMedio=="sim") && (disponibilidade=="sim")) {
    console.log (true)
  } else {
    console.log (false)
  }

}