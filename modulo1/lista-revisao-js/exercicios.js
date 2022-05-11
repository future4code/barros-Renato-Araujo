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
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
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