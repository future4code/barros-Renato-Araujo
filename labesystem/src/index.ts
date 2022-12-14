import { Pessoa } from './class/Pessoa';
import { ping } from './endpoints/ping'
import { createUser } from './endpoints/createUser'
import { getUsers } from './endpoints/getUsers'
import { createProduct } from './endpoints/createProduct'
import { getProducts } from './endpoints/getProducts'
import app from './app';
import { Estudante } from './class/Estudante';

console.log(`õi`);

const estudante1=new Estudante(`001`,`Jr Prado`,`jj@ff.com`,new Date(`2022-02-02`),`JBL`,[`estudar`,`escutar musica`]);
estudante1.reflexao()
// console.log(estudante1.getNome());
Pessoa.saudacao(`Fay`);
// Estudante.saudacao(`Dea`);
// Estudante.saudacao(`Isra`);
// Estudante.mensagem();

// console.log(Estudante.soma(2,3));


















app.get("/ping", ping)

// Exercício 1 - Create users
app.post("/users", createUser)

// Exercício 2 - Get users
app.get("/users", getUsers)

// Exercício 3 - Create product
app.post("/products", createProduct)

// Exercício 4 - Get products
app.get("/products", getProducts)































// const carro1=new Carro("Gol","vermelho");

// const carro2=new Carro("FUSCA","AMARELO");
// const carro3=new Carro("FUSCA");

// carro1.setMarca("Ferrari")
// console.log(carro1.getMarca());

// carro1.frear();

// // console.log("saida: ");

// // carro1.frear();
// // carro2.frear();
// // carro3.frear();













