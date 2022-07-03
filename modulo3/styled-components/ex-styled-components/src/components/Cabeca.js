import React from "react";
import {Labelogo, Logotipo, Logotitle} from "../style"
import logoimg from "../img/logotipo.jpg"

export default function Cabeca(){
    return(
        <Logotipo>
            <Labelogo src={logoimg} alt='Teste do cabra'/>
            <Logotitle>Lab ZappaLin</Logotitle>
        </Logotipo>
    )
}