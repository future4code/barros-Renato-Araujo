// const minhaString : string = 20
const meuNumero : number | string = 42 // usamos o | para poder também ser string

type Pessoa = {nome : string,
                idade: number,
                corFavorita: string}

enum arcoIris {RED = "red", URNGE = "urnge", GREEN = "green", BLUE = "blue", TURKWISE = "turkwise"}

const hero : Pessoa = {"nome": "Harry Potter",
                idade: 10,
                corFavorita : arcoIris.TURKWISE}

console.table(hero)