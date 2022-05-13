let rodada = 0;
let cartasPc = [];
let cartasPlayer = [];

console.log("Vamos começar a partida de Blackjack");

cartasPlayer.push(comprarCarta());

cartasPc.push(comprarCarta());
cartasPc.push(comprarCarta());
let valorPc = cartasPc[0].valor + cartasPc[1].valor;

if (confirm("Você quer começar uma partida nova?")) {
  blackJackFull();
} else {
  alert("Adeus");
  console.log("O jogo acabou");
  //window.close()
}

function blackJackFull() {
  console.log(cartasPlayer);
  /*  if (cartasPlayer[0].valor == 11 && cartasPlayer[1].valor == 11) {
    alert("A + A, recomeçando...");
    location.reload();
  } */
  cartasPlayer.push(comprarCarta());

  let maoPlayer = cartasPlayer.map((carta) => {
    return carta.texto;
  });

  let valorCartas = cartasPlayer.map((carta) => {
    return carta.valor;
  });

  let valorPlayer = valorCartas.reduce((partialSum, a) => partialSum + a, 0);

  function computadorJoga() {
    while (valorPlayer > valorPc && valorPlayer < 21) {
      let valorCartasPc = cartasPc.map((carta) => {
        return carta.valor;
      });
      valorPc = valorCartasPc.reduce((partialSum, a) => partialSum + a, 0);
      cartasPc.push(comprarCarta());
    }
    return valorPc;
  }

  if (valorPlayer == 21) {
    alert("BLACKJACK!");
  }
  if (valorPlayer > 21) {
    alert(`VOCÊ ESTOUROU COM ${valorPlayer} PONTOS!
    O computador fez ${computadorJoga()} pontos`);
  }
  if (valorPlayer < 21) {
    if (
      confirm(`SUAS CARTAS: ${maoPlayer} TOTAL ${valorPlayer}
      CARTA DO COMPUTADOR: ${cartasPc[0].texto}
      VOCÊ DESEJA COMPRAR MAIS UMA CARTA?`)
    ) {
      blackJackFull();
    } else {
      if (computadorJoga() > valorPlayer && computadorJoga() <= 21) {
        alert(
          `O COMPUTADOR FEZ ${valorPc} PONTOS E VOCÊ PERDEU COM ${valorPlayer}`
        );
      }
      if (computadorJoga() == valorPlayer) {
        alert(`O COMPUTADOR TAMBÉM FEZ ${valorPc} PONTOS E VOCÊS EMPATARAM!`);
      }
      if (computadorJoga() < valorPlayer) {
        alert(
          `O COMPUTADOR FEZ ${valorPc} PONTOS E VOCÊ VENCEU COM ${valorPlayer}!!!`
        );
      }
      if (computadorJoga() > 21 && valorPlayer < 21) {
        alert(
          `O COMPUTADOR ESTOUROU COM ${valorPc} PONTOS E VOCÊ VENCEU COM ${valorPlayer}!!!`)
      }
    }
  }
}
location.reload();