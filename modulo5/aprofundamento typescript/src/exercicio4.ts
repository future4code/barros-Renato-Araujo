type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// para transpilar, usaremos o comando tsc exercicio4.ts no terminal
// sim, se o arquivo estiver na pasta src, devemos mudar parâmetros no arquivo tsconfig.json
// sim, usando vários arquivos na pasta src, transpilando-os com o comando tsc no terminal para a pasta destino build