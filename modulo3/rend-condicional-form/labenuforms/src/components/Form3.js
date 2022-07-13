import React from "react";

export default function Form3() {
    return(
    <div>
        <p>Sobre seu curso de graduação...:</p>
        <span>Por quê você não terminou o curso de graduação ?:</span><input required type="text" placeholder="Nome"></input><br />
        <span>Por quê você não terminou o curso de graduação ?:</span><br />
        <select>
            <option value="1">Curso Técnico</option>
            <option value="2">Curso de Inglês</option>
            <option value="3">Não fiz curso complementar</option>
        </select>
    </div>
    )
}