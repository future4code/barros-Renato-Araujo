type Estatistica = {maior: number, menor: number, media: number}

const num1 : any = process.argv[2]
const num2 : any = process.argv[3]
const num3 : any = process.argv[4]


function obterEstatisticas(numeros : number)
{

    const numerosOrdenados = numeros.sort(
        (a : number, b : number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type Amostra = {numeros:number,
                obterEstatisticas:number}

const amostraDeIdades : Amostra = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros : number) => {...}
}