/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) 

a. false
b. false
c. true
d. boolean 
 */
 
/* 2. let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

O problema é que o prompt vai interpretar o número como STRING, 
e o resultado da operação será "primeiroNumerosegundoNumero"
por exemplo: primeiroNumero = 4, segundoNumero = 2
soma = 42

3. Eu sugeriria usar 
let primeiroNumero = parseInt(prompt("Digite um número!"))
let segundoNumero = parseInt(prompt("Digite outro número!"))
*/

let idadeUsuario = parseInt(prompt("Digite sua idade!"))
let idadeAmigo = parseInt(prompt("Digite a idade de seu melhor amigo!"))
let ehMaior =  idadeUsuario > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo? =", ehMaior)
console.log(idadeUsuario - idadeAmigo)

let numeroPar = parseInt(prompt("Digite um número par!"))
console.log(numeroPar%2) // Se o número é par = 0, se o número é impar = 1

let idade = parseInt(prompt("Escreva a sua idade!"))
console.log("Vocêm tem " + idade*12 + " meses!")
console.log("Vocêm tem " + idade*365 + " dias!")
console.log("Vocêm tem " + idade*365*24 + " horas!")

//DESAFIO - Parte de temperatura
let grauFahrenheit = 77
let grauKelvin = (grauFahrenheit - 32)*(5/9) + 273.15

console.log (grauFahrenheit, "Graus Fahrenheit são ", grauKelvin, "graus Kelvin")

let grauCelsius = 80
grauFahrenheit = grauCelsius*(9/5) + 32
console.log (grauCelsius, "graus Celsius são", grauFahrenheit, "graus Fahrenheit")

grauCelsius = 30
grauFahrenheit = grauCelsius*(9/5) + 32
grauKelvin = (grauFahrenheit - 32)*(5/9) + 273.15
console.log(grauCelsius, 'graus Celsius são', grauFahrenheit, 'graus F e', grauKelvin, 'graus K')

// Agora, para o usuário entrar com o grauCelsius

grauCelsius = parseInt(prompt("Escreva uma quantidade de graus Celsius a ser convertida para F e K:"))
grauFahrenheit = grauCelsius*(9/5) + 32
grauKelvin = (grauFahrenheit - 32)*(5/9) + 273.15
console.log(grauCelsius, 'graus Celsius são', grauFahrenheit, 'graus F e', grauKelvin, 'graus K')

//Agora, eletricidade
// R$ 0,05 por hora
let KWh = 280
let contaLuz = KWh * 5/100
console.log ("Consumindo 280 KWh, sua conta de luz será R$ " + contaLuz)
// desconto de 15%
console.log ("Com o desconto de 15%, sua fatura será R$ " + contaLuz*85/100)

// Agora, conversões de medidas
let lb = 20
let kg = lb * 2.205
console.log (lb, 'libras é igual a', kg, 'kg')

let oz = 10.5
kg = oz/35.274
console.log (oz, 'onças é igual a', kg, 'kg')

let mi = 100
let mt = mi*1609.34
console.log (mi, 'milhas é igual a', mt, 'metros')

let ft = 50
mt = ft/3.281
console.log (ft, 'pés é igual a', mt, 'metros')

let gal = 103.56
let l = gal*3.785
console.log (gal, 'galões é igual a', l, 'litros')

let xic = 450
l = xic*0.24
console.log (xic, 'xícaras é igual a', l, 'litro')

xic = parseInt(prompt("Agora escolha quantas xícaras você quer convertem em litros!"))
l = xic*0.24
console.log (xic, 'xícaras é igual a', l, 'litro')