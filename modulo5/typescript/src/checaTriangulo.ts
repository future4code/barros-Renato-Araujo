const ladoA: any = process.argv[2]
const ladoB: any = process.argv[3]
const ladoC: any = process.argv[4]


function checaTriangulo(a: number, b: number, c: number) : string{
    if (a !== b && b !== c && a!== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  console.log(`Seu triângulo é ${checaTriangulo(ladoA, ladoB, ladoC)}`)
  