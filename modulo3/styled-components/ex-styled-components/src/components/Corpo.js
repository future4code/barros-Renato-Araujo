import React, { useState } from "react";
import {FormularioInputM, FormularioInputR, Formularios, FormulariosBox, Mensagens, Mensagem, Enviar, Nominho, Textinho} from "../style"

const Corpo=()=>{
    const [mensagem, setMensagem]=useState([
        {inputRemetente: "Renato Marques Peçanha Araújo", inputMensagem: "Olá, este projeto foi criado por mim no curso desenvolvedor full-stack da LABENU! Deixarei as instruções para BOTS altamente qualificados!"},
        {inputRemetente: "Bot Instrutor", inputMensagem: "Escreva seu nome e a mensagem que quer colocar no chat! Se o Remetente for Eu , não aparecerá remetente na mensagem!"},
        {inputRemetente: "Bot Instrutor", inputMensagem: "Você também poderá apagar mensagens já postadas clicando duas vezes sobre elas!"}
    ])

    const [inputRemetente, setInputRemetente]=useState("")
    const [inputMensagem, setInputMensagem]=useState("")

    const updateRemetente=(e)=>{
        setInputRemetente(e.target.value)
    }
    const updateMensagem=(e)=>{
        setInputMensagem(e.target.value)
    }

    const mensagemMap = mensagem.map((element, index)=>{
        return (
            <Mensagem onDoubleClick={()=>RemoveMensagem(index)} key={index}>
                <Nominho>{element.inputRemetente}</Nominho>
                <Textinho>{element.inputMensagem}</Textinho>
            </Mensagem>
        )
}
    )

    const addMensagem=(e)=>{
        e.preventDefault()
            if (inputRemetente === "Eu") {
        const mensagensAtualiazadas=[...mensagem, {inputMensagem}]  
        setMensagem(mensagensAtualiazadas)
            } else {
        const mensagensAtualiazadas=[...mensagem, {inputRemetente, inputMensagem}]
        setMensagem(mensagensAtualiazadas)
            }
        setInputRemetente("")
        setInputMensagem("")
    }

    const RemoveMensagem=(indexRemove)=>{
        const mensagensAtualiazadas=mensagem.filter((item, index)=> {
            return index !== indexRemove
        })
        setMensagem(mensagensAtualiazadas)
      }

    return (
    <Formularios>
        <Mensagens>
            <ul>
                {mensagemMap}    
            </ul>
        </Mensagens>
        <FormulariosBox>
        <span>Remetente:</span>
        <FormularioInputR type="text" required placeholder="Escreva seu nome..." value={inputRemetente} onChange={updateRemetente}></FormularioInputR>
        <span>Msg:</span>
        <FormularioInputM type="text" required placeholder="Escreva sua mensagem..." value={inputMensagem} onChange={updateMensagem}></FormularioInputM>
        <Enviar onClick={addMensagem}>►</Enviar>
        </FormulariosBox>
    </Formularios>
    )
}

export default Corpo;