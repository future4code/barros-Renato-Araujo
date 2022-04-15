/* console.log("Olá Mundo!")
let name = prompt ("What is your name?")
console.log(nome)
let quest = prompt ("What is your quest?")

if (name == "Sir Lancelot of Camelot") {

let color = prompt ("What is your favorite color?")
alert ('Your name is ' + nome + ', also your quest is ' + quest + " and your favorite color is " + color)

} 

if (nome == "Arthur, king of the britons") {
let speed = prompt ("what is the airspeed velocity of an unladen swallow?")
    if (speed == "What do you mean, an african or an european swallow?") {
        alert ("I don't know that!")
        window.close()
    }
} */

/* let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) // resultado será 10, 5 */

/* let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) // será impresso 10, 10, 10 */

/* let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
ele dividirá o valor pelo tempo e fará um alert */

let nome 
let idade

console.log (typeof(nome)), 
console.log (typeof(idade))

//O nome undefined foi impresso pois os valores estão indefinidos

nome  = prompt ("Qual é o seu nome?")
idade = prompt ("Qual é a sua idade?")

console.log (typeof(nome))
console.log (typeof(idade))

//Neste caso, ele reconheceu as duas como strings

console.log ("Olá, " + nome + ", você tem " + idade + " anos!")

let ehBrasileiro = true
let ehSolteiro = true
let ehIdoso = false

console.log (ehBrasileiro, ehSolteiro, ehIdoso)

let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log ("O novo valor de a é " + a)
console.log ("O novo valor de b é " + b)

let x = a+b
let y = a*b
console.log ("A soma deles é = " + x)
console.log ("O produto deles é = " + y)


let resultado = 3 + 4
console.log ('O resultado é ', resultado)

resultado = 3*5/2
console.log ('O resultado é ', resultado)

resultado = (5-4)*-1
console.log ('O resultado é ', resultado)

resultado = 234%5
console.log ('O resultado é ', resultado)