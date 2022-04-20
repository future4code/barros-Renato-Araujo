/* let array
console.log('a. ', array) // será impresso "a. undefined" (array não foi definido)

array = null
console.log('b. ', array) // será impresso "b. null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // será impresso "c. 11"

let i = 0
console.log('d. ', array[i]) // ele irá imprimir o index 0 = "3", logo "d. 3"

array[i+1] = 19
console.log('e. ', array) // imagino que ele colocará o index (0+1) = 19, substituindo o 4 (?). Deve imprimir "e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13"

const valor = array[i+6]
console.log('f. ', valor) // será atribuído para 'valor' o index (0+6) de array, imprimindo "f. 9'*/



/* const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

se o prompt for = "Subi num ônibus em Marrocos", será impresso "SUBI NUM ÔNIBUS EM MIRROCOS" */

let nomeDoUsuario = prompt ("Digite seu primeiro nome")
let emailDoUsuario = prompt ("Digite seu endereço de e-mail")
console.log (`O e-mail ${emailDoUsuario} foi cadastrado com sucesso! 
Seja bem-vinda(o), ${nomeDoUsuario}!` )

let comidasFavoritas = ['Uva', 'Passa', 'Peixe', 'Peixe é Bom', 'Peixe é ótimo']
console.log (comidasFavoritas)
console.log (`Essas são minhas comidas favoritas:`)
console.log (comidasFavoritas[0])
console.log (comidasFavoritas[1])
console.log (comidasFavoritas[2])
console.log (comidasFavoritas[3])
console.log (comidasFavoritas[4])


comidasFavoritas.splice(1,1, prompt ("Digite uma comida favorita sua para eu torná-la a minha segunda favorita!"))
console.log (comidasFavoritas)


/* let tarefa1 = prompt("Digite a primeira tarefa que você precisa realizar hoje!")
let tarefa2 = prompt("Digite a segunda tarefa que você precisa realizar hoje!")
let tarefa3 = prompt("Digite a terceira tarefa que você precisa realizar hoje!")
let tarefas = [tarefa1, tarefa2, tarefa3]
console.log (tarefas)
let tarefaRealizada = prompt ("Qual delas você já realizou?")
tarefas.splice(tarefaRealizada-1, 1)
console.log (tarefas) */

let frase = (prompt ("Escreva uma frase maneira!"))
console.log(frase.split (' ')) 

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log (frutas)
indexAbacaxi = frutas.indexOf("Abacaxi")
console.log("Abacaxi está na índice", indexAbacaxi, "e contém ", frutas[indexAbacaxi].length+1, " letras")