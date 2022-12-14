import { Pessoa } from "./Pessoa";

export class Docente extends Pessoa {
  especialidades: string[];

  constructor(
    id: string,
    nome: string,
    email: string,
    dataNascimento: string,
    turma: string,
    especialidades: string[]
  ) {
    super(id, nome, email, dataNascimento, turma);
    this.especialidades = especialidades;
  }
  //retorna nome docente
  public getNome(): string {
    return this.nome;
  }
}
