export abstract class Pessoa{
protected id:string;
protected nome:string;
protected email:string;
protected dataNascimento:string;
protected turma:string;

    constructor(id:string, nome:string, email:string , dataNascimento:string, turma:string){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.turma = turma;
    }

    // public static saudacao(nome:string){
    //     console.log(`Olá ${nome} ! Prazer em te conhecer`);       
    // }

}