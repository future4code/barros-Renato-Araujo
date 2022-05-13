/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50

// se fossem retirados os dois console.log, nada seria impresso no console, mesmo o computador tendo executado a função
 */

/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) // essa função verifica se o texto escrito pelo usuário possui a palavra "cenoura" (ignorando maiúsculas e minúsculas) e retorna o respectivo booleano

os casos
i.   Eu gosto de cenoura
ii.  CENOURA é bom pra vista
iii. Cenouras crescem na terra
todos retornarão TRUE
 */

ident = function () {
    console.log (`Olá, meu nome é Renato, tenho 36 anos, moro em BH e sou Bombeiro Militar`)
}
ident()

identInfo = function (nome, idade, endereco, profissao) {
    console.log (`Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
}
identInfo("Renato", 36, "BH", "Bombeiro Militar")

resultadoSoma = function(numer1, numer2) {
    return numer1 + numer2
}
console.log (resultadoSoma(42,81))

resultadoCompar = function(numerMa, numerMe) {
    return numerMa >= numerMe
}
console.log (resultadoCompar(42,21))

resultadoPar = function(numeroPar) {
    return numeroPar%2 ==0
}
console.log (resultadoPar(9))

resultadoString = function (umaString) {
    let tamanho = umaString.length
    let maiuscula = umaString.toUpperCase()
    return [tamanho, maiuscula]
}
console.log (resultadoString("Essa é uma frase de teste muito legal!"))

let numeroOpe1 = parseInt (prompt("Escreva o primeiro número"))
let numeroOpe2 = parseInt (prompt("Escreva o segundo número"))
somar = function (somar1, somar2) {
    return somar1 + somar2
}
subtrair = function (sub1, sub2) {
    return sub1 - sub2
}
multiplicar = function (mult1, mult2) {
    return mult1*mult2
}
dividir = function (div1, div2) {
    return div1/div2
}
console.log (somar(numeroOpe1, numeroOpe2), subtrair(numeroOpe1, numeroOpe2), multiplicar (numeroOpe1, numeroOpe2), dividir(numeroOpe1, numeroOpe2))

arrowFunk = (fraseFunk) => console.log (fraseFunk)

arrowFunk2 = (val1, val2) => {
    let soma = val1 + val2
    return arrowFunk (soma)
}
arrowFunk2(31,11)

// Pitágoras

pitaFunk = (cat1, cat2) => {
    let hipoteFunk = Math.sqrt((cat1*cat1) + (cat2*cat2))
    return hipoteFunk
}
console.log (pitaFunk(3, 4))