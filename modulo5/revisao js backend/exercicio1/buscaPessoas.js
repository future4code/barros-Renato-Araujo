import { nomesPessoas } from "./data.js" // dados na máquina

const nome = process.argv[2] // entrada

function buscaNome (nome) {
    let busca = []
    nomesPessoas.forEach((item)=>{
    if (item.name.includes (nome))
        busca.push(item)
    }
    )

  return busca
} 
 console.table(buscaNome(nome))