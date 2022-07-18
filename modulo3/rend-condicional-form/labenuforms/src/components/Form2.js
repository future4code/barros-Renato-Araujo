import React from "react";

export default function Form2() {
    return(
    <div>
        <p>Sobre o seu Curso Superior:</p>
        <span>Nome do Curso Superior:</span><input required type="text" placeholder="ex. Sintetização Biomolecular"></input><br />
        <span>Instituição de Ensino:</span><input required type="text" placeholder="ex. Universidade Federal de Arroio dos Ratos"></input><br />
    </div>
    )
}