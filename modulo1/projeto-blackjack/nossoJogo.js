console.log("Boas vindas ao jogo de Blackjack!");
if (confirm("Você quer começar uma partida nova?")) {
  blackJack();
} else {
  alert("Adeus");
  console.log("O jogo acabou");
  //window.close()
}

function blackJack() {
  const p1c1 = comprarCarta();
  const p1c2 = comprarCarta();
  const p2c1 = comprarCarta();
  const p2c2 = comprarCarta();

  somaPlayer = p1c1.valor + p1c2.valor;
  somaComputador = p2c1.valor + p2c2.valor;

  console.log(
    `Usuário - Cartas: ${p1c1.texto} ${p1c2.texto} - Pontuação: ${somaPlayer}`
  );
  console.log(
    `Computador - Cartas: ${p2c1.texto} ${p2c2.texto} - Pontuação: ${somaComputador}`
  );

  if (somaPlayer > somaComputador) {
    console.log("O usuário ganhou!");
  }
  if (somaComputador > somaPlayer) {
    console.log("O computador ganhou!");
  }
  if (somaComputador == somaPlayer) {
    console.log("Empate!");
  }
}
