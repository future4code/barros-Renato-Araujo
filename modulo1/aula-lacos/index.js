// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor) // O código faz somas de valor e i enquanto i for menor que 5. A soma total será [0+0] 0+1, 1+2, 3+3, 6+4 = 10

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// } // a. será impresso: 19,21,25,27,30
// // b. para descobrir o index de cada elemento numero dentro da lista, será possível usando lista.indexOf(numero)

/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

3. se for digitado 4 no console, será impresso
*
**
***
****

*/
//1
let nomePets = []
let pets = (Number(prompt("Quantos pets você tem?")))
if (pets == 0) {console.log("Que pena! Você pode adotar um pet!");
} else {
        let i = 0
        while (i < pets) {
            nomePets.push(prompt(`Digite o nome do ${i+1}° bichinho:`))
            i++
        }
        console.log (nomePets)
}

//2
let numerosPares = []
const arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
console.log("Números");
for (numero of arrayOriginal) {
    console.log(numero);
}
console.log("Números divididos por 10");

for (numero of arrayOriginal) {
    console.log(numero/10);
}
console.log("Array com os pares");

for (numero of arrayOriginal) {
    if (numero%2==0){
    numerosPares.push(numero)}
}
console.log(numerosPares)

let arrayEspelho = []
for (numero of arrayOriginal) {
    arrayEspelho.push(`O elemento do índex ${arrayOriginal.indexOf(numero)} é ${numero}`)
}
console.log ("A array Espelho é")
console.log(arrayEspelho);

// A última questão em uma linha será:
console.log(`O maior número da array é ${Math.max(...arrayOriginal)} e o menor é ${Math.min(...arrayOriginal)}`)

let max = arrayOriginal[0]
let min = arrayOriginal[0]
for (numero of arrayOriginal) {
    if (numero > max) {max = numero}
}
for (numero of arrayOriginal) {
    if (numero < min) {max = numero}
}
console.log(`O maior número da array é ${max} e o menor é ${min}`)


let id = 1
let numeroChute
let numeroAdvinha = Number(prompt("VAMOS JOGAR! PLAYER 1, escolha um número para ser adivinhado pelo PLAYER 2!"))

while (numeroChute != numeroAdvinha) {
    numeroChute = Number(prompt("PLAYER 2, CHUTE UM NÚMERO!"))
   
        if (numeroChute < numeroAdvinha) {console.log(`O número chutado foi: ${numeroChute}
ERROU! O NÚMERO É MAIOR`);}
        if (numeroChute > numeroAdvinha) {console.log(`O número chutado foi: ${numeroChute}
ERROU! O NÚMERO É MENOR`);}
        if (numeroChute == numeroAdvinha) {console.log(`ACERTOU!
O número de tentativas foi: ${id}`)}
        id ++
}
        
