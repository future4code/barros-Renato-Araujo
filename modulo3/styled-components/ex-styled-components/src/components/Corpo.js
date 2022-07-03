import React from "react";
import {FormularioInputM, FormularioInputR, Formularios, FormulariosBox} from "../style"

const Corpo=()=>{
    return (
    <Formularios>
        <FormulariosBox>
        <span>Remetente:</span>
        <FormularioInputR></FormularioInputR>
        <span>Msg:</span>
        <FormularioInputM></FormularioInputM>
        <button>Enviar Mensagem</button>
        </FormulariosBox>
    </Formularios>
    )
}
export default Corpo;