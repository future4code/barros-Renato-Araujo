import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa {
  hobbies: string;

  constructor(
    id: string,
    nome: string,
    email: string,
    dataNascimento: string,
    turma: string,
    hobbies: string
  ) {
    super(id, nome, email, dataNascimento, turma);
    this.hobbies = hobbies;
  }
}
