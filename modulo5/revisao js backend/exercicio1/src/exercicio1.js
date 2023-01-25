const ladoA = process.argv[2]
const ladoB = process.argv[3]
const ladoC = process.argv[4]

function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  console.log = `Seu triângulo é:`
  checaTriangulo(ladoA, ladoB, ladoC)