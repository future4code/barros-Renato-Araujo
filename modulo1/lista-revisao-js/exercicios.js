// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    //return array.reverse()
    let newOrder = []
    for (let i=array.length-1; i>=0; i--) {newOrder.push(array[i])}
    return newOrder
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    //return array.sort(function(a,b) {return a-b})
    for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
        if (array[i] < array[j]) {
          let x = array[i];
          array[i] = array[j];
          array[j] = x;
        }
    }
}

return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
/*     const resultPares = array.filter(numero => numero %2==0);
    return resultPares */

numerosPares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2==0) {numerosPares.push(array[i])}
    }
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    numerosPares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2==0) {numerosPares.push(array[i]**2)}
    }
    return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let m = 0
    for (let i =0; i < array.length; i++) {
       
        if (array[i] > m) {m = array[i]}
    }
    return m
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   
    let comparacao = {
        maiorNumero: "", 
        maiorDivisivelPorMenor: "",
        diferenca: "",}
    let menorNumero    
    if (num1 > num2) {comparacao.maiorNumero=num1; menorNumero=num2} else {comparacao.maiorNumero=num2, menorNumero=num1}
    if (comparacao.maiorNumero % menorNumero == 0) {comparacao.maiorDivisivelPorMenor=true} else {comparacao.maiorDivisivelPorMenor=false}
        comparacao.diferenca = comparacao.maiorNumero - menorNumero
    return comparacao
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    let j = 0
    for (let i =0; i < n; i++) {
        numerosPares.push(j)
        j = j+2
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
let tipo = ""
    if ((ladoA == ladoB) && (ladoB == ladoC)) {
        tipo = "Equilátero"
        return tipo
    }         
    if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)) {
        tipo = "Isósceles"
        return tipo
    }
   else {
        tipo = "Escaleno"
        return tipo
    }
    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function(a,b) {return a-b})
    let numerosMaiorMenor = []
    numerosMaiorMenor.push(array[array.length-2])
    numerosMaiorMenor.push(array[1])
    return numerosMaiorMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
let pessoaAnonima = {...pessoa}
pessoaAnonima.nome = "ANÔNIMO"
return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
let pessoasAutorizadas = []
for (pessoa of pessoas) {
    if (pessoa.altura > 1.5) {
        if ((pessoa.idade > 14) && (pessoa.idade < 60)) {
            pessoasAutorizadas.push(pessoa)
        }
    }
}
return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
let pessoasNaoAutorizadas = []
for (pessoa of pessoas) {
    if ((pessoa.altura < 1.5) || (pessoa.idade < 15) || (pessoa.idade > 60))
    pessoasNaoAutorizadas.push (pessoa)
}
return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}