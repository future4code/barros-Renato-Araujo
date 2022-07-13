import React, { useState } from "react";

export default function Form1() {

    const [escolaridade, setEscolaridade] = useState("")
    const atualizaEscolaridade=(e)=>{
        console.log(escolaridade)       
    }

    return(
    <div>
        <p>Você foi pré-selecionado! Preencha os campos abaixo com suas informações:</p>
        <span>Seu nome (pelo qual você se identifica):</span><input required type="text" placeholder="Nome"></input><br />
        <span>Sua idade:</span><input required type="text" placeholder="Idade"></input><br />
        <span>Seu endereço de E-Mail:</span><input required type="text" placeholder="E-Mail"></input><br />
        <span>Seu grau de instrução:</span>
        <select onChange={atualizaEscolaridade}>
            <option value="1">Ensino Médio Incompleto</option>
            <option value="2">Ensino Médio Completo</option>
            <option value="3">Ensino Superior Incompleto</option>
            <option value="4">Ensino Superior Completo</option>
        </select>
    </div>
    )
}