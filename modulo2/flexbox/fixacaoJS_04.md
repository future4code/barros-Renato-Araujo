```JS 
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let contagem = 0
  for (numero of arrayDeNumeros) {
  if (numero == numeroEscolhido) {contagem ++}
  }
  if (contagem > 0) {
  return `O número ${numeroEscolhido} aparece ${contagem}x`
  } else {
  return `Número não encontrado`
  }
