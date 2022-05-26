```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  // Escreva seu código aqui
  let salarioTotal = 2000 + qtdeCarrosVendidos * 100 + valorTotalVendas * 0.05;
  return salarioTotal;
}

function calculaPrecoTotal(quantidade) {
  if (quantidade < 12) {
    return quantidade * 1.3;
  }
  if (quantidade > 11) {
    return quantidade * 1;
  }
}
```
